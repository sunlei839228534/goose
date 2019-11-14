const Router = require('koa-router')

const {RegisterValidator} = require('../validators/validator')

const router = new Router()

router.post('/register',async (ctx,next) => {
  const v = await new RegisterValidator().validate(ctx)
})

module.exports = router