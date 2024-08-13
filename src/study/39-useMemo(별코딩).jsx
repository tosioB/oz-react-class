import { useEffect, useMemo, useState } from "react"

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  
  // const location = {
  //   country: isKorea ? '한국' : '외국'
  // }

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea])
  
  /**
  * 눈으로 보기에 똑같이 생겼어도 이전의 오브젝트와는 다른 오브젝트이다.
  * location이라는 변수는 새로 생성된 오브젝트의 주소를 참조하게 된다.
  * useEffect의 관점에서는 location이라는 변수 안에 들어있는 주소가 바뀌었기 때문에
  * 똑같이 생긴 오브젝트라도 location은 변경이 된 것으로 인식한다.
  */

  useEffect(() => {
    console.log('useEffect!!!')
  }, [location]);

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", gap: "60px"}}>
        <div>
          <h2>하루에 몇끼 먹어요?</h2>
          <span className="inp-box">
            <input
              type="number"
              value={number}
              onChange={(e) => {setNumber(e.target.value)}}
            />
          </span>
        </div>
        <div>
          <h2>어느 나라에 있어요?</h2>
          <p>나라: {location.country}</p>
          <button
            type="button"
            className="btn"
            onClick={() => {setIsKorea(!isKorea)}}
          >
            비행기 타자
          </button>
        </div>
      </div>
    </>
  )
}

export default App