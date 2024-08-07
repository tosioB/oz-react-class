
function App() {
  return (
    <>
      <div className="text-5xl text-blue-[rgb(207, 80, 80)]">안녕하세요</div>
    </>
  );
}

export default App;

// tailwindcss
// 가장 대표적인 Utility-furst CSS 프레임워크
// 이미 작성된 CSS 코드를 클래스명으로 가져다 쓸 수 있다

// 설치 - npm install tailwindcss postcss autoprefixer
// 설정 파일 만들기 - npx tailwindcss init -p

// tailwind.config.js파일에서
// 어떤 파일에서 사용할건지 설정 파일에서 설정해주기
// content: [
//   "./index.html",
//   "./src/**/*.{json,ts,jsx,tsx}"
// ]
// index.html과 src에 있는 json,ts,jsx,tsx파일에 tailwind.css를 적용하겠다.


/* index.css에서 Tailwind CSS에서 만든 CSS 코드 불러오기!
@tailwind base;
@tailwind components;
@tailwind utilities;
*/

// 설치가 완료 되었다면 Tailwind CSS 문서를 보면서 필요한 Class 이름 가져다 사용하기

/* tailwindcss의 장점
1. CSS 코드를 직접 작성하지 않아도 됨
2. 개발 속도가 빨라짐
3. 체계적이고 일관된 디자인 사용 가능
*/

/* tailwindcss의 단점
1. 초기 설정이 복잡함
2. 코드가 안 이뻐짐
3. CSS 크기가 커질 수 있음
*/