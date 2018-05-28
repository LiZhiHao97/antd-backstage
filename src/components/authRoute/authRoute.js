import React from 'react'
import axios from 'axios'
import { loadData } from '@/redux/actions'
import { withRouter } from 'react-router-dom' 
import { connect } from 'react-redux'

@withRouter
@connect (
  null,
  { loadData }
)
class AuthRoute extends React.Component {
  componentDidMount () {
    const publicList = ['/login']
    const { pathname } = this.props.location
    if (publicList.indexOf(pathname) > -1) {
      return null
    }

    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息
            this.props.loadData(res.data.data)
          } else {
            this.props.history.push('/login')
          }
        }
      })
  }
  render () {
    return null
  }
}

export default AuthRoute