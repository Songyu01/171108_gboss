//用户登陆路由组建
import React,{Comonent} from 'react';
import {WingBlank, List, InputItem, WhiteSpace, Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'
export default class Login extends React.Component{
  state={
    name:'name',
    pwd:'',
  }

  // 处理输入框/单选框变化, 收集数据到state
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  // 跳转到注册路由
  toRegister = () => {
    this.props.history.replace('/register')
  }

  // 注册
  login = () => {
    console.log(JSON.stringify(this.state))
  }
  render(){
    return(
      <div>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem
              placeholder='输入用户名'
              onChange={val => this.handleChange('name', val)}
            >
              用户名:
            </InputItem>
            <WhiteSpace/>
            <InputItem
              type='password'
              placeholder='输入密码'
              onChange={val => this.handleChange('pwd', val)}
            >
              密 码:
            </InputItem>
            <WhiteSpace/>

            <Button type='primary' onClick={this.login}>登 陆</Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>还没有账号</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}