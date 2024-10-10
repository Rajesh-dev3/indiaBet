import React from 'react'
import './style.scss'
const FancyHead = ({max,min}) => {
  return (
   
    <div className="fancy-container">
    <div className="fancy-row max-min" >Min :{min} Max :{max}</div>
   
    <div className="fancy-row" style={{background:"#faa9ba"}}>No</div>
    <div className="fancy-row" style={{background:"#72bbef"}}>Yes</div>
    <div className="fancy-row"></div>
    <div className="fancy-row"></div>
    </div>
  )
}

export default FancyHead