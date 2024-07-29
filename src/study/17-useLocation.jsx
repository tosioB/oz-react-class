import './App.css';
import { Link, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location)
  console.log(location.pathname)
  console.log(location.search)

  return (
    <>
      <div>
        <Link to="/main">메인</Link>
        <Link to="/mypage"> 마이페이지</Link>
        <Link to="/test"> 테스트</Link>
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

/* useLocation()
* 현재 페이지의 위치 정보를 담고있는 객체를 생성
* 사용예시)
const location = useLocation()
location.pathname - 현재 경로명
location.search - 쿼리 문자열
* location에서 내가 확인하고 싶은 위치정보를 pathname search와 같은 key값을 사용해서 확인한다.
*/