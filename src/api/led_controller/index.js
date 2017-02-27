import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export LedController, { schema } from './model'

const router = new Router()
const { name, color, intensity, frequency, duration } = schema.tree

/**
 * @api {post} /led_controllers Create led controller
 * @apiName CreateLedController
 * @apiGroup LedController
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Led controller's name.
 * @apiParam color Led controller's color.
 * @apiParam intensity Led controller's intensity.
 * @apiParam frequency Led controller's frequency.
 * @apiParam duration Led controller's duration.
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, color, intensity, frequency, duration }),
  create)

/**
 * @api {get} /led_controllers Retrieve led controllers
 * @apiName RetrieveLedControllers
 * @apiGroup LedController
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Object[]} ledControllers List of led controllers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /led_controllers/:id Retrieve led controller
 * @apiName RetrieveLedController
 * @apiGroup LedController
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 * @apiError 401 master access only.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /led_controllers/:id Update led controller
 * @apiName UpdateLedController
 * @apiGroup LedController
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Led controller's name.
 * @apiParam color Led controller's color.
 * @apiParam intensity Led controller's intensity.
 * @apiParam frequency Led controller's frequency.
 * @apiParam duration Led controller's duration.
 * @apiSuccess {Object} ledController Led controller's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Led controller not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, color, intensity, frequency, duration }),
  update)

/**
 * @api {delete} /led_controllers/:id Delete led controller
 * @apiName DeleteLedController
 * @apiGroup LedController
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Led controller not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
