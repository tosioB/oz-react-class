import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  
  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button type="btn" className='btn' onClick={() => {
        setShowCounter((prev) => {return !prev});
      }}>show?</button>
    </>
  )
}

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  // 정리
  // 1. 컴포넌트가 최초로 렌더링 될 때에만 조작을 하고싶다!
  useEffect(() => {
    console.log('맨 처음 렌더링 될 때');
  }, []);

  // 2. 컴포넌트가 리렌더링 될 때 조작하고 싶다!
  useEffect(() => {
    console.log('리렌더링');
  })

  // 3. 특정 상태값이 변할 때만 조작하고 싶다!
  useEffect(() => {
    console.log('counter의 값이 변할 때')
  }, [counter]);

  useEffect(() => {
    console.log('counter2의 값이 변할 때')
  }, [counter2]);

  // 4. 컴포넌트가 최종적으로 언마운트 될 때 조작하고 싶다!
  useEffect(() => {
    return () => {
      console.log('컴포넌트 언마운트');
    }
  }, []);

  return (
    <>
      <div className='flex-center'>
        <div>conter : {counter}</div>
        <button type='button' className='btn' onClick={() => {
          setCounter(counter + 1)
        }}>+1</button>

        <div>conter2 : {counter2}</div>
        <button type='button' className='btn' onClick={() => {
          setCounter2(counter2 - 1)
        }}>-1</button>
      </div>
    </>
  )
}
export default App

// useEffect 작동
// 1. 컴포넌트가 처음 렌더링 되었을 때(클래스형 componentDidMount)
// 2. 리렌더링 되었을 때(클래스형 componentDidUpdate)
// 3. 컴포넌트가 화면에서 사라질 때(클래스형 componentWillUnmount)

/*
useEffect( () => {
  첫번째 인자 : 함수 // useEffect가 호출되면 실행될 코드
}, [두번째 인자: 배열]) // useEffect가 호출되는 조건을 정의해줄 배열
* 어떻게 작성하느냐에 따라서 호출되는 방식이 다르다.
*/

/* 배열을 인자로 주지 않으면?
useEffect( () => {
  첫번째 인자 : 함수
})
* 컴포넌트가 처음 렌더링 되었을 때 실행
* 리렌더링 되었을 때 실행
*/

/* 빈 배열을 인자로 주면?
useEffect( () => {
  첫번째 인자 : 함수
}, [])
* 컴포넌트가 처음 렌더링 되었을 때 실행
*/

/* 배열에 값을 담아서 인자로 주면?
useEffect( () => {
  첫번째 인자 : 함수
}, [상태1, 상태2])
* 컴포넌트가 처음 렌더링 되었을 때 실행
* 배열에 담긴 값이 변경되어서 리렌더링 되었을 때 실행
*/

/* 함수를 리턴하면?
useEffect( () => {
  첫번째 인자 : 함수
  return () => {리턴되는 함수}
})
* 컴포넌트가 처음 렌더링 되었을 때 실행
* 리렌더링 되었을 때 실행
* 컴포넌트가 화면에서 사라질 때 실행
*/