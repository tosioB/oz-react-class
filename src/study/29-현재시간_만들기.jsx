import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Clock />
    </>
  )
}

const Clock = () => { // 현재 시간을 표시하는 시계 컴포넌트
  const [time, setTime] = useState(new Date()); // 현재 시간을 저장하는 상태 변수

  useEffect(() => { // useEffect를 사용하여 시간 업데이트 처리
    setInterval(() => {
      setTime(new Date()); // 1초마다 현재 시간을 업데이트
    }, 1000); // 1000밀리초(1초)마다 실행
  }, []); // 빈 배열을 넘겨 초기 한 번만 실행

  return (
    <div>{time.toLocaleTimeString()}</div> // 현재 시간을 문자열로 변환하여 출력
  );
}

export default App