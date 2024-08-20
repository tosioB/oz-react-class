import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  // </React.StrictMode>,

    
  


  // 33번 Context API 강의 화면을 위한 태그
  // import { CounterProvider } from './context/33-counterContext.jsx'
  // <CounterProvider>
  //   <App />
  // </CounterProvider>

  // 34, 35, 36번 Redux 강의 화면을 위한 태그(다른곳에서는 오류가 발생하기때문에 따로 나누기)
  // ***** 코드를 여기서 실행하면 작동이 안됨 위의 코드에 붙여넣어서 실행
  // import App, {store} from './App.jsx'
  // import { Provider } from "react-redux";
  // <Provider store={store}>
  //   <App />
  // </Provider>

  // 04-카페_키오스크_만들기 화면을 위한 태그(Context API)
  // import { MenuProvider } from './create_screen_context/04-카페_키오스크_만들기/menuContext.jsx'
  // import { CartProvider } from './create_screen_context/04-카페_키오스크_만들기/cartContext.jsx'

  // 05-카페_키오스크_만들기_Redux 화면을 위한 태그(다른곳에서는 오류가 발생하기때문에 따로 나누기)
  // ***** 코드를 여기서 실행하면 작동이 안됨 위의 코드에 붙여넣어서 실행
  // import { Provider } from 'react-redux'
  // import { store } from './redux/05-카페_키오스크_만들기_Redux/redux.js'
  // <Provider store={store}>
  //   <App />
  // </Provider>

  // 06-카페_키오스크_만들기_Redux_Toolkit 화면을 위한 태그(다른곳에서는 오류가 발생하기때문에 따로 나누기)
  // ***** 코드를 여기서 실행하면 작동이 안됨 위의 코드에 붙여넣어서 실행
  // import { Provider } from 'react-redux'
  // import { store } from './redux/06-카페_키오스크_만들기_Redux_Toolkit/redux.js'
  // <Provider store={store}>
  //   <App />
  // </Provider>
)
