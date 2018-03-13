
import React from 'react';
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button,Radio} from 'antd-mobile'

import Logo from '../../components/logo/logo'
const RadioItem = Radio.RadioItem
export default class Register extends React.Component{
  state={
    name:'',
    pwd:'',
    pwd2:'',
    type:'boss'
  }
  // 处理输入框/单选框变化, 收集数据到state
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  // 跳转到login路由
  toLogin = () => {
    this.props.history.replace('/login')
  }

  // 注册
  register = () => {
    console.log(JSON.stringify(this.state))
  }

  render(){
    const {type}=this.state
    return(
      <div>
        <NavBar>硅 谷 直 聘 </NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem placeholder='输入用户名' onChange={val =>this.handleChange('name',val)} >
              用户名：
            </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placehoder='输入密码' onChange={val => this.handleChange('pwd', val)}>
            密码：
             </InputItem>
            <WhiteSpace/>
            <InputItem type='password' placehoder='输入密码' onChange={val => this.handleChange('pwd2', val)}>
              确认密码:
            </InputItem>
            <WhiteSpace/>
              <RadioItem checked = {type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>
                Boss
              </RadioItem>
            <RadioItem checked={type === 'genius'} onChange={()=>this.handleChange('type','genius')}>
              牛人
            </RadioItem>

        <Button type='primary' onClick={this.register}>
          注册账号
        </Button>
        <WhiteSpace/>
        <Button onClick={this.toLogin}>
          已经有账号
        </Button>
        </List>
        </WingBlank>
      </div>

    )
  }
}