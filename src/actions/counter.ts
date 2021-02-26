import {
  ADD,
  MINUS,
  GET
} from '../constants/counter'
import Taro from "@tarojs/taro";

export const setname = (name) => {
  return {
    type: GET,
    payload: name
  }
}
export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(minus())
    }, 2000)
  }
}

export function getname() {
  return dispatch => {
    Taro.request({
      url: 'http://www.swag666.com:8081/hello',
      success: function (res) {
        dispatch(setname(res.data.name))
      }
    })
  }
}