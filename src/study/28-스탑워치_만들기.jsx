import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <StopWatch />
    </>
  )
}

const StopWatch = () => { // 스톱 워치 컴포넌트 정의
  const [time, setTime] = useState(0); // 경과 시간을 저장하는 상태 변수
  const [isOn, setIsOn] = useState(false); // 스톱 워치 동작 여부 상태 변수
  const timerRef = useRef(null); // 타이머의 레퍼런스를 저장하는 useRef

  useEffect(() => { // useEffect를 사용하여 상태 변화 감지 및 처리
    if (isOn === true) { // 스톱 워치가 동작 중인 경우
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1); // 1초마다 경과 시간을 1초씩 증가
      }, 1000); // 1000밀리초(1초)마다 실행
      timerRef.current = timerId; // 타이머 ID를 useRef를 통해 저장
    } else { // 스톱 워치가 멈춘 경우
      clearInterval(timerRef.current); // 타이머 정지
    }
    return () => clearInterval(timerRef.current); // 컴포넌트 언마운트 시 clearInterval로 정리
  }, [isOn]); // isOn 상태가 변경될 때 useEffect 재실행

  return (
    <>
      <div>
        <div>{FormatTime(time)}</div> {/* 경과 시간을 포맷하여 표시 */}
        <button
          type='button'
          className='btn'
          onClick={() => {
            setIsOn((prev) => !prev); // 스톱 워치 상태 토글
          }}
        >
          {isOn ? "끄기" : "켜기"} {/* 동작 중일 때는 "끄기", 멈춘 상태일 때는 "켜기" 버튼 표시 */}
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setTime(0); // 시간 초기화
            setIsOn(false); // 스톱 워치 멈춤
          }}
        >
          리셋 {/* 스톱 워치 리셋 버튼 */}
        </button>
      </div>
    </>
  );
}

const FormatTime = (seconds) => { // 시간 표시를 위한 함수
  /* 시간구하기
  * 1시간 : 3600초
  * 1분: 60초
  *
  * 12345 / 3600(절대값) -> 시간
  * (12345 % 3600) / 60(절대값) -> 분
  * 12345 % 60 -> 초
  */
  const hour = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minute = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const second = String(seconds % 60).padStart(2, '0');
  /* padStart
  * padStart(2, '0') - length가 2인 String을 만들고 싶은데 만약 빈자리가 있다면(길이가 2가 안된다면) 앞쪽에 0을 넣겠다.
  */
  const timeString = `${hour}:${minute}:${second}`
  return timeString
}

export default App