const Koa = require('koa')

const app = new Koa()

app.use(async (ctx)=>{
  ctx.body = "hello"
})

app.listen(8000,()=>{
  console.log('server is running in 8000')
})