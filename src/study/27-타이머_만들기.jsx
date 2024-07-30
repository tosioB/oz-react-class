import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <Timer />
    </>
  )
}

const Timer = () => { // 타이머 컴포넌트 정의
  const [startTime, setStartTime] = useState(0); // 시작 시간 상태 변수
  const [isOn, setIsOn] = useState(false); // 타이머 동작 여부 상태 변수
  const [time, setTime] = useState(0); // 남은 시간 상태 변수
  const timerRef = useRef(null); // 타이머의 레퍼런스를 저장하는 useRef

  useEffect(() => { // useEffect를 사용하여 상태 변화 감지 및 처리
    if (isOn && time > 0) { // 타이머가 동작 중이고 남은 시간이 0보다 큰 경우
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1); // 1초씩 감소하여 남은 시간 업데이트
      }, 1000);
      timerRef.current = timerId; // 타이머 ID를 useRef를 통해 저장
    } else if (!isOn || time === 0) { // 타이머가 동작 중이 아니거나 남은 시간이 0인 경우
      clearInterval(timerRef.current); // 타이머 정지
    }
    return () => clearInterval(timerRef.current); // 컴포넌트 언마운트 시 clearInterval로 정리
  }, [isOn, time]); // isOn과 time이 변경될 때 useEffect 재실행

  return (
    <div>
      <div>
        {time ? FormatTime(time) : FormatTime(startTime)} {/* 남은 시간 또는 시작 시간 표시 */}
        <button type='button' className='btn' onClick={() => {
          setIsOn(true); // 타이머 시작
          setTime(time ? time : startTime); // 남은 시간 초기화 (기존 값 또는 시작 시간으로)
          setStartTime(0); // 시작 시간 초기화
        }}>시작</button>
        <button type='button' className='btn' onClick={() => {setIsOn(false)}}>멈춤</button> {/* 타이머 멈춤 */}
        <button type='button' className='btn' onClick={() => {
          setTime(0); // 시간 초기화
          setIsOn(false); // 타이머 멈춤
        }}>리셋</button> {/* 타이머 리셋 */}
      </div>
      <input
        type='range'
        value={startTime}
        min="0" // 최소 시작 시간 0초
        max="3600" // 최대 시작 시간 3600초 (1시간)
        step="30" // 30초 단위로 변경 가능
        onChange={(event) => {
          setStartTime(event.target.value); // 시작 시간 변경
        }}
      />
    </div>
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