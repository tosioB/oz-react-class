import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './context/33-counterContext.jsx'
import { MenuProvider } from './create_context/04-카페_키오스크_만들기/menuContext.jsx'
import { CartProvider } from './create_context/04-카페_키오스크_만들기/cartContext.jsx'
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <MenuProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MenuProvider>
      </CounterProvider>
    </BrowserRouter>
  // </React.StrictMode>,


  // 34, 35번 Redux 강의 화면을 위한 태그(다른곳에서는 오류가 발생하기때문에 따로 나누기)
  // import App, {store} from './App.jsx'
  // <Provider store={store}>
  //   <App />
  // </Provider>
)
