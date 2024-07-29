import './App.css';
import { Link, Route, Routes, useParams } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Link to="/main">메인</Link>
        <Link to="/mypage"> 마이페이지</Link>
        <Link to="/test"> 테스트</Link>
      </div>
      <Routes>
        <Route path="/main/:name" element={ <Main /> } /> {/* path의 main에다가 특정 주소를 덧붙이기*/}
        <Route path="/mypage" element={ <div>마이 페이지</div> } />
        <Route path="/test" element={ <div>테스트 페이지</div> } />
      </Routes>
    </>
  )
}

function Main() {
  const params = useParams();
  // useParams는 Route 컴포넌트에서 path를 통해 받아오고 싶은 값이 있을 때 그 값에 이름을 붙인 다음에 받아올 수 있게 도와주는 기능이다.
  console.log(params.name); // http://localhost:5175/main/hello - hello 출력
  // http://localhost:5175/main/안녕하세요 - 안녕하세요 출력
  return <div>메인 페이지</div>
}

export default App

/* useParams()
* 주소의 쿼리 파라미터 값을 담은 객체 생성
* 사용예시)
const params = useParams()
params.param1 - param1 이라는 이름으로 들어온 값
params.name - name 이라는 이름으로 들어온 값
* params에서 내가 원하는 key값을 사용해서 특정 값을 조회
*/