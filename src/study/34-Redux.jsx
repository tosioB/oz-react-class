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
 * 이런 형태를 FLUX 패턴이라 부르게 된다.
*/

// ------------------------------------------------------------------------------- //

/** Action - 상태를 어떻게 변화시킬 것인지에 대한 내용이 담겨있는 객체
 * 
 * 액션 객체는 상태를 업데이트하기 위해 사용되는 정보의 집합이다. 
 * 이 객체는 액션의 유형과 필요한 추가 데이터를 포함한다.
 * 
 * - 액션 객체 예시
 * {
 *   type: 'INCREMENT'  // 상태를 증가시키는 액션의 유형을 나타낸다.
 *   payload: 5          // 액션에 포함된 추가 데이터로, 상태를 얼마나 증가시킬지를 나타낸다.
 * }
 * 
 * 액션 생성자는 액션 객체를 생성하기 위한 함수이다. 
 * 이 함수는 액션 객체를 반환하며, 액션 객체의 `type`과 `payload`를 설정한다.
 * 
 * - 액션 생성자 예시
 * const increment = (num) => ({
 *   type: 'INCREMENT'  // 상태를 증가시키는 액션의 유형을 나타낸다.
 *   payload: num       // 상태를 증가시키는 값, 액션 객체의 추가 데이터이다.
 * })
 */

// ------------------------------------------------------------------------------- //

/** dispatch - 액션 객체를 Reducer로 넘겨주는 역할을 하는 함수
 * 
 * 액션 객체를 리듀서로 전달하여 상태를 업데이트한다. 
 * `dispatch` 함수는 리듀서에 액션 객체를 전달하여, 상태를 변경하도록 지시한다.
 * 
 * - 액션 객체를 직접 전달하여 `dispatch` 사용 예시:
 * dispatch({
 *   type: 'INCREMENT'  // 상태를 증가시키는 액션의 유형을 나타낸다.
 *   payload: 5         // 상태를 얼마나 증가시킬지를 나타내는 데이터이다.
 * })
 * 
 * - 액션 생성자를 사용하여 `dispatch` 사용 예시:
 * dispatch(increment(5))  // `increment(5)`는 액션 객체를 생성하고, 이를 `dispatch`를 통해 리듀서로 전달한다.
 */

// ------------------------------------------------------------------------------- //

/** Reducer - 리턴하는 값이 새로운 상태가 되는 함수
 * Reducer는 상태를 변경하기 위한 함수이다. 이 함수는 두 개의 인자를 받는다
 * 
 * 1. 현재 상태값 (`state`)
 * 2. `dispatch`로부터 전달받은 액션 객체 (`action`)
 * 
 * Reducer는 액션 객체의 `type`에 따라 상태를 어떻게 업데이트할지를 결정한다.
 * 일반적으로 `switch` 문을 사용하여 액션의 `type`에 따라 상태를 변경하는 로직을 작성한다.
 * 
 * - Reducer 함수 예시:
 * const counterReducer = (state, action) => {
 *   switch (action.type) {
 *     case 'INCREMENT':   // 액션의 타입이 'INCREMENT'일 때
 *       return state + action.payload;  // 현재 상태에 액션의 payload 값을 더한 새로운 상태를 반환한다.
 *       // 다른 케이스들...
 *     default:
 *       return state;   // 기본적으로 상태를 변경하지 않고 현재 상태를 반환한다.
 *   }
 * }
 */

/** 
 * Reducer가 여러 개 있을 경우, `combineReducers` 함수를 사용하여 하나의 루트 리듀서로 결합할 수 있다.
 * 
 * - combineReducers 함수 사용 예시:
 * `combineReducers` 함수는 여러 개의 리듀서를 객체 형태로 인자로 받아서 하나의 리듀서로 결합한다.
 * 각 리듀서는 객체의 키와 연결되며, 상태의 각 부분을 관리한다.
 * 
 * const rootReducer = combineReducers({
 *   counterReducer,  // 카운터 상태를 관리하는 리듀서
 *   anyReducer,      // 다른 상태를 관리하는 리듀서
 *   // 추가적인 리듀서들...
 * });
 * 
 * 결합된 `rootReducer`는 전체 애플리케이션의 상태를 관리하는 단일 리듀서 역할을 한다.
 */

// ------------------------------------------------------------------------------- //

/** Store - Redux의 전역 상태 저장소
 * Redux에서 `Store`는 애플리케이션의 전역 상태를 저장하고 관리하는 객체이다.
 * `Store`는 애플리케이션의 상태를 보관하고, 상태를 업데이트하기 위해 액션을 디스패치하며,
 * 상태 변경을 구독할 수 있는 메서드를 제공한다.
 * 
 * `Store`를 생성하기 위해서는 `createStore` 함수를 사용하고, 이 함수에 리듀서를 전달해야 한다.
 * `createStore`는 애플리케이션의 상태를 관리하는 스토어를 생성한다.
 * 
 * - `createStore` 함수 사용 예시:
 * const store = createStore(rootReducer);
 * 
 * 여기서 `rootReducer`는 애플리케이션의 상태를 관리하는 리듀서이다.
 * `rootReducer`는 여러 개의 리듀서를 결합하여 전체 애플리케이션의 상태를 관리한다.
 * 
 * `store`는 이제 상태를 조회하고, 액션을 디스패치하며, 상태 변경을 구독할 수 있는 메서드를 제공한다.
 */

/** 구성 요소를 다 만들었다면?
 * React-Redux에서 제공하는 기능을 사용해서
 * App과 전역 상태 저장소 연결하기 -> <Provider store={store}>
 * 상태 저장소에서 상태 꺼내서 사용하기 -> useSelector()
 * dispatch 함수 만들어서 사용하기 -> useDispatch()
 */

/** Redux-Thunk - Redux에서 비동기 처리를 할 수 있게 해주는 미들웨어
 * redux-thunk설치 - npm i redux-thunk
 * 액션으로 객체 말고도 함수를 사용할 수 있게 해줌으로써 비동기 처리를 할 수 있게 도와준다
 */