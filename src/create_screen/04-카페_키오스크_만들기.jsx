import './assets/create_screen_css/04-카페_키오스크_만들기.scss'
import Header from './04-카페_키오스크_만들기/Header'
import Menu from './04-카페_키오스크_만들기/Menu'
import Cart from './04-카페_키오스크_만들기/Cart'
import { Route, Routes } from 'react-router-dom'

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
