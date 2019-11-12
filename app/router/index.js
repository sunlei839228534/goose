const Router = require('koa-router')
const router = new Router()

const {HttpException} = require('../middlewares/http-exception')
const {PositiveIntergerValidator} = require('../validators/validator.js')

router.post('/',async (ctx,next) => {
  const data = ctx.request.body
  const v = new PositiveIntergerValidator().validate(ctx)


  if(JSON.stringify(data) === '{}') {
    const error = new HttpException('未提交数据!',10001, 400)
    // error.requestUrl = `${ctx.method}${ctx.path}`
    throw error
  }
  ctx.body = {
    data
  }

})

module.exports = router