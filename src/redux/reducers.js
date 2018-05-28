import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
}

export function user (state = initState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, msg: '', redirectTo: '/product', isAuth: true }
    case ActionTypes.LOAD_DATA: 
      return { ...state, ...action.payload }
    case ActionTypes.ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

// 合并reducer
export default combineReducers({ user })