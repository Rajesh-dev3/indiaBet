import React from 'react'

const BackValue = ({top , bottom, bg}) => {
  return (
    <div  style={{background:bg}} color='black'><p>{top}</p><p>{bottom}</p></div>
  )
}

export default BackValue