import './App.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
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

// Router - React에서 SPA 방식으로 라우팅 할 수 있게 해주는 라이브러리
// Routing - 요청 주소에 맞는 화면을 보여주는 것

// Router설치 - npm i react-router-dom

// React Router 주요 컴포넌트 - <BrowserRouter>, <Link>, <Routes>, <Route>

/* <BrowserRouter>
* React Router를 사용하고 싶은 곳을 감싸주는 컴포넌트
* BrowserRouter의 자식 컴포넌트로 속해있어야 React Router의 기능을 사용할 수 있다.
* main.jsx에 있는 <App> 컴포넌트를 감싸버리면 어디서든 사용 가능하다.
* main.jsx 에서 import { BrowserRouter } from 'react-router-dom' 필요
*/

/* <Link>
* <Link> 컴포넌트와 to 속성을 사용해서 이동하고 싶은 주소로 이동할 수 있다.
* <Link> 컴포넌트는 <a> 요소로 표시되지만 새로고침은 발생하지 않고 주소만 변경된다.
* 사용할 페이지에 import { Link } from "react-router-dom"; 작성 필수
* 사용예시)
<nav>
  <Link to='/main'>메인</Link> - http://localhost:5174/main
  <Link to='/mypage'>마이페이지</Link> - http://localhost:5174/mypage
  <Link to='/test'>테스트</Link> - http://localhost:5174/test
</nav>
*/

/* <Routes>
* <Route> 컴포넌트들을 묶어주는 역할
* import { Routes } from "react-router-dom"; 작성 필수
*/

/* <Route>
* 특정 주소에서 어떤 컴포넌트를 보여줄지 정해주는 역할
* path속성에 작성된 주소에 접근하면 element속성에 작성된 컴포넌트를 화면에 보여준다.
import { Route } from "react-router-dom"; 작성 필수
* 사용예시)
<Routes>
  <Route path='/main' element={ <Main /> } /> - http://localhost:5174/main
  <Route path='/mypage' element={ <Mypage /> } /> - http://localhost:5174/mypage
  <Route path='/test' element={ <Test /> } /> - http://localhost:5174/test
</Routes>
*/

/*
* 간단정리)
<BrowserRouter> - React Router를 사용하기 위한 환경 설정
<Link> - 원하는 주소로 이동
<Routes> - 주소에 맞는 컴포넌트를 화면에 표시
<Route> - 주소에 맞는 컴포넌트를 화면에 표시
*/