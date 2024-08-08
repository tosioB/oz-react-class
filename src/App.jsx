import { useState } from 'react'
import './assets/create_screen_css/04-카페_키오스크_만들기.scss'
import data from './assets/create_screen_data/04-카페_키오스크_만들기'
import Header from './04-카페_키오스크_만들기/Header'
import Menu from './04-카페_키오스크_만들기/Menu'
import Cart from './04-카페_키오스크_만들기/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [ menu, setMenu ] = useState(data.menu)
  const [ cart, setCart ] = useState([])

  console.log(cart)
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Menu menu={menu} cart={cart} setCart={setCart} />}/>
          <Route path='/cart' element={<Cart menu={menu} cart={cart} setCart={setCart} />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

// React 전역 상태관리 개념 정리하기

// React는 대표적인 SPA 라이브러리
// React의 SPA 구현 방법 - 상태변경 > 리 렌더링(상태를 잘 관리하는 것이 매우 중요하다.)

/* React의 내부에서 상태를 관리하는 방법
- useState
- Context API
*/

/* React의 외부에서 상태를 관리하는 방법
- Redux
- Redux Toolkit
- Recoil
- MobX
- Zustand
- Jotai
*/

/* 전역 상태 관리의 필요성
- 여러 컴포넌트에서 상태를 사용해야 할 때
- 규모가 큰 프로젝트를 진행할 때 사용하면 좋다.
*/

// useState를 제외한 모든 방법들은 React의 전역 상태를 관리할 수 있게 도와주는 도구들이다.

// useState만 사용해 상태를 관리했을 때 나타나는 현상 - Props Drilling

/* Props Drilling
- Props Drilling - 드릴질 하는 것처럼 Props를 계속 내려주는 것
- Props Drilling이 많이 발생하면 구조가 복잡해지고 코드도 지저분해진다.
- Props Drilling 자체는 React로 개발하다 보면 발생하는 자연스러운 현상
- 상태를 체계적으로 설계해서 사용하면 useState만으로도 규모있는 애플리케이션을 만들 수 있음
*/