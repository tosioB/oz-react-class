import './App.css'

function App() {
  return (
    <>
      <빵 />
      <패티 />
      <양상추 />
      <토마토 />
      <치즈 />
      <빵 />
    </>
  )
}

function 빵() {
  return(
    <div className='빵'>
      밀가루
      <span> 물</span>
      <span> 계란</span>
      <span> 이스트</span>
    </div>
  )
}
function 패티() {
  return(
    <div className='패티'>
      소고기
      <span> 후추</span>
      <span> 소금</span>
    </div>
  )
}
function 양상추() {
  return(
    <div className='양상추'>
      양상추
      <span> 줄기</span>
    </div>
  )
}
function 토마토() {
  return(
    <div className='토마토'>
      껍질
      <span> 과육</span>
      <span> 씨앗</span>
    </div>
  )
}
function 치즈() {
  return(
    <div className='치즈'>
      우유
      <span> 소금</span>
      <span> 색소</span>
    </div>
  )
}

export default App
