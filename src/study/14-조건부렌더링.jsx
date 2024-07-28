import { useState } from 'react';
import './App.css';
import './assets/study_css/14-조건부렌더링.css';

function App() {
  const [mood, setMood] = useState('Normal')

  return (
    <>
      <Face mood={mood} />
      <Face2 mood={mood} />
      <Face3 mood={mood} />
      <div className={
        mood === "Happy" ? "happy" :
        mood === "Normal" ? "normal" :
        "sad"
      }>기분: {mood}</div>
      <div>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setMood("Happy")
          }}
        >
          Happy
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setMood("Normal")
          }}
        >
          Normal
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setMood("Sad")
          }}
        >
          Sad
        </button>
      </div>
    </>
  )
}

// 1. if문으로 리턴하는 JSX문 바꿔주기
function Face({ mood }){
  if (mood === "Happy") {
    return <div>😁</div>
  } else if (mood === "Normal") {
    return <div>😐</div>
  } else {
    return <div>😭</div>
  }
}

// 2. 삼항연산자 사용하기
function Face2({ mood }) {
  return (
    <>
      {mood === "Happy" ? (
        <div>😁</div>
      ) : mood === "Normal" ? (
        <div>😐</div>
      ) : (
        <div>😭</div>
      )}
    </>
  )
}

// 3. 논리연산자 사용하기
// true일 때에는 뭔가를 표시 하지만 false일때는 아무것도 표시하지 않는다.
function Face3({ mood }) {
  return (
    <>
      {mood === "Happy" && <div>😁</div>}
      {mood === "Normal" && <div>😐</div>}
      {mood === "Sad" && <div>😭</div>}
    </>
  )
}

export default App

// 조건부 렌더링 - 특정 조건에 따라 다른 컴포넌트나 요소를 렌더링하는 것(조건문과 논리 연산자를 활용)
