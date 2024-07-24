import { useState } from 'react';

function FuncApp() {
  let [counter, setCounter] = useState(0)
  return (
    <>
    {/*
      <Count
        propsName1={propsName1}
        propsName2={propsName2}
        propsName3={propsName3}
      />
    */}
      <Count
        counter={counter}
        hello={"hello"} 
        array={[1,2,3, '안녕하세요']}
      />
      <button type='button' onClick={() => {
        setCounter(counter + 1);
      }}>
        +
      </button>

      <button type='button' onClick={() => {
        setCounter(counter - 1);
      }}>
        -
      </button>
    </>
  )
}

function Count({array, counter, hello}){
  console.log('array', array);
  console.log('counter', counter);
  console.log('hello', hello);
  return (
    <>
      <div>array : {array}</div>
      <div>counter : {counter}</div>
      <div>hello : {hello}</div>
    </>
  )
}
// funtion funcName({propsName1, propsName2, propsName3}) {
  // return (
    // <>
    //   <div>propsName1 : {propsName1}</div>
    //   <div>propsName2 : {propsName2}</div>
    //   <div>propsName3 : {propsName3}</div>
    // </>
  // )
// }

export default FuncApp

// Props - 부모 컴포넌트에게 전달받은 데이터(변경 불가능)
// - 부모가 가지고 있는 state를 자식으로 전송할 때 사용
// - 자식 -> 부모 전송불가능
// - 형제끼리 전송불가능
// - 저장한 state가 부모와 자식 둘다 사용해야 할 경우 state는 부모 컴포넌트에 작성한다.
// - 참고 : 컴포넌트가 많아지면 props 쓰는게 귀찮아짐