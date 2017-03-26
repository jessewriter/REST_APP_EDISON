import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { LedController } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  LedController.create(body)
    .then((ledController) => ledController.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  LedController.find(query, select, cursor)
    .then((ledControllers) => ledControllers.map((ledController) => ledController.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  LedController.findById(params.id)
    .then(notFound(res))
    .then((ledController) => ledController ? ledController.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  LedController.findById(params.id)
    .then(notFound(res))
    .then((ledController) => ledController ? _.merge(ledController, body).save() : null)
    .then((ledController) => ledController ? ledController.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  LedController.findById(params.id)
    .then(notFound(res))
    .then((ledController) => ledController ? ledController.remove() : null)
    .then(success(res, 204))
    .catch(next)
