import { useContext, useState } from "react";
import { createContext } from "react";

const conterContext = createContext(); // const 전역저장소_이름 = createContext();

export function CounterProvider({children}) {
  const [counter, setCounter] = useState(0);
  
  return (
    // value에는 전역에서 사용할 상태를 넣는다.
    // <전역저장소_이름.Provider value={전역에서 사용할 상태값}>
    <conterContext.Provider value={[counter, setCounter]}>
      {children}
    </conterContext.Provider>
  )
}

export function useCounter() { // 어디서든 꺼내 쓸 수 있도록 함수로 한번 감싸서 사용한다.
  return useContext(conterContext)
}
