// import { combineReducers, legacy_createStore } from "redux"
import data from "../../assets/create_screen_data/06-카페_키오스크_만들기_Redux_Toolkit"
import { configureStore, createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
  name: 'menu',
  initialState: data.menu,
  reducers: {

  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) { return [...state, action.payload] },
    removeFromCart(state, action) { return state.filter(el => action.payload !== el.id) },
  }
})

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  }
})

// export const addToCart = (options, quantity, id) => { // Action
//   return {
//     type: 'addToCart',
//     payload: {options, quantity, id}
//   }
// }

// export const removeFromCart = (id) => { // Action
//   return {
//     type: 'removeFromCart',
//     payload: {id}
//   }
// }

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'addToCart':
//       return [...state, action.payload]
//     case 'removeFromCart':
//       return state.filter(el => action.payload.id !== el.id)
//     default:
//       return state;
//   }
// }

// const menuReducer = (state = data.menu, action) => {
//   return state
// }

// const rootReducer = combineReducers({cartReducer, menuReducer});
