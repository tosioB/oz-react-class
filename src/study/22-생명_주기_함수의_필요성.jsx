import { useEffect, useState } from 'react';
import './App.css';

function App() { // 생명 주기 함수를 사용하는 대표적인 상황 - 1. 서버에서 데이터를 받아올 때
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(res => setDate(res))
  }, []);

  return (
    <>
      <div>데이터 목록</div>
      {
        data.map((e) => {
          return <div key={e.id}>{e.content}</div>
        })
      }
      <MouseFollower />
      <ScrollIndicator />
      <AlertTimer />
      <div style={{ height: "300vh" }}></div>
    </>
  )
}

const MouseFollower = () => { // 생명 주기 함수를 사용하는 대표적인 상황 - 2. 이벤트 핸들러를 사용할 때
  const [position, setPosition] = useState({x: 0, y: 0});

  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({x: event.clientX, y: event.clientY});
      console.log('mouseMoved!!')
    }
    window.addEventListener('mouseover', handleMouseMove);
    return () => {
      window.removeEventListener('mouseover', handleMouseMove);
    }
  });

  return (
    <div style={{
      position: "fixed",
      top: position.y,
      left: position.x,
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "blue",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none"
    }}></div>
  )
}

const ScrollIndicator = () => { // 생명 주기 함수를 사용하는 대표적인 상황 - 2. 이벤트 핸들러를 사용할 때
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
      document.documentElement.scrollHeight; // 전체 높이
      - document.documentElement.clientHeight; // 화면의 높이
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollWidth(scrollPercentage);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${scrollWidth}%`,
      height: "10px",
      backgroundColor: "red"
    }}></div>
  )
}

const AlertTimer = () => { // 생명 주기 함수를 사용하는 대표적인 상황 - 3. 타이머 함수를 사용할 때
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const setTimeOutId = setTimeout(() => {
      showAlert === true ? alert('시간초과') : null
    }, 3000);
    return () => {
      clearTimeout(setTimeOutId);
    }
  });

  return (
    <button onClick={() => {setShowAlert(false)}}>빨리 클릭!!</button>
  )
}

export default App

/* 생명 주기 함수를 사용하는 대표적인 상황
* 서버에서 데이터를 받아올 때
* 이벤트 핸들러를 사용할 때
* 타이머 함수를 사용할 때
*/

/* JSON SERVER 라이브러리 
* 주의 - 실제 앱에서 사용하지 않음!
* 직접 DB를 만들고 서버를 구축할 필요 없이 json 파일을 이용하여 REST API 서버를 구축해주는 라이브러리이다.
* 설치 - npm i -g json-server
* db.json 파일에서 변화가 있을 때는 json-server --watch 파일명.json <- 포트를 입력하지 않으면 자동으로 3000 포트 유지
* json-server --watch 파일명.json --port 3001 <- 3001포트로 열기
*/