import React from 'react'
import { Input, Button, Icon } from 'antd'

import './login.scss'

class Login extends React.Component {
  render () {
    return (
      <div className="login">
        <h3>管理员登录</h3>
        <Input
          placeholder="用户名"
          size="large"
          style={{marginBottom: 30}}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          type="password"
          placeholder="密码"
          size="large"
          style={{marginBottom: 30}}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Button style={{width: '100%'}} type="primary">登录</Button>
      </div>
    )
  }
}

export default Login