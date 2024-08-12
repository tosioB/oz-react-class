import { useDispatch, useSelector } from "react-redux";
import { legacy_createStore } from "redux";

const increment = { // Action
  type: 'increment'
}

const decrement = { // Action
  type: 'decrement'
}

const counterReducer = (state = 0, action) => { // Reducer
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state
  }
}

export const store = legacy_createStore(counterReducer); // Store

/**
 * Provider를 사용해서 Store를 연결 할 수 있다.
 * Provider에 자식 컴포넌트가 되어야 연결해준 Store를 사용할 수 있다.
 * App 컴포넌트를 Provider에 자식 컴포넌트로 만들어야 하기 때문에
 * Store를 export 해준다.
 * 그리고 App 컴포넌트가 렌더링 되고있는 위치인 main.jsx에 가서 App 컴포넌트를 Provider로 감싸준다.

  import { Provider } from "react-redux";
  <Provider store={store}>
    <App />
  </Provider>
*/

function App() {
  const counter = useSelector(state => state) // useSelector - 상태값을 꺼내와서 사용
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {counter}</div>
      <button type="button" className="btn" onClick={() => {dispatch(increment)}}>+</button>
      <button type="button" className="btn" onClick={() => {dispatch(decrement)}}>-</button>
    </>
  )
}

export default App

// Redux

// npm i redux react-redux

/** Redux의 데이터 흐름 - FLUX 패턴
 * UI > Action > Dispatch > Reducer > Store > UI
 * 
 * UI에서 상태변화가 필요한 이벤트가 발생하면
 * 상태를 어떻게 변화 시킬것인지 정보를 담은 Action이라는 객체가 만들어지고
 * Action객체는 Dispatch라는 함수를 통해서
 * Reducer라는 함수로 전달 하게 된다.
 * Reducer에서 Action객체를 해석하고 그 값에 따라서
 * Store에 들어있는 전역 상태를 변경시킨다.
 * 상태가 변경이 되면 UI가 변경된 상태에 맞춰 리렌더링 된다.
 * 
 * 이런 형태를 FLUX 패턴이라 부르게 된다.
*/

/** Action - 상태를 어떻게 변화시킬 것인지에 대한 내용이 담겨있는 객체
 * 
- 액션 객체
{
  type: 'INCREMENT'
  payload: 5
}

- 액션 생성자
const increment = (num) => ({
  type: 'INCREMENT'
  payload: num 
})
*/

/** dispatch - 액션 객체를 Reducer로 넘겨주는 역할을 하는 함수
 * 
- 액션 객체
dispatch({
  type: 'INCREMENT'
  payload: 5
)}

- 액션 생성자
dispatch(increment(5))
*/

/** Reducer - 리턴하는 값이 새로운 상태가 되는 함수
 * Reducer는 두개의 인자를 받는다.
 * 첫번째 인자는 상태값
 * dispatch로부터 전달받은 action객체

 * 타입에 들어있는 문자열이 무엇이냐에 따라서 상태를 변경시켜주는 로직이 바뀌기 때문에
 * switch 조건문을 사용해서 타입을 검사 후
const counterReducer = (state, action) => {
  switch( action.type ) {
    case 'INCREMENT'
      return state + action.payload
      ... ...
  }  
}

 * Reducer가 여러개라면?
 * combineReducers 함수로 묶어서 하나로 만들 수 있음

 * combineReducers라는 함수를 호출하면서 인자로는 객체를 전달한다.
 * 이 객체안에 묶어주고 싶은 Reducer들을 순서대로 전달하면 된다.
const rootReducer = combineReducers({
  counterReducer, anyReducer, ...
})
*/

/** Store - Redux의 전역 상태 저장소
 * createStore 함수에 Reducer를 전달해서 생성
const store = createStore(rootReducer)
*/

/** 구성 요소를 다 만들었다면?
 * React-Redux에서 제공하는 기능을 사용해서
 * App과 전역 상태 저장소 연결하기 -> <Provider store={store}>
 * 상태 저장소에서 상태 꺼내서 사용하기 -> useSelector()
 * dispatch 함수 만들어서 사용하기 -> useDispatch()
 */

/** Redux-Thunk - Redux에서 비동기 처리를 할 수 있게 해주는 미들웨어
 * 액션으로 객체 말고도 함수를 사용할 수 있게 해줌으로써 비동기 처리를 할 수 있게 도와준다
 */