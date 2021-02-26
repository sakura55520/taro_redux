import { ADD, MINUS, GET } from '../constants/counter'

const INITIAL_STATE = {
  num: ''
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: '龙泽球'
      }
    case MINUS:
      return {
        ...state,
        num: '龙泽球'
      }
    case GET:
      return {
        ...state,
        num: action.payload
      }
    default:
      return state
  }
}
