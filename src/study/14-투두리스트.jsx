import { useState } from "react"
import './App.css';
import './assets/study_css/14-투두리스트.css';

function App() {
  const [todoList, setTodoList] = useState([
    // { id: 0, title: '공부하기' },
    // { id: 1, title: '청소하기' },
    // { id: 2, title: '운동하기' },
  ])

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="todo-list-container">
        <h1 className="main-title">Todo List</h1>
        <div className="todo-write">
          <span className="inp-box">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </span>
          <button
            type="button"
            className="btn"
            onClick={() => {
              if (inputValue === '') {
                alert('내용을 입력하세요.');
              } else {
                const newTodo = { id: Number(new Date()), title: inputValue } // 새로운 todo 생성 및 newTodo 선언
                const newTodoList = [...todoList, newTodo]; // 복사된 todoList에 새로 생성된 todo 넣고 newTodoList 선언
                setTodoList(newTodoList); // setTodoList에 newTodoList 넣기
                setInputValue(''); // setInputValue 빈문자열 만들기
              }
            }}
          >
            추가
          </button>
        </div>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  )
}

export default App

function TodoList({ todoList, setTodoList }) {
  return (
    <ul className="todo-list">
      {
        todoList.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
          )
        })
      }
    </ul>
  )
}

function Todo({ todo, setTodoList }) {
  const [editInputValue, setEditInputValue] = useState('');
  const [ediBtn, setEditBtn] = useState(true);
  const [editCheck, setEditCheck] = useState(false);

  return (
    <li>
      <p className="title">
        {todo.title}
        {
          editCheck &&
          <span className="inp-box edit">
            <input
              type="text"
              value={editInputValue}
              onChange={(event) => {
                setEditInputValue(event.target.value)
              }}
            />
          </span>
        }
      </p>
      
      <div className="btn-box">
        {
          ediBtn &&
          <button
            type="button"
            className="btn edit"
            onClick={() => {
              setEditBtn(false)
              setEditCheck(true)
            }}
          >
            수정
          </button>
        }
        {
          editCheck &&
          <button
            type="button"
            className="btn edit-check"
            onClick={() => {
              setEditBtn(true)
              setEditCheck(false)
              setTodoList((e) => {
                return e.map((el) => {
                  return el.id === todo.id ? { ...e, title: editInputValue } : el
                })
              })
            }}
          >
            확인
          </button>
        }
        <button
          type="button"
          className="btn del"
          onClick={() => {
            console.log(todoList)
            console.log(todo)
            setTodoList((e) => {
              return e.filter((el) => {
                return el.id !== todo.id
              })
            })
          }}
        >
          삭제
        </button>
      </div>
    </li>
  )
}

// 투두리스트 만들기
// Todo 추가하기
// Todo 화면에 표시하기
// Todo 삭제하기