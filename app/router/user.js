const Router = require('koa-router')
const { User } = require('../models/user')

const { Success } = require('../middlewares/http-exception')
const {RegisterValidator} = require('../validators/validator')

const router = new Router()

router.post('/register',async (ctx,next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password1'),
    nickname: v.get('body.nickname')
  }
  const r = await User.create(user)
  throw new Success()
})

router.post('/token',async (ctx,next) => {
  
})

module.exports = router