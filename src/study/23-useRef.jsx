import { useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <ControlledInput />
      <br />
      <UseRefInput />
      <br />
      <Counter />
    </>
  )
}

export default App

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const numberRef = useRef(null);

  return (
    <>
      <div>counter: {counter}</div>
      <button type='button' className='btn' onClick={() => {setCounter((prev) => prev + 1)}}>+1</button>
      <button type='button' className='btn' onClick={() => {setCounter((prev) => prev - 1)}}>-1</button>
      <button type='button' className='btn' onClick={() => numberRef.current = counter}>Keep Value</button>
      <button type='button' className='btn' onClick={() => console.log(numberRef.current)}>Show Value</button>
    </>
  )
}

const UseRefInput = () => {
  const inputRef = useRef(null);

  const getInputValue = () => {
    console.log(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus(); // 특정 input에 focus가 가게 하고 싶을 때
  };

  return (
    <>
      <span className='inp-box'>
        <input ref={inputRef} />
      </span>
      <button type='button' className='btn' onClick={getInputValue}>input 값 가져오기</button>
      <br />
      <button type='button' className='btn' onClick={focusInput}>input focus</button>
    </>
  )
}

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');
  console.log('ControlledInput')

  return (
    <>
      <span className='inp-box'>
        <input value={inputValue} onChange={(event) => {
          setInputValue(event.target.value);
        }} />
      </span>
    </>
  )
}

/* useRef
* DOM 주소를 직접 가져올 때 사용한다.
* 리렌더링 되어도 초기화되지 않는 변수가 필요할 때 사용한다.

***** 너무 남발하면 안됨
* React는 기본적으로 가상 DOM을 통해 실제 DOM을 조작한다.
* 반면 useRef는 실제 DOM을 바로 조작한다.
* React 기본 작동 방식과는 다르므로 꼭 필요할 때만 사용해야 한다.
*/

/* useRef의 사용법
* const domRef(null) - DOM 주소를 담아줄 공간 만들기(처음에는 null을 넣어 빈 공간으로 만들기)
* <element ref={domRef} /> - DOM 주소를 담고 싶은 요소에 ref 속성으로 연결하기
* domRef.current === <element ref={domRef} /> - current 속성으로 요소에 접근 가능
* 컴포넌트가 리렌더링 된 이후에도 초기화되지 않는 변수로 사용할 수 있다.
*/

/* Controlled Component - React 상태와 입력 요소의 value가 직접 연동되어 있는 컴포넌트
* 입력 값을 실시간으로 검사하고 싶을 때 사용한다.
* 입력 값이 다른 컴포넌트에 바로 영향을 줄 때 사용한다.
* 최종 입력 값만 필요할 때는 사용하지 않는다.
* 성능을 향상시키고 싶을 때 사용하지 않는다.
*/