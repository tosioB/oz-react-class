import { useState } from 'react';

function FuncApp() {
  let [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  const incrementCounter = () => { // 부모에서 만든 함수
    setCounter(counter + 1);
  }

  const decrementCounter = () => { // 부모에서 만든 함수
    setCounter(counter - 1);
  }

  const setCounterNumber = () => {
    setCounter(inputValue);
  }

  return (
    <>
      <Count counter={counter} />
      <PlusButton incrementCounter={incrementCounter} /> {/* 함수 props */}
      <MinusButton decrementCounter={decrementCounter} /> {/* 함수 props */}
      <CounterInput inputValue={inputValue} setInputValue={setInputValue} setCounterNumber={setCounterNumber} />
    </>
  )
}

function CounterInput({inputValue, setInputValue, setCounterNumber}) {
  return (
    <>
      <input
        type='number'
        value={inputValue} // 부모에서 가져온 inputValue
        onChange={(event) => {
          setInputValue(event.target.value) // 부모에서 가져온 setInputValue
        }}
      />
      <button onClick={setCounterNumber}>입력</button> {/* 부모에서 가져온 함수 사용하기 */}
    </>
  )
}

function PlusButton({ incrementCounter }) {
  return (
    <button type='button' onClick={incrementCounter}>+</button> // 부모에서 가져온 함수 사용하기
  )
}

function MinusButton({ decrementCounter }) {
  return (
    <button type='button' onClick={decrementCounter}>-</button> // 부모에서 가져온 함수 사용하기
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