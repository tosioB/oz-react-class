import { Component } from 'react'

class ClassApp extends Component {
  state = {counter: 0}

  incrementCounter = () => { // 부모에서 만든 함수
    this.setState({counter: this.state.counter + 1});
  }

  decrementCounter = () => { // 부모에서 만든 함수
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <>
        <Count counter={this.state.counter} />
        <PlusButton incrementCounter={this.incrementCounter} /> {/* 함수 props */}
        <MinusButton decrementCounter={this.decrementCounter} /> {/* 함수 props */}
      </>
    ) 
  }
}

class PlusButton extends Component {
  render () {
    return (
      <button type='button' onClick={this.props.incrementCounter}>+</button> // 부모에서 가져온 함수 사용하기
    )
  }
}

class MinusButton extends Component {
  render () {
    return (
      <button type='button' onClick={this.props.decrementCounter}>-</button> // 부모에서 가져온 함수 사용하기
    )
  }
}

class Count extends Component {
  // this
  render() {
    return <div>counter: {this.props.counter}</div>
  }
}

export default ClassApp

// lifting state up(상태 끌어올리기)
// 부모 컴포넌트에서 상태를 변경하는 함수를 만들고 이 함수를 props로 전달
// 자식 컴포넌트에서 실행시킴으로써
// 자식 컴포넌트가 부모 컴포넌트에 상태를 변경시키기