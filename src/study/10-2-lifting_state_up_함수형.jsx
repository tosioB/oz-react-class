import { useState } from 'react';

function FuncApp() {
  let [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0)

  return (
    <>
      <Count counter={counter} />
      <PlusButton setCounter={setCounter} /> {/* setCounter props */}
      <MinusButton setCounter={setCounter} /> {/* setCounter props */}
      <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounter={setCounter} /> {/* inputValue, setInputValue, setCounter props */}
    </>
  )
}

function CounterInput({inputValue, setInputValue, setCounter}) {
  return (
    <>
      <input
        type='number'
        value={inputValue} // 부모에서 가져온 inputValue
        onChange={(event) => {
          setInputValue(event.target.value) // 부모에서 가져온 setInputValue
        }}
      />
      <button onClick={() => {setCounter(inputValue)}}>입력</button> {/* 부모에서 가져온 setCounter, inputValue */}
    </>
  )
}

function PlusButton({ setCounter }) {
  return (
    <button
      type='button'
      onClick={() => {
        setCounter((prev) => { return prev + 1 }) // 부모에서 가져온 setCounter
      }}
    >
      +
    </button>
  )
}

function MinusButton({ setCounter }) {
  return (
    <button
      type='button'
      onClick={() => {
        setCounter((prev) => { return prev - 1 }) // 부모에서 가져온 setCounter
      }}
    >
      -
    </button>
  )
}

function Count({counter}){
  return <div>counter : {counter}</div>
}

export default FuncApp

// lifting state up(상태 끌어올리기)
// 부모 컴포넌트에서 상태를 변경하는 함수를 만들고 이 함수를 props로 전달
// 자식 컴포넌트에서 실행시킴으로써
// 자식 컴포넌트가 부모 컴포넌트에 상태를 변경시키기