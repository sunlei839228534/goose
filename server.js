const Koa = require('koa')
const requireDirectory = require('require-directory')
const bodyparser = require('koa-bodyparser')
const router = require('./app/router')
const catchError = require('./app/middlewares/exception') //全局异常处理函数

const app = new Koa()
app.use(catchError)
app.use(bodyparser())

app.use(router.routes(),router.allowedMethods())

app.listen(8000,()=>{
  console.log('server is running in 8000')
})