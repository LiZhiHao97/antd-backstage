import * as ActionTypes from './actionTypes'
import axios from 'axios'

function errorMsg (msg) {
  return { msg, type: ActionTypes.ERROR_MSG }
}

export function loginSuccess (data) {
  return { type: ActionTypes.LOGIN_SUCCESS, payload: data }
}

export function loadData (userInfo) {
  return { type: ActionTypes.LOAD_DATA, payload: userInfo }
}

export function login({ user, pwd }) {
  if (!user || !pwd) {
    return errorMsg('用户名密码不得为空')
  }

  return dispatch => {
    axios.post('/user.login', { user, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(loginSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}