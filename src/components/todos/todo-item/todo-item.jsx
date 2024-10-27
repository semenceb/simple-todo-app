import './todo-item.css'
import React from 'react'
import Checkbox from '../../checkbox/checkbox'
import DeleteIcon from '../../icons/delete-icon/delete-icon'

export default function TodoItem({ text, onDelete, checked, onChangeChecked }) {
  return (
    <div className={'todo-item'}>
      <div className={'text-control-block'}>
        <Checkbox value={checked} onChange={onChangeChecked} />
        <span className={checked ? 'text-todo crossed-text' : 'text-todo'}>
          {text}
        </span>
      </div>
      <button onClick={onDelete} className={'delete-button'}>
        <DeleteIcon color={'white'} />
      </button>
    </div>
  )
}
