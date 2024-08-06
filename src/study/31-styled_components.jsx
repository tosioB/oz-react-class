import { useState } from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

function App() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(1);

  return (
    <>
      <GlobalStyle />
      <div>
        <BlueButton>파랑색 버튼</BlueButton>
        <BigBlueButton>커다란 파란색 버튼</BigBlueButton>
        <BigTextBigBlueButton>글자도 커다란 파란색 버튼</BigTextBigBlueButton>
        <PropsButton backgroundColor="yellow" textColor="red" padding="20px 10px">Props 버튼</PropsButton>
        <ul>
          <li>
            <input type='range' value={input1} onChange={(e) => setInput1(e.target.value)} min={0} max={255} />
            <span>{input1}</span>
          </li>
          <li>
            <input type='range' value={input2} onChange={(e) => setInput2(e.target.value)} min={0} max={255} />
            <span>{input2}</span>
          </li>
          <li>
            <input type='range' value={input3} onChange={(e) => setInput3(e.target.value)} min={0} max={255} />
            <span>{input3}</span>
          </li>
          <li>
            <input type='range' value={input4} onChange={(e) => setInput4(e.target.value)} min={0} max={1} step={0.01} />
            <span>{input4}</span>
          </li>
        </ul>
        <BackgroundColorDiv input1={input1} input2={input2} input3={input3} input4={input4} />
      </div>
    </>
  );
}

export default App;







// styled components
// - React에서 사용되는 대표적인 CSS-in-JS 라이브러리

// CSS-in-JS - JavaScript안에서 CSS를 작성하는 방식

// 설치 - npm install styled-components
// 불러오기 - import styled from "styled-components"

// styled components는 SCSS의 문법을 지원한다.
// SCSS의 변수나 mixin기능은 지원하지 않는다.
// 중첩 문법은 사용 가능하다.

/* styled components의 장점
1. CSS도 컴포넌트화 할 수 있음
2. CSS와 JS의 상호작용이 쉬움
3. Class 이름을 자동으로 지어줌
*/

/* styled components의 단점
1. Class이름이 안이쁘다
2. JavaScript의 크기가 커진다
*/

// ------------------------------------------------------------------------- //

/* styled component 사용법 - 1. 컴포넌트 만들기

const 컴포넌트이름 = styled.태그`
  CSS속성1: 속성값;
  CSS속성2: 속성값;
`;

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;
*/

const BlueButton = styled.button`
  height: 32px;
  padding: 0 10px;
  background-color: blue;
  border: none;
  border-radius: 4px;
  color: white;
`;

// ------------------------------------------------------------------------- //

/* styled component 사용법 - 2. 컴포넌트 재사용하기

const 컴포넌트이름 = styled(재사용할 컴포넌트)`
  CSS속성1: 속성값;
  CSS속성2: 속성값;
`;

const BigBlueButton = styled(BlueButton)`
  height: 48px;
`;
*/

const BigBlueButton = styled(BlueButton)`
  height: 48px;
  padding: 0 20px;
`;

const BigTextBigBlueButton = styled(BigBlueButton)`
  font-size: 30px;
`;

// ------------------------------------------------------------------------- //

/* styled component 사용법 - 3. Props 사용하기

const 컴포넌트이름 = styled.태그`
  CSS속성: ${ props => 함수코드 }
`;

const StyledButton = styled.Button`
  background: ${props => props.color}
`;
*/

const PropsButton = styled.button`
  background-color: ${props => props.backgroundColor || 'white'};
  color: ${props => props.textColor || 'black'};
  padding: ${props => props.padding || '0'};
`;

const BackgroundColorDiv = styled.div`
  width: 300px;
  height: 100px;
  background-color: rgb(
    ${props => props.input1},
    ${props => props.input2},
    ${props => props.input3},
    ${props => props.input4}
  );
`

// ------------------------------------------------------------------------- //

/* styled component 사용법 - 4. 전역 스타일 설정하기
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  전역 CSS속성1: 속성값;
  전역 CSS속성2: 속성값;
`;

<GlobalStyle /> - 최상위 컴포넌트에 가져다 쓰기
*/

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

