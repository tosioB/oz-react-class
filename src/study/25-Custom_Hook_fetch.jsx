import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const { loading: loading1, data: data1 } = useFetch("http://localhost:3000/data");
  const { loading: loading2, data: data2 } = useFetch("http://localhost:3001/data");
  const { loading: loading3, data: data3 } = useFetch("http://localhost:3002/data");

  return (
    <>
      <div>
        {
          !loading1 && (
            <ul>
              {
                data1.map((e) => {
                  return (
                    <li key={'data1' + e.id}>{e.content}</li>
                  )
                })
              }
            </ul>
          )
        }
        {
          !loading2 && (
            <ul>
              {
                data2.map((e) => {
                  return (
                    <li key={'data1' + e.id}>{e.content}</li>
                  )
                })
              }
            </ul>
          )
        }
        {
          !loading3 && (
            <ul>
              {
                data3.map((e) => {
                  return (
                    <li key={'data1' + e.id}>{e.content}</li>
                  )
                })
              }
            </ul>
          )
        }
      </div>
    </>
  )
}

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => { // 결과가 나올 때
        setData(res)
        setLoading(false)
      })
      .catch(err => { // 에러가 발생했을 때
        setError(err)
        setLoading(false)
      })
  }, [url]);

  return { loading, data, error }
}

export default App

/* Hook
* React 함수형 컴포넌트에서 쓸 수 있는 함수
* use로 시작하는 이름을 가짐(useState, useEffect, useRef......)
*/

/* Custom Hook
* 사용자가 직접 정의해서 사용하는 Hook
* use로 시작하는 이름을 지어주면 된다.
* 장점 - 중복 코드가 줄어든다.
* 장점 - 재사용성이 늘어난다.
* 장점 - 코드 가독성이 높아진다.
* 장점 - 유지 보수성이 높아진다.
*/