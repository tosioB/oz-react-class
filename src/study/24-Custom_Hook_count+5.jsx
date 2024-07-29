import { useState } from 'react';
import './App.css';

function App() {
  const {count, increment, decrement} = useCounter(0 , 5)

  return (
    <>
      <div>
        <div>{count}</div>
        <button type='button' className='btn' onClick={increment}>+</button>
        <button type='button' className='btn' onClick={decrement}>-</button>
      </div>
    </>
  )
}

const useCounter = (initialValue = 0, step = 1) => { // 초기값 설정
  const [count, secCounter] = useState(initialValue);

  const increment = () => { secCounter((prev) => {return prev + step}) }
  const decrement = () => { secCounter((prev) => {return prev - step}) }

  return {count, increment, decrement}
}

export default App

/* Hook
* React 함수형 컴포넌트에서 쓸 수 있는 함수
* use로 시작하는 이름을 가짐(useState, useEffect, useRef......)
*/

/* Custom Hook
* 사용자가 직접 정의해서 사용하는 Hook
* use로 시작하는 이름을 지어주면 된다.
* 장점 - 중복 코드가 줄어든다.
* 장점 - 재사용성이 늘어난다.
* 장점 - 코드 가독성이 높아진다.
* 장점 - 유지 보수성이 높아진다.
*/