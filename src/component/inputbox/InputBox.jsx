import React from 'react'
import "./InputBox.css"

const InputBox = ({label,placeholder,onChange}) => {
  return (
    <div className='input'>
      <div className='input-label'>{label}</div>
      <input
        className='input-box'
        onChange={onChange}
        placeholder={ placeholder}
      />
    </div>
  )
}

export default InputBox