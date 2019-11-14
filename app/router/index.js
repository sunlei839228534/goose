const Router = require('koa-router')
const router = new Router()

const {HttpException} = require('../middlewares/http-exception')
const {PositiveIntergerValidator} = require('../validators/validator.js')


router.post('/login',async (ctx,next) => {
  const data = ctx.request.body
  ctx.body = data
})

module.exports = router