import React from 'react'
import { useSelector } from 'react-redux';

const BackValue = ({top, bottom, bg,fun,isBack,data,setSelectionId,item}) => {
  const stack = useSelector((state)=>state?.betData?.betData)
  return (
    <div  style={{background:bg}} color='black' onClick={()=>{
      fun(stack?.stack, top,isBack, data,item);
      // setSelectionId(item)
    }}><p>{top}</p><p>{bottom}</p></div>
  )
}

export default BackValue