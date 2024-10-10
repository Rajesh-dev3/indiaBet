import React from 'react'

const BackValue = ({top , bottom, bgcolor}) => {
  return (
    <div className="back-value" style={{background:bgcolor}} color='black'><p>{top}</p><p>{bottom}</p></div>
  )
}

export default BackValue