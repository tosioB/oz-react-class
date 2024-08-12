import { useState } from 'react'
import './assets/create_screen_css/05-카페_키오스크_만들기_Redux.scss'
import data from './assets/create_screen_data/05-카페_키오스크_만들기_Redux'
import Header from './05-카페_키오스크_만들기_Redux/Header'
import Menu from './05-카페_키오스크_만들기_Redux/Menu'
import { Route, Routes } from 'react-router-dom'
import Cart from './05-카페_키오스크_만들기_Redux/Cart'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App