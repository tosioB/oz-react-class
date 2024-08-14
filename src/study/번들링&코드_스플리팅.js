/** 번들링 - 여러 개의 파일(JS, HTML, CSS 등)을 하나의 파일로 합치는 것
 *  HTTP 요청의 수를 줄여 속도 향상
 * 코드를 압축해 파일 크기 축소
 * 사용되지 않는 코드 제거해 최적화
 * 
 * npm run build를 하면 dist폴더가 생성됨
 * dist - 이곳에 번들링이 진행된 코드들이 들어가있다.
*/ 

/** 코드 스플리팅 - 애플리케이션의 코드를 여러 개의 작은 부분으로 나누는 것(번들링의 반대개념)
 * 초기 로딩 속도를 개선
 * 불필요한 코드 로드 방지
 * 데이터 비용 절감 효과
*/

// React lazy & Suspense도 대표적인 코드 스플리팅 방법이다.
// lazy & Suspense - 컴포넌트 코드만 스플리팅 가능

// 컴포는트 이외의 코드를 스플리팅 할 수 있는 방법????? - vite>Rollup, CRA>Webpack
// vite.config.js - vite를 만들었을 때 생성되는 파일이다.

/** vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { // 여기서부터 새로 작성
    outDir: "docs",
    rollupOptions: {
      output: {
        menualChunks: (id) => {
          if (id.indexOf("node_modules") !== -1) {
            const module = id.split("node_modules/").pop().split("/")[0];
            return `vendor-${module}`
          }
        }
      }
    }
  }
})
 */