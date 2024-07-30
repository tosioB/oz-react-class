import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isLoading, data] = useFetch("http://localhost:3000/todo"); // 데이터 fetch를 위한 커스텀 훅 사용
  const [todo, setTodo] = useState([]); // 할 일 목록을 관리하는 상태 변수
  const [currentTodo, setCurrentTodo] = useState(null); // 현재 선택된 할 일의 ID를 관리하는 상태 변수
  const [time, setTime] = useState(0); // 타이머 및 스톱워치 시간을 관리하는 상태 변수
  const [isTimer, setIsTimer] = useState(false); // 현재 타이머 모드인지 스톱워치 모드인지 관리하는 상태 변수

  // 타이머가 동작 중인 경우, 선택된 할 일의 시간을 1초씩 증가시키는 효과
  useEffect(() => {
    if (currentTodo) {
      fetch(`http://localhost:3000/todo/${currentTodo}`, {
        method: "PATCH",
        body: JSON.stringify({ time: todo.find((e) => e.id === currentTodo).time + 1 })
      })
        .then((res) => res.json())
        .then((res) => setTodo((prev) => prev.map((el) => (el.id === currentTodo ? res : el))));
    }
  }, [time]); // time 상태가 변경될 때마다 실행

  // 타이머 및 스톱워치 모드 전환 시 시간 초기화
  useEffect(() => {
    setTime(0);
  }, [isTimer]); // isTimer 상태가 변경될 때마다 실행

  // 데이터 로딩이 완료되면 todo 상태 업데이트
  useEffect(() => {
    if (data) {
      setTodo(data);
    }
  }, [isLoading]); // isLoading 상태가 변경될 때마다 실행

  return (
    <>
      <div>
        {/* 명언 api */}
        <Advice />

        {/* 타이머 및 스톱워치 모드 전환 버튼 */}
        <button
          type='button'
          className='btn'
          onClick={() => {
            setIsTimer((prev) => {
              return !prev;
            })
          }}
        >
          {isTimer ? '스톱워치로 변경' : '타이머로 변경'}
        </button>
        {/* 타이머 또는 스톱워치 컴포넌트 렌더링 */}
        {
          isTimer ?
            <Timer time={time} setTime={setTime} /> :
            <StopWatch time={time} setTime={setTime} />
        }

        {/* 현재 시간 표시 */}
        <Clock />
      </div>
      <div className='todo-box'>
        <h1>TODO LIST</h1>

        {/* 할 일 작성 컴포넌트 */}
        <WriteBox setTodo={setTodo} />

        {/* 할 일 목록 컴포넌트 */}
        <TodoList todo={todo} setTodo={setTodo} setCurrentTodo={setCurrentTodo} currentTodo={currentTodo} />
      </div>
    </>
  )
}

// 할 일 작성 컴포넌트
const WriteBox = ({ setTodo }) => {
  const inputRef = useRef(null); // 입력 필드의 ref를 생성
  // 할 일 추가 함수
  const addTodo = () => {
    const newTodo = {
      content: inputRef.current.value, // 입력 필드의 값으로 content 설정
      time: 0, // 초기 시간 0으로 설정
    }
    // API를 통해 새로운 할 일 추가
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify(newTodo), // JSON 형식으로 변환하여 전송
    }).then(res => res.json()).then(res => setTodo((prev) => {
      return [...prev, res]; // 기존 할 일 목록에 새로운 할 일 추가
    }))
  }

  return (
    <div className='write-box'>
      <span className='inp-box'>
        <input
          type='text'
          ref={inputRef} // ref 설정
        />
      </span>
      <button
        type='button'
        className='btn'
        onClick={addTodo} // 할 일 추가 버튼 클릭 시 addTodo 함수 실행
      >
        추가
      </button>
    </div>
  )
}

// 할 일 목록 컴포넌트
const TodoList = ({ todo, setTodo, setCurrentTodo, currentTodo }) => {
  return (
    <ul className='todo-list'>
      {
        // 할 일 목록 렌더링
        todo.map((e) => {
          return <Todo key={e.id} todo={e} setTodo={setTodo} setCurrentTodo={setCurrentTodo} currentTodo={currentTodo} />
        })
      }
    </ul>
  )
}

// 각 할 일 아이템 컴포넌트
const Todo = ({ todo, setTodo, setCurrentTodo, currentTodo }) => {
  return (
    <li className={currentTodo === todo.id ? 'current' : ''}>
      <p>{todo.content}</p>
      <p>{FormatTime(todo.time)}</p>
      <div className='btn-box'>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setCurrentTodo(todo.id) // 할 일 시작하기 버튼 클릭 시 현재 할 일로 설정
          }}
        >
          시작하기
        </button>
        <button
          type='button'
          className='btn del'
          onClick={() => {
            // 할 일 삭제 API 호출
            fetch(`http://localhost:3000/todo/${todo.id}`, {
              method: "DELETE",
            }).then(res => {
              if (res.ok) {
                setTodo((el) => {
                  return el.filter((ele) => {
                    return ele.id !== todo.id;
                  });
                });
              }
            })

          }}
        >
          삭제
        </button>
      </div>
    </li>
  )
}

// 데이터 fetch 커스텀 훅
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 변수
  const [data, setData] = useState(null); // 데이터 상태 변수

  useEffect(() => {
    // API 호출하여 데이터 가져오기
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res); // 데이터 설정
        setIsLoading(false); // 로딩 완료
      })
  }, [url]); // url이 변경될 때마다 다시 호출

  return [isLoading, data] // 로딩 상태와 데이터 반환
}

// 랜덤 명언 컴포넌트
const Advice = () => {
  const [isLoading, data] = useFetch("https://korean-advice-open-api.vercel.app/api/advice"); // 랜덤 명언 가져오기

  return (
    <>
      {
        !isLoading && (
          <>
            <div>{data.message}</div> {/* 명언 메시지 */}
            <div>{data.author}</div> {/* 명언 작가 */}
          </>
        )
      }
    </>
  )
}

// 현재 시간 표시하는 시계 컴포넌트
const Clock = () => {
  const [time, setTime] = useState(new Date()); // 현재 시간 상태 변수

  useEffect(() => {
    setInterval(() => {
      setTime(new Date()); // 1초마다 현재 시간 업데이트
    }, 1000); // 1000밀리초(1초)마다 실행
  }, []); // 빈 배열을 넘겨 초기 한 번만 실행

  return (
    <div>{time.toLocaleTimeString()}</div> // 현재 시간 문자열로 변환하여 출력
  );
}

// 스톱워치 컴포넌트
const StopWatch = ({ time, setTime }) => {
  const [isOn, setIsOn] = useState(false); // 스톱워치 동작 상태 변수
  const timerRef = useRef(null); // 타이머 레퍼런스

  useEffect(() => {
    // 스톱워치 동작 중일 때
    if (isOn === true) {
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1); // 1초마다 시간 증가
      }, 1000); // 1000밀리초(1초)마다 실행
      timerRef.current = timerId; // 타이머 ID 저장
    } else { // 스톱워치 멈춤
      clearInterval(timerRef.current); // 타이머 정지
    }
    return () => clearInterval(timerRef.current); // 언마운트 시 타이머 정리
  }, [isOn]); // isOn 상태가 변경될 때마다 실행

  return (
    <>
      <div>
        <div>{FormatTime(time)}</div> {/* 시간 포맷 표시 */}
        <button
          type='button'
          className='btn'
          onClick={() => {
            setIsOn((prev) => !prev); // 스톱워치 동작 상태 토글
          }}
        >
          {isOn ? "끄기" : "켜기"} {/* 동작 중일 때 끄기, 멈춤 상태일 때 켜기 버튼 */}
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setTime(0); // 시간 초기화
            setIsOn(false); // 스톱워치 멈춤
          }}
        >
          리셋 {/* 스톱워치 리셋 버튼 */}
        </button>
      </div>
    </>
  );
}

// 타이머 컴포넌트
const Timer = ({ time, setTime }) => {
  const [startTime, setStartTime] = useState(0); // 시작 시간 상태 변수
  const [isOn, setIsOn] = useState(false); // 타이머 동작 상태 변수
  const timerRef = useRef(null); // 타이머 레퍼런스

  useEffect(() => {
    // 타이머 동작 중이고 남은 시간이 0보다 큰 경우
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1); // 1초마다 시간 감소
      }, 1000); // 1000밀리초(1초)마다 실행
      timerRef.current = timerId; // 타이머 ID 저장
    } else if (!isOn || time === 0) { // 타이머 멈춤 상태이거나 남은 시간이 0인 경우
      clearInterval(timerRef.current); // 타이머 정지
    }
    return () => clearInterval(timerRef.current); // 언마운트 시 타이머 정리
  }, [isOn, time]); // isOn과 time 상태가 변경될 때마다 실행

  return (
    <div>
      <div>
        {time ? FormatTime(time) : FormatTime(startTime)} {/* 남은 시간 또는 시작 시간 표시 */}
        <button type='button' className='btn' onClick={() => {
          setIsOn(true); // 타이머 시작
          setTime(time ? time : startTime); // 남은 시간 초기화
          setStartTime(0); // 시작 시간 초기화
        }}>시작</button>
        <button type='button' className='btn' onClick={() => { setIsOn(false) }}>멈춤</button> {/* 타이머 멈춤 */}
        <button type='button' className='btn' onClick={() => {
          setTime(0); // 시간 초기화
          setIsOn(false); // 타이머 멈춤
        }}>리셋</button> {/* 타이머 리셋 */}
      </div>
      <input
        type='range'
        value={startTime}
        min="0" // 최소 시작 시간 0초
        max="3600" // 최대 시작 시간 3600초 (1시간)
        step="30" // 30초 단위로 변경 가능
        onChange={(event) => {
          setStartTime(event.target.value); // 시작 시간 변경
        }}
      />
    </div>
  );
}

// 시간 포맷 함수
const FormatTime = (seconds) => {
  const hour = String(Math.floor(seconds / 3600)).padStart(2, '0'); // 시간 계산
  const minute = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); // 분 계산
  const second = String(seconds % 60).padStart(2, '0'); // 초 계산
  const timeString = `${hour}:${minute}:${second}` // 시간 문자열 포맷
  return timeString // 포맷된 시간 반환
}

export default App;
