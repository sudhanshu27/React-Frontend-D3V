import React from 'react'
import { Link } from "react-router-dom";
import "./Warning.css"

const Warning = ({ lable, linkText, to }) => {
  return (
    <div className='warning-box'>
      <div className='warning-text'>{lable}</div>
      <Link className="link-text" to={to}>
        {linkText}
      </Link>
    </div>
  );
};

export default Warning