import React from 'react'
import './style.scss';
const Tittle = ({name , bgcolor, textcolor,gamename}) => {
  return (
    <div className='title-bar' style={{background:bgcolor , color:textcolor}}>
      {name} <span>{gamename}</span> </div>
  )
}

export default Tittle