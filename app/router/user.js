const Router = require('koa-router')
const { User } = require('../models/user')
const { LoginType } = require('../validators/enum')

const {Auth} = require('../middlewares/auth')
const {generateToken} = require('../../core/util')

const { Success,ParameterException } = require('../middlewares/http-exception')
const {RegisterValidator,TokenValidator} = require('../validators/validator')

const router = new Router()

router.get('/latest',new Auth().m,async(ctx,next) => {
  ctx.body = ctx.auth.uid
})


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
  //token获取接口 分析登录类型,验证account 和 secret密码,生成token返回
  const v = await new TokenValidator().validate(ctx)
  let token;
  switch(v.get('body.type')) {
    case LoginType.USER_EMAIL:
    token = await emailLogin(v.get('body.account'),v.get('body.secret'))
    break
    case LoginType.USER_MINI_PROGRAM: 
    break;
    default: 
    throw new ParameterException('没有相应的处理函数')
  }
  ctx.body = {
    token
  }
})

async function emailLogin(account,secret) {
  const user = await User.verifyEmailPassword(account,secret)
  return token = generateToken(user.id, 2)
}

module.exports = router

