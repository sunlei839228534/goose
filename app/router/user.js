const Router = require('koa-router')
const { User } = require('../models/user')

const {RegisterValidator} = require('../validators/validator')

const router = new Router()

router.post('/register',async (ctx,next) => {
  const v = new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password1'),
    nickname: v.get('body.nickname')
  }
    await User.create(user)
})

module.exports = router