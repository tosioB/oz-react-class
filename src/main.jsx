import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CounterProvider } from './context/33-counterContext.jsx'
import { MenuProvider } from './create_context/04-카페_키오스크_만들기/menuContext.jsx'
import { CartProvider } from './create_context/04-카페_키오스크_만들기/cartContext.jsx'

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
)
