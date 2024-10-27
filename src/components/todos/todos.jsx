import TodoItem from './todo-item/todo-item'
import React from 'react'
import './todos.css'

export default function Todos({ todos, setTodos }) {
  const deleteElement = (id) => {
    setTodos(todos.filter((element) => element.id !== id))
  }

  return (
    <div className={'todos'}>
      {todos.map((element) => (
        <TodoItem
          key={element.id}
          text={element.text}
          checked={element.checked}
          onChangeChecked={(checked) =>
            setTodos(
              todos.map((todo) =>
                element.id === todo.id ? { ...todo, checked } : todo
              )
            )
          }
          onDelete={() => deleteElement(element.id)}
        />
      ))}
    </div>
  )
}
