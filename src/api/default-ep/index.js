import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'

const router = new Router()

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
    ((req, res) => {
        var data = "<b>GET</b> /test-apis <br><br>\
             <b>GET</b> /test-apis/:id <br><br>\
             <b>POST</b> /test-apis <br><br>\
             <b>PUT</b> /test-apis/:id <br><br>\
             <b>DELETE</b> /test-apis"
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();

        res.json({
            endpoints: [
                "GET /test-apis",
                "GET /test-apis/:id",
                "POST /test-apis",
                "PUT /test-apis/:id",
                "DELETE /test-apis"
            ]
        })
    })
)

export default router
