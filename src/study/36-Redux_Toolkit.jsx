import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state, action) {return state + 1},
    decrement(state, action) {return state - 1}
  }
});

const slowIncrementThunk = createAsyncThunk(
  'counter/slowIncrement',
  (value, {dispatch}) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment())
    }, 1000);
  }
)

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={() => {
        console.log(counterSlice);
        dispatch(slowIncrementThunk())
      }}>+</button>
      <button onClick={() => {
        console.log(counterSlice);
        dispatch(counterSlice.actions.decrement())
      }}>-</button>
    </>
  )
}

export default App

/** Redux Toolkit
 * Redux를 좀 더 쉽게 사용할 수 있도록 만들어진 라이브러리
 * 공식문서에서도 RTK를 사용할 것을 권장
 * 설치 - npm i @reduxjs/toolkit react-redux
*/ 

/** Redux Toolkit 사용방법
 * Redux에서는 Action과 Reducer를 각각 만들었지만
 * Redux Toolkit에서는 createSlice()라는 함수를 사용해서 Action과 Reducer를 동시에 만들 수 있다.
 * Store를 만들때에는 Redux에서는 createStore를 사용했지만
 * Redux Toolkit에서는 configureStore()함수를 사용해서 만든다.
 * 
 * Reducer를 전달받아서 Store를 만드는것은 동일하다.
 * 만들어진 Store를 App에다 연결하고 상태를 가져와서 컴포넌트에서 사용하고
 * 상태변경을 일으킬 dispatch함수를 만드는것은 React Redux의 기능을 Redux에서 사용하던 것처럼
 * 그대로 사용하면 된다.
 */

/** createSlice() - 액션 타입, 액션 생성자, 리듀서를 한 번에 만들어 줌
 * createSlice의 인자로는 객체를 전달
 * 객체 안에는 상태의 이름, 상태의 초기값, 상태의 Reducer를 객체로 전달
const counterSlice = createSlice({name: 'counter', initialState: 0, reducer: {
  increment(state, action) {state += 1},
  decrement(state, action) {state -= 1}
} -> 실행 결과에서 액션 타입, 액션 생성자, 리듀서 확인 가능

dispatch(counterSlice.actions.increment());
dispatch(counterSlice.actions.decrement());

// 객체 안에는 Reducer의 Switch 조건문을 사용해서 Action의 타입을 검사하고
// 기존 상태와 Action을 조합해서 상태를 변경했던 것처럼
// 비슷한 형태로 함수를 작성하면 된다.
})
 */

/** configureStore() - Reducer를 전달받아 전역 상태 저장소를 생성
const store = configureStore({
  reducer:{
    counter: counterSlice.reducer
  }
})

 * Reducer가 여러개일때 기존 Redux에서는 combineReducers함수를 사용해서 여러개의 Reducer를
 * 합쳐서 createStore에 전달했지만
 * configureStore()에서는 따로 합치는 작업 없이 객체 안에 전달하고 싶은 Reducer를
 * 필요한 만큼 전달하면 된다.
const store = configureStore({ // Reducer가 여러개일때...
  reducer:{
    counter: counterSlice.reducer,
    any: aniSlice.reducer,
    ... ...    
  }
})
 */

/** Redux Toolkit에서 Thunk 사용하기
 * createAsyncThunk() - RTK에서 제공하는 Thunk 생성 함수
 * Redux-Thunk처럼 비동기 처리 가능
 * Redux Toolkit에 내장되어있어 따로 설치할 필요가 없다.
 */