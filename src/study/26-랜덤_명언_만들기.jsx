import { useEffect, useState } from 'react';
import './App.css';

function App() {

  

  return (
    <>
      <Advice />
    </>
  )
}

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
  }, [url]);

  return [isLoading, data]
}

const Advice = () => {
  const [isLoading, data] = useFetch("https://korean-advice-open-api.vercel.app/api/advice");

  return (
    <>
      {
        !isLoading && (
          <>
            <div>
              <div>{data.message}</div>
              <div>{data.author}</div>
            </div>
          </>
        )
      }
    </>
  )
}

export default App