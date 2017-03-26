import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LedController, { schema } from './model'

const router = new Router()
const { isOn, name, color, frequency, duration } = schema.tree

/**
 * @api {post} /LedControllers Create led controller
 * @apiName CreateLedController
 * @apiGroup LedController
 * @apiParam isOn Led controller's isOn.
 * @apiParam name Led controller's name.
 * @apiParam color Led controller's color.
 * @apiParam frequency Led controller's frequency.
 * @apiParam duration Led controller's duration.
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 */
router.post('/',
  body({ isOn, name, color, frequency, duration }),
  create)

/**
 * @api {get} /LedControllers Retrieve led controllers
 * @apiName RetrieveLedControllers
 * @apiGroup LedController
 * @apiUse listParams
 * @apiSuccess {Object[]} ledControllers List of led controllers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /LedControllers/:id Retrieve led controller
 * @apiName RetrieveLedController
 * @apiGroup LedController
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /LedControllers/:id Update led controller
 * @apiName UpdateLedController
 * @apiGroup LedController
 * @apiParam isOn Led controller's isOn.
 * @apiParam name Led controller's name.
 * @apiParam color Led controller's color.
 * @apiParam frequency Led controller's frequency.
 * @apiParam duration Led controller's duration.
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 */
router.put('/:id',
  body({ isOn, name, color, frequency, duration }),
  update)

/**
 * @api {delete} /LedControllers/:id Delete led controller
 * @apiName DeleteLedController
 * @apiGroup LedController
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Led controller not found.
 */
router.delete('/:id',
  destroy)

export default router
