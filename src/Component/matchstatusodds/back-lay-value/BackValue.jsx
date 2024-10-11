import React from 'react'

const BackValue = ({top ,data, bottom, bg,fun,isBack,selectionId}) => {
  return (
    <div  style={{background:bg}} color='black' onClick={()=>fun(data,top,isBack,selectionId)}><p>{top}</p><p>{bottom}</p></div>
  )
}

export default BackValue