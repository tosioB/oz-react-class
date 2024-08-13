import { useState, useMemo } from "react"

const hardCalculate = (number) => {
  console.log('어려운 계산');
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('쉬운 계산');
  return number + 1;
}

function App() {
  const [hartNumber, setHartNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hartNumber);
  const hardSum = useMemo(() => { // useMemo를 사용해 hartNumber의 값이 변할 때 함수 실행
    return hardCalculate(hartNumber);
  }, [hartNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "60px"}}>
      <div>
        <h3>어려운 계산기</h3>
        <span className="inp-box">
          <input
            type="number"
            value={hartNumber}
            onChange={(e) => {setHartNumber(Number(e.target.value))}}
          />
        </span>
        <span> + 10000 = {hardSum}</span>
      </div>

      <div>
        <h3>쉬운 계산기</h3>
        <span className="inp-box">
          <input
            type="number"
            value={easyNumber}
            onChange={(e) => {setEasyNumber(Number(e.target.value))}}
          />
        </span>
        <span> + 1 = {easySum}</span>
      </div>
    </div>
  )
}

export default App