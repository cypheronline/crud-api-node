import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export TestApi, { schema } from './model'

const router = new Router()
const { name, age, gender } = schema.tree

/**
 * @api {post} /test-apis Create test api
 * @apiName CreateTestApi
 * @apiGroup TestApi
 * @apiParam name Test api's name.
 * @apiParam age Test api's age.
 * @apiParam gender Test api's gender.
 * @apiSuccess {Object} testApi Test api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test api not found.
 */
router.post('/',
  body({ name, age, gender }),
  create)

/**
 * @api {get} /test-apis Retrieve test apis
 * @apiName RetrieveTestApis
 * @apiGroup TestApi
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of test apis.
 * @apiSuccess {Object[]} rows List of test apis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /test-apis/:id Retrieve test api
 * @apiName RetrieveTestApi
 * @apiGroup TestApi
 * @apiSuccess {Object} testApi Test api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test api not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /test-apis/:id Update test api
 * @apiName UpdateTestApi
 * @apiGroup TestApi
 * @apiParam name Test api's name.
 * @apiParam age Test api's age.
 * @apiParam gender Test api's gender.
 * @apiSuccess {Object} testApi Test api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test api not found.
 */
router.put('/:id',
  body({ name, age, gender }),
  update)

/**
 * @api {delete} /test-apis/:id Delete test api
 * @apiName DeleteTestApi
 * @apiGroup TestApi
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Test api not found.
 */
router.delete('/:id',
  destroy)

export default router
