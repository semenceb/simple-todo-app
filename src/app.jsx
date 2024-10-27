import React, { useEffect, useState } from 'react'
import './app.css'
import AddTodoBar from './components/add-to-do-bar/add-todo-bar.jsx'
import { v4 as uuidv4 } from 'uuid'
import Todos from './components/todos/todos'
import Title from './components/title/title'
import NoTodosText from './components/no-todos-text/no-todos-text'

function getTodos() {
  const cachedTodos = localStorage.getItem('todos')
  if (cachedTodos === null) {
    return []
  }
  return JSON.parse(cachedTodos)
}

function App() {
  const [todos, setTodos] = useState(getTodos())

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <main className={'content'}>
      <Title />
      <AddTodoBar
        onClickAdd={(text) =>
          setTodos([...todos, { text, id: uuidv4(), checked: false }])
        }
      />
      {todos.length === 0 ? (
        <NoTodosText />
      ) : (
        <Todos todos={todos} setTodos={setTodos} />
      )}
    </main>
  )
}

export default App
