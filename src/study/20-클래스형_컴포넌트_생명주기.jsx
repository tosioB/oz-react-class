import { Component, useState } from 'react';
import './App.css';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  
  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button type="btn" className='btn' onClick={() => {
        setShowCounter((prev) => {return !prev});
      }}>show?</button>
    </>
  )
}

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 1 }
    console.log('constructor')
  }

  componentDidMount () { // 컴포넌트가 마운트 됐을 때 실행
    console.log('DidMount');
  }

  componentDidUpdate() { // 컴포넌트가 업데이트 됐을 때 실행
    console.log('DidUpdate');
  }

  componentWillUnmount() { // 컴포넌트 없어지기 전에 실행
    console.log('WillUnmount');
  }

  render() {
    console.log('render')
    return (
      <>
        <div>conter : {this.state.counter}</div>
        <button type='button' className='btn' onClick={() => {
          this.setState({ counter: this.state.counter + 1 })
        }}>+1</button>
      </>
    )
  }
}
export default App