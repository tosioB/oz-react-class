import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './assets/create_screen_css/02-동물_정보_사이트.css';
import Main from './02-동물_정보_사이트_component/Main';
import Detail from './02-동물_정보_사이트_component/Detail';
import Search from './02-동물_정보_사이트_component/Search';
import { useState } from 'react';

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
              {/* 깃 연결 확인 */}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/detail/:id" element={ <Detail /> } /> {/* 상세페이지를 위한 /:id */}
          <Route path="/search" element={ <Search /> } />
        </Routes>
      </div>
    </>
  )
}
export default App

// 동물 정보 사이트 만들기

// 구현할 기능
// 1. 메인페이지에서 동물 목록 화면에 표시하기
// 2. 동물 상세 정보 페이지 만들기
// 3. 동물 이름으로 검색할 수 있는 기능 만들기
// 4. 검색 결과 페이지 만들기