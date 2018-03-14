/*
后台启动服务器的入口模块
1. 引入express
2. 生成应用对象(执行express函数)
3. 注册根路由(使用app的use())
4. 启动服务器(使用app监听指定端口)
 */

// 1. 引入express
const express = require('express')
const bodyParser = require('body-parser')//解析请求体
const cookieParser = require('cookie-parser')//解析 cookie

//引入应用路由器
const appRouter = require('./appRouter')
// 2. 生成应用对象(执行express函数)
const app = express()
// 3. 注册根路由(使用app的use())
app.use('/',function (req,res) {
  res.send('hello server!')
})
app.use(cookieParser())//解析cookie数据
app.use(bodyParser.json())//解析请求体 ：json 数据格式
app.use(bodyParser.urlencoded({extended:false}))//解析请求体（表单数据）


app.use('/api',appRouter)//请求注册：/api /register
// 4. 启动服务器(使用app监听指定端口)
app.listen('3000',()=>{
  console.log('start server at port 3000');
})
