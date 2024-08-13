import { useCallback, useEffect, useMemo, useState, memo } from "react"

function App() {
  const [number, setNumber] = useState(0);
  const [rerender, setRerender] = useState(false);

  const plus1 = useCallback((number) => {
    console.log('plus1 실행 됨');
    return number + 1;
  }, [rerender]);

  const numberPlus1 = useMemo(() => {
    return plus1(number)
  }, [number]);

  useEffect(() => {
    console.log('plus1 생성됨')
  }, [plus1]);

  return (
    <>
      <NumberDisplay number={number} />
      <div>numberPlus1: {numberPlus1}</div>
      <div>
        <button type="button" className="btn" onClick={() => {setNumber(number + 1)}}>number+1</button>
        <button type="button" className="btn" onClick={() => {setRerender(!rerender)}}>Rerender</button>
      </div>
    </>
  )
}

const NumberDisplay = memo(({number}) => {
  console.log('Display 렌더링');
  return <div>number: {number}</div>
})

export default App

// React 최적화 함수

/** 대표적인 최적화 함수
 * useMemo() - 함수 호출 결과를 저장
 * useCallback() - 함수를 저장
 * memo() - 컴포넌트를 저장
 */

/** 모든 최적화 함수는 함수형 컴포넌트가 "함수"라서 생겨났다.
 * 함수형 컴포넌트는 만들어진 함수를 호출해서 호출된 화면을 화면에 그리는 식으로 작동한다.
 * 함수형 컴포넌트에서 상태변경이 일어나면 이전에 호출했던 함수는 더이상 사용하지 않게되고
 * 변경된 상태로 함수를 새롭게 호출한다.
 * 그래서 상태가 변경되면 상태가 변경되기 이전에 사용했던 기존의 함수는 사라지고
 * 새로운 함수 호출로 완전히 대체되는식으로 리렌더링이 발생한다.
 * 함수를 새롭게 호출한다는 것은
 * 함수 내부의 변수들, 함수들이 모두 새로 선언되고 할당된다는 것
 * 즉 재사용 할 수 있는 것도 새로 만들어 쓴다는 의미(비효율)
 * 
 * 이런 현상을 해결하기 위해서는 재사용 할 수 있는 것은 새로 만들어 쓰지말고 저장했다가 재사용 하기
 */

/** useMemo() - 함수 호출 결과를 저장
const 저장할_호출결과 = useMemo(() => {
  return 함수 코드  
}, [값]);
 */

/** useCallback() - 함수를 저장
const 저장할_호출결과 = useCallback(() => {
  return 함수 코드  
}, [값]);
 * 
 * 컴포넌트가 호출 되었을 때 배열에 들어있는 값이 변하지 않았으면 함수를 다시 만들지 않는다.
 */

/** memo() - 컴포넌트를 저장
const 저장할_컴포넌트 = memo((props) => {
  함수 컴포넌트 코드  
});
 *
 * 컴포넌트를 호출해야 할 때 전달받은 Props 값이 변하지 않았으면 함수를 호출하지 않는다.
 */