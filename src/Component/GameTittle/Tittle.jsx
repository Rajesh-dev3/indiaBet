import React from 'react'
import './style.scss';
const Tittle = ({name , bgcolor, textcolor}) => {
  return (
    <div className='title-bar' style={{background:bgcolor , color:textcolor}}>
      {name} </div>
  )
}

export default Tittle