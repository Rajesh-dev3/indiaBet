import React from 'react'
import './style.scss'
import Lay from '../../lay-back/Lay'
const FancyHead = ({max,min}) => {
  return (
   <>
    {/* <div className="fancy-container">
    <div className="fancy-row max-min" >Min :{min} Max :{max}</div>
   
    <div className="fancy-row" style={{background:"#faa9ba"}}>No</div>
    <div className="fancy-row" style={{background:"#72bbef"}}>Yes</div>
    <div className="fancy-row"></div>
    <div className="fancy-row"></div>
    </div> */}


    <div className="fancy-container">
    <div className="fancy-row-odds bat" style={{background:"black"}}>
      <p className='fancy-game-name' style={{color:"white"}}>Min :{min} Max :{max}</p>
      <p className='fancy-game-price' style={{display:"none"}}>0.00</p>

    </div>
    <div className="fancy-rowright" style={{borderTop:"1px solid black"}}>

    <div className="fancy-col1 col2">

    <div className="fancy-row-odds " style={{padding:'0', borderRight:'.5px solid black'}}>
 
    <Lay name='No'  backgroundColor="#f77791"/>
      </div>
     
    <div className="fancy-row-odds" style={{padding:'0'}}><Lay name='Yes'  backgroundColor="#3199e7"/></div>
                       {/* <div className="overback">suspended
                       </div> */}
    </div>
    <div className="fancy-col1  ">

    <div className="fancy-row-odds"></div>
    <div className="fancy-row-odds"></div>
    </div>
    </div>
    </div> 
   </>
  )
}

export default FancyHead