import React from 'react'
import "./styles.scss"
import { useDispatch } from 'react-redux'
import { closeModalRule } from '../../services/sruleModalSlice'
const Continue = ({setRulemodalOpen}) => {
  const dispatch = useDispatch()
  return (
    <div> <div className='rule-con-c'>
    <div className="rule-heading">
    Indiabet Important Notice
        </div> 
      
        <div className="rule-content">

        Welcome
     
        </div>
        <div className="accept-btn">

<button onClick={()=>{
  setRulemodalOpen()
  dispatch(closeModalRule())}}
>Close</button>
    </div>
        </div></div>
  )
}

export default Continue