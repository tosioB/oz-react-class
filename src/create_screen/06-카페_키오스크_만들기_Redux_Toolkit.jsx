import './assets/create_screen_css/06-카페_키오스크_만들기_Redux_Toolkit.scss'
import Header from './06-카페_키오스크_만들기_Redux_Toolkit/Header'
import Menu from './06-카페_키오스크_만들기_Redux_Toolkit/Menu'
import { Route, Routes } from 'react-router-dom'
import Cart from './06-카페_키오스크_만들기_Redux_Toolkit/Cart'

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