const Koa = require('koa')
const requireDirectory = require('require-directory')
const bodyparser = require('koa-bodyparser')
const router = require('./app/router')
const user = require('./app/router/user')
const catchError = require('./app/middlewares/exception') //全局异常处理函数

require('./app/models/user')

const app = new Koa()

//全局异常捕获
app.use(catchError)


app.use(bodyparser())

router.use('/user',user.routes())
app.use(router.routes(),router.allowedMethods())

app.listen(8000,()=>{
  console.log('server is running in 8000')
})