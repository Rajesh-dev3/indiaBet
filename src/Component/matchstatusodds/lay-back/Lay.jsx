import React from 'react'
import './style.scss'
const Lay = ({name , backgroundColor}) => {
  return (
    <div className='laybox' style={{background:backgroundColor}}>{name}</div>
  )
}

export default Lay