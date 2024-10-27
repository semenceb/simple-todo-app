import React from 'react'
import './checkbox.css'

export default function Checkbox({ value, onChange }) {
  const onClick = () => {
    onChange(!value)
  }

  return (
    <button
      className={value ? 'button-checkbox active' : 'button-checkbox'}
      onClick={onClick}
    />
  )
}
