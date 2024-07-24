import { useState } from 'react';

function FuncApp() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <div>counter : {counter}</div>
      <button type='button' onClick={() => {
        setCounter(counter + 1);
      }}>
        +
      </button>
      {/* <button type='button' onClick={() => {
        setCounter((prev)=> prev + 1); 
      }}>
        +
      </button> */}

      <button type='button' onClick={() => {
        setCounter(counter - 1);
      }}>
        -
      </button>
      {/* <button type='button' onClick={() => {
        setCounter((prev) => prev - 1);
      }}>
        -
      </button> */}
    </>
  )
    
}

export default FuncApp

// State - 상태
// 특정 React 컴포넌트 안에서 사용하는 데이터(변경가능)

// State 사용법 - 함수형 컴포넌트
// useState라는 함수를 사용해서 상태와 상태변경 함수를 동시에 받아낼 수 있다.
// *주의! 상태 변경 함수를 사용하지 않으면 React는 상태 변경을 감지하지 못한다.
// (상태 변경을 감지하지 못하면 화면을 다시 렌더링 할 수가 없다.)

// function MyComponent(){
//   const [상태, 상태변경함수] = useState(상태값)

//   const componentMethod = () => {
//     상태변경함수(새로운_상태값)
//   }

//   return ( 표시할_요소, 컴포넌트)
// }