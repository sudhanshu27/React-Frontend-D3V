import React from 'react'
import "./SubHeading.css"

const SubHeading = ({ label}) => {
  return (
    <div className='sub-heading'>{ label}</div>
  )
}

export default SubHeading