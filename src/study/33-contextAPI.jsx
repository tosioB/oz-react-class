import { useCounter } from './context/33-counterContext/'

function App() {
  const [counter, setCounter] = useCounter(); // 구조분해할당 사용해서 useCounter받아오기
  return (
    <>
      <div>counter: {counter}</div>
      <button type='button' className='btn' onClick={() => {setCounter(counter + 1)}}>+1</button>
      <button type='button' className='btn' onClick={() => {setCounter(counter - 1)}}>-1</button>
    </>
  )
}

export default App

// -------------------Context API------------------- //
/** Context API 사용법
 * 1. createContext로 전역 상태 만들기
 * 2. Provider로 전역 상태 연결하기
 * 3. useContext로 전역 상태 가져오기
 */

/**
 * createContext를 사용해서 전역 상태를 담을 공간을 만든다.
 * context API를 사용할 때에는 context API를 담아 둘 별도의 폴더를 생성하는 것을 권장한다.
 * context API로 만든 상태를 특정위치에 가져다 쓰고 싶으면
 * 가져다 쓰고싶은 위치가 만든 context API로 만든 컴포넌트의 자식 컴포넌트가 되어야한다.
 * React Router를 사용할 때 <App />을 <BrowserRouter />로 감싼것 처럼 같은 맥락이라고 보면 된다.
 */

/** 예시)
*****context폴더 > counterContext.jsx
import { useContext, useState } from "react";
import { createContext } from "react";

const conterContext = createContext();

export function CounterProvider({children}) {
  const [counter, setCounter] = useState(0)
  return (
    <conterContext.Provider value={[counter, setCounter]}>
      {children}
    </conterContext.Provider>
  )
}

export function useCounter() { // 어디서든 꺼내 쓸 수 있도록 함수로 한번 감싸서 사용한다.
  return useContext(conterContext)
}


*****main.jsx
import { CounterProvider } from './context/counterContext.jsx'

<CounterProvider>
  <App /> // App어느 곳에서는 만들어둔 CounterProvider를 사용이 가능하다.
</CounterProvider>
*/