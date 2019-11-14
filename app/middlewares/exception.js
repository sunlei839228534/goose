const {HttpException} = require('../middlewares/http-exception')

const catchError = async (ctx,next) => {
  try {
    await next()
  } catch (error) {
    if(error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method}${ctx.path}`
      }
      ctx.status = error.code
    } else {
      ctx.body = {
        msg: error.msg,
        error_code: error.error_code,
        request: `${ctx.method}${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError