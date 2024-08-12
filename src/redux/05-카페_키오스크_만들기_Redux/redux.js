import { combineReducers, legacy_createStore } from "redux"
import data from "../../assets/create_screen_data/05-카페_키오스크_만들기_Redux"

export const addToCart = (options, quantity, id) => { // Action
  return {
    type: 'addToCart',
    payload: {options, quantity, id}
  }
}

export const removeFromCart = (id) => { // Action
  return {
    type: 'removeFromCart',
    payload: {id}
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'addToCart':
      return [...state, action.payload]
    case 'removeFromCart':
      return state.filter(el => action.payload.id !== el.id)
    default:
      return state;
  }
}

const menuReducer = (state = data.menu, action) => {
  return state
}

const rootReducer = combineReducers({cartReducer, menuReducer});

export const store = legacy_createStore(rootReducer);