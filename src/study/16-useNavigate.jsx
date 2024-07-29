import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button type='button' className='btn' onClick={() => {navigate('/main')}}>메인</button>
        <button type='button' className='btn' onClick={() => {navigate('/mypage')}}>마이페이지</button>
        <button type='button' className='btn' onClick={() => {navigate('/test')}}>테스트</button>
      </div>

      <div>
        <button type='button' className='btn' onClick={() => {navigate(-1)}}>{`<- 뒤로가기`}</button>
        <button type='button' className='btn' onClick={() => {navigate(-2)}}>{`<- 2번 뒤로가기`}</button>
        <button type='button' className='btn' onClick={() => {navigate(1)}}>{`앞으로가기 ->`}</button>
      </div>

      <Routes>
        <Route path="/main" element={ <div>메인 페이지</div> } />
        <Route path="/mypage" element={ <div>마이 페이지</div> } />
        <Route path="/test" element={ <div>테스트 페이지</div> } />
      </Routes>
    </>
  )
}

export default App

// React Router 주요 함수 - useNavigate()

/* useNavigate()
* 특정 주소로 이동할 수 있게 해주는 함수를 생성
* 사용예시)
const navigate = useNavigate()
navigate(/main) - /main으로 이동
navigate(1) - 앞으로 가기
navigate(-1) - 뒤로가기
* navigate에 어떤 인자를 전달해주느냐에 따라서 이동하는 위치가 달라진다.
* 특정 주소로 이동을 하거나 앞 또는 뒤로 가는등의 동작을 가능하게 한다.
*/