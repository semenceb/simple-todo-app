import React, { useState } from 'react'
import './add-todo-bar.css'

export default function AddTodoBar({ onClickAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedText = text.trim()
    if (trimmedText !== '') {
      onClickAdd(trimmedText)
      setText('')
    }
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={'form'}>
      <input
        onChange={handleChange}
        value={text}
        className={'input'}
        placeholder="Text"
      />
      <button type={'submit'} className={'button'}>
        Create
      </button>
    </form>
  )
}
