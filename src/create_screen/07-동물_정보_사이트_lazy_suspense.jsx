import { Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import './assets/create_screen_css/07-동물_정보_사이트_lazy_suspense.css';
// import Main from './07-동물_정보_사이트_component_lazy_suspense/Main';
// import Detail from './07-동물_정보_사이트_component_lazy_suspense/Detail';
// import Search from './07-동물_정보_사이트_component_lazy_suspense/Search';

const Main = lazy (() => import("./07-동물_정보_사이트_component_lazy_suspense/Main"));
const Detail = lazy (() => import("./07-동물_정보_사이트_component_lazy_suspense/Detail"));
const Search = lazy (() => import("./07-동물_정보_사이트_component_lazy_suspense/Search"));

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <div>
        <header>
          <div className='flex-center'>
            <span className='inp-box'>
              <input value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} />
            </span>
            <button
              type='button'
              className='btn'
              onClick={() => {navigate(`/search?animal=${inputValue}`)}} // 검색페이지를 위한 navigate
            >
              검색
            </button>
          </div>
        </header>
        <Suspense fallback={<h1>로딩중</h1>}>
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/detail/:id" element={ <Detail /> } /> {/* 상세페이지를 위한 /:id */}
            <Route path="/search" element={ <Search /> } />
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
export default App

// lazy & Suspense

/** lazy
 * 컴포넌트를 바로 불러오지 않고 실제로 그 컴포넌트가 필요할 때 불러옴
 * const Main = lazy(() => import("./Main.jsx"));
*/ 

/** Suspense
 * 컴포넌트를 불러오는 동안 사용자에게 보여줄 임시 화면 설정
 * <Suspense fallback={"로딩중..."} <Main /> </Suspense>
 * 
 * Suspense의 자식 컴포넌트로 lazy를 사용해서 import해온 컴포넌트를 넣어주면 된다.
 * Suspense에 넣어둔 컴포넌트가 로딩 될 때까지 fallback에 작성된 화면이 임시화면으로 표시된다.
*/