import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './assets/create_screen_css/08-동물_정보_사이트_Debounce_Throttle.css';
import Main from './08-동물_정보_사이트_component_Debounce_Throttle/Main';
import Detail from './08-동물_정보_사이트_component_Debounce_Throttle/Detail';
import Search from './08-동물_정보_사이트_component_Debounce_Throttle/Search';
import { useState } from 'react';

/** Debounce & Throttle 참고
 * 이 페이지에서 가져오고 있는
 * Search 컴포넌트에서 
 * Debounce & Throttle에 대한 코드를
 * 볼 수 있다.
 */

function App() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <div>
        <header>
          <div className='flex-center'>
            <span className='inp-box'>
              <input
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                  navigate(`/search?animal=${inputValue}`);
                }} />
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

/** Debounce & Throttle
 * 연속적으로 발생하는 함수나 이벤트를 묶어서 처리하는 방식
 * 최적화를 통한 성능 향상 목적
*/

/** Debounce
 * 함수나 이벤트가 연속적으로 발생하는동안 쭉 지켜보고 있다가 마지막에 발생하는 이벤트만 처리한다
 * 마지막에 한 번에 묶어서 처리해도 상관 없을 때 사용(ex.검색 자동 완성 기능)
*/

/** Throttle
 * 연속적으로 발생하는동안 일정 텀을 가지고서 처리를 한다.
 * 중간 중간 끊기지 않는 인터렉션이 필요할 때 사용(ex.마우스 이동, 스크롤 이벤트)
*/