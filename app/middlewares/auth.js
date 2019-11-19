const basicAuth = require('basic-auth')
const {Forbbiden} = require('../middlewares/http-exception')
//验证token中间件
class Auth {
  constructor() {

  }

  get m() {
    return async (ctx,next) => {
      const userToken = basicAuth(ctx.req)
      let errMsg = 'token不合法'
      if(!userToken || !userToken.name) {
        throw new Forbbiden()
      }
      try {
        let decode = jwt.verify(userToken.name,'djisnoadkfisfamodsnfsofnsaifsa')
      }catch (error) {
        if(error.name == 'TokenExpiredError') {
          errMsg = 'token已过期'
        }
        throw new Forbbiden(errMsg)

      }
      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope
      }
      await next()
    }
  }
}


module.exports = {
  Auth
}