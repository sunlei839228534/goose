const Router = require('koa-router')
const { User } = require('../models/user')
const {LoginType} = require('../validators/enum')

const { Success,ParameterException } = require('../middlewares/http-exception')
const {RegisterValidator,TokenValidator} = require('../validators/validator')

const router = new Router()

router.post('/register',async (ctx,next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password1'),
    nickname: v.get('body.nickname')
  }
  await User.create(user)
  throw new Success()
})

router.post('/token',async (ctx,next) => {
  const v = await new TokenValidator().validate(ctx)
  switch(v.get('body.type')) {
    case LoginType.USER_EMAIL:
    await emailLogin(v.get('body.account'),v.get('body.secret'))
    break
    case LoginType.USER_MINI_PROGRAM: 
    break;
    default: 
    throw new ParameterException('没有相应的处理函数')
    break;
  }
})

async function emailLogin(account,secret) {
  const user = await User.verifyEmailPassword(account,secret)
}

module.exports = router