/*
后台应用的路由器模块
1. 引入express
2. 得到路由器
3. 注册n个路由
4. 向外暴露路由器
5. 通过 app使用上路由器
 */

// 1. 引入express
const express = require('express')
const md5 = require('blueimp-md5') //密文 =md5(明文)
const models = require('./models')
const UserModel = models.getModel('user')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉
// 2. 得到路由器
const router = express.Router()
// 3. 注册n个路由
//用户注册路由
// 路由回掉函数的3步
// 1.获取请求参数

// 3.返回响应
router.post('/register',function (req ,res) {
  const {name,pwd,type} = req.body//包含所有的请求参数的对象
  // 2.处理（操作数据库数据）
  // 2.1 根据name 查询是否已经存在，
  UserModel.findOne({name},function (err , user) {
      //3.1 如果已经存在，返回一个错误的提示
    if(user){
      return res.send({code:1 , msg:'用户名已经存在'})//code：数据的标识 1：cuowu 0：正确

    }
    //2.2如果不存在 保存到数据库
    const userModel = new UserModel({name,pwd:md5(pwd),type})
    userModel.save(function (err,user) {
        //向浏览器返回 cookie（key=value）
      res.cookie('userid',user._id)
      //3.2 返回数据--新的user
      res.send({code:0,data:{_id:user._id,name,pwd,type}})
    })
  })

})
//用户登录路由
router.post('/login',function (req ,res) {
    //1获取请求参数
  const  {name,pwd} =req.body
    //2 根据name和 pwd 查询对应的user
  UserModel.findOne({name,pwd:md5(pwd)},_filter,function (err,user) {//filter  过滤
    //3.1存在。返回user数据
    if(!user) {
      res.send({code: 1, msg: '用户名或密码错误'})
    } else {
      // 生成一个cookie(userid: user._id), 并交给浏览器保存
      res.cookie('userid', user._id)
      // 3.2. 如果user有值, 返回user
      res.send({code: 0, data: user}) // user中没有pwd
    }
  })
})

// 4. 向外暴露路由器
module.exports = router
// 5. 通过 app使用上路由器

/*
cookie:
1. 在哪生成: 服务器
2. 在哪保存: 浏览器
3. 如何使用: 浏览器请求服务器会自动携带对应的cookie
4. 在哪读cookie: 服务器处理请求时读取
 */