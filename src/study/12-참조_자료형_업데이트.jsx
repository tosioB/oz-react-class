import { useState } from 'react';
import './App.css'

function App() {
  let [array, setArray] = useState([1,2,3]);
  console.log('rerendering')

  const handler = () => {
    const newArray = array.slice(); // 참조 자료 복사
    // const newArray = [...array]; // 참조 자료 복사
    newArray.push(5);
    setArray(newArray);
  }
  
  return(
    <>
      array : [{array.join(',')}]
      <br />
      <button onClick={handler}>상태 업데이트!</button>
    </>
  )
}

export default App

// 참조 자료형을 사용하는 상황에서 상태 업데이트 
// 참조 자료형을 사용할 때에는 원래상태를 복사한 다음 다뤄야 한다.

// 참조 자료형은 형태가 똑같아도 주소값이 다르기 때문에 서로를 비교하면 false가 나온다.
// ex)
// [1,2,3] === [1,2,3] // false
// {a: '1234'} === {a: '1234'} // false

/* 
* 리액트는 기본적으로 상태를 변경할 때 원래 상태와 똑같다면 상태를 변경시키지 않아서
* 불필요한 리렌더링을 막아준다.
* 참조 자료형은 이러한 특성을 제대로 이해하고 있지 않으면 의도와는 다르게
* 똑같이 생긴 참조 자료형을 전달해도 상태가 바뀌면서 리렌더링이 발생할 수 있기 때문에
* 주의가 필요하다.
*/

/*
* **기존 상태를 재사용하면서 주소 값을 바꾸려면?
* 1. 기존 상태를 복사해서 사용한다.
* - 기존의 데이터를 복사: Spread Syntax
* - 배열 복사: Array.slice()
* - 객체 복사: Object.assign()
* 2. 새로운 배열을 리턴하는 고차 함수 메서드를 사용한다.
* - Array.map()
* - Array.filter()
*/