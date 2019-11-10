const Koa = require('koa')
const requireDirectory = require('require-directory')
const Router = require('koa-router')

const router = new Router()

router.get('/',(ctx,next) => {

})


const app = new Koa()



app.listen(8000,()=>{
  console.log('server is running in 8000')
})