import React from 'react'
import './style.scss'
import Lay from '../../lay-back/Lay'
const OddsHeading = ({min,max}) => {
  function convertToKOrLakh(number) {
    if (number >= 100000) {
      return (number / 100000).toFixed(0) + "L";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(0) + "k";
    } else {
      return number;
    }
  }
  return (
    <>
   
   




    <div className="row-container">
    <div className="row-odds bat" style={{background:"black"}}>
      <p className='game-name' style={{color:"white"}}>Min :{convertToKOrLakh(min)} Max :{convertToKOrLakh(max)}</p>
      <p className='game-price' style={{display:"none"}}>0.00</p>

    </div>
    <div className="rowright" style={{borderTop:"1px solid black"}}>
    <div className="col1">
    <div className="row-odds"></div>
    <div className="row-odds"></div>

    </div>
    <div className="col1 col2">

    <div className="row-odds " style={{padding:'0'}}>
 
    <Lay name='Back' backgroundColor="#3199e7" />
      </div>
     
    <div className="row-odds" style={{padding:'0'}}><Lay name='Lay' backgroundColor="#f77791" /></div>
                       {/* <div className="overback">suspended
                       </div> */}
    </div>
    <div className="col1">

    <div className="row-odds"></div>
    <div className="row-odds"></div>
    </div>
    </div>
    </div>

    </>
  )
}

export default OddsHeading