import React from 'react'
import { Input, Button, Icon } from 'antd'
import { login } from '@/redux/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './login.scss'

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }

  handleChange (key, value) {
    this.setState({
      [key]: value
    })
  }

  handleLogin () {
    this.props.login(this.state) 
  }

  render () {
    return (
      <React.Fragment>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
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
      </React.Fragment>
    )
  }
}

export default Login