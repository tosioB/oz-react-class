// import { useState } from 'react';
// import './App.css'

// function App() {
//   let [number, setNumber] = useState(1);

//   const handler = () => {
//     setNumber(number + 1);
//   }
  
//   return(
//     <>
//       number : {number}
//       <br />
//       <button onClick={handler}>상태 업데이트!</button>
//     </>
//   )
// }

// export default App

// 원시 자료형을 사용하는 상황에서 상태 업데이트
// 원시 자료형은 서로의 값 자체가 다르면 false가 나온다
// ex)
// '안녕하세요' === '반갑습니다' // false
// 1234 === 4321 // false