import './App.css';
import { Link, Route, Routes, useSearchParams } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/main">메인</Link>
        <Link to="/mypage"> 마이페이지</Link>
        <Link to="/test"> 테스트</Link>
      </div>
      <Routes>
        <Route path="/main" element={ <Main /> } />
        <Route path="/mypage" element={ <div>마이 페이지</div> } />
        <Route path="/test" element={ <div>테스트 페이지</div> } />
      </Routes>
    </>
  )
}

function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 주소창에 http://localhost:5175/main?name=daesik&school=ozcoding 입력
  console.log(searchParams.get('name')); // daesik
  console.log(searchParams.get('school')); // ozcoding
  return <div>메인 페이지</div>
}

export default App

/* useSearchParams()
* 주소의 쿼리 스트링 값을 가져올 수 있는 객체와 쿼리 스트링을 수정할 수 있는 함수 생성
* 사용예시)
const [searchParams, setSearchParams] = useSearchParams()
searchParams.get('name') - name으로 들어온 쿼리 스트링
setSearchParams({ name: '대식' }) - name쿼리 스트링 수정
*/