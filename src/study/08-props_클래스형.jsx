import { Component } from 'react'

class ClassApp extends Component {
  state = {counter: 0}
  render() {
    return (
      <>
        {/* <Count propsName={this.state.counter} /> */}
        <Count counter={this.state.counter} />
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

class Count extends Component {
  // super를 사용해 props 불러오기(강의 내용상 이 영역은 super가 필요 없는듯??)
  // constructor(props) {
  //   super(props);
  // }

  // this를 사용해 props 불러오기
  render() {
    console.log('props', this.props)
    return <div>counter: {this.props.counter}</div>
  }
}

export default ClassApp

// Props - 부모 컴포넌트에게 전달받은 데이터(변경 불가능)
// - 부모가 가지고 있는 state를 자식으로 전송할 때 사용
// - 자식 -> 부모 전송불가능
// - 형제끼리 전송불가능
// - 저장한 state가 부모와 자식 둘다 사용해야 할 경우 state는 부모 컴포넌트에 작성한다.
// - 참고 : 컴포넌트가 많아지면 props 쓰는게 귀찮아짐