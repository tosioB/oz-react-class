/* ----- package.json ----- */
// {
//   "name": "npm_practice", - 패키지 이름
//   "version": "1.0.0", - 패키지 버전
//   "main": "npm.js", - 가장 메인이 되는 파일
//   "type": "module", - Common js -> ES6 방식으로 변경
//   "scripts": { - 터미널로 실행시킬 스크립트를 작성
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node npm.js" - 터미널 - npm run start - node npm.js가 실행됨
//   },
//   "keywords": ["npm", "javascript", "node"], - 연관 검색어
//   "author": "OZ Coding <Oz@OZ.com", - 패키지 작성자(이메일과 이름을 작성)
//   "license": "ISC", - 이 패키지의 저작권을 어떻게 할 것인지?
//   // license - ISC - 가져다 쓰는 것 자유
//   // license - MIT - 가져다 쓰는는 상관없지만 출처는 표시
//   "description": "npm 공부하기", - 이 패키지를 설명해주는 글을 작성
//   "dependencies": { - 내가 설치한 패키지js
//       "dayjs": "^1.11.12" - dayjs 패키지 설치(터미널 - npm i dayjs)
//   }
// }