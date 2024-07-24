import { Component } from 'react'

class ClassApp extends Component {
  state = {counter: 0}
  render() {
    return (
      <>
        <div>counter: {this.state.counter}</div>
        <button type='button' onClick={() => {
          this.setState({ counter: this.state.counter + 1 })
        }}>
          +
        </button>

        <button type='button' onClick={() => {
          this.setState({ counter: this.state.counter - 1 })
        }}>
          -
        </button>
      </>
    ) 
  }
}

export default ClassApp

// State - 상태
// 특정 React 컴포넌트 안에서 사용하는 데이터(변경가능)

// State 사용법 - Class 컴포넌트
// Class 컴포넌트에서는 속성을 정의하듯이 state를 만들고 setState라는 함수를 사용해서 만들어놓은 상태인 값을 변경
// 이때 setState함수는 컴포넌트를 만들때 상속받은 리액트의 컴포넌트 클래스에서 받아온 메서드

// class MyComponent extends Component {
//   state = {상태이름: 상태값}
  
//   componentMethod = () => {
//     this.setState({상태이름: 새로운_상태값})
//   }
  
//   render(){
//     return( 표시할_요소, 컴포넌트)
//   }
// }