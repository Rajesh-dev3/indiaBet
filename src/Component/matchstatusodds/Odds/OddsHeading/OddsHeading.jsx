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
   
   <div className="table-container">
    <div className="row-heading max-min">Min :{convertToKOrLakh(min)} Max :{convertToKOrLakh(max)}</div>
    <div className="row-heading"></div>
    <div className="row-heading"></div>
    <div className="row-heading back"><Lay name='Back' backgroundColor="#3199e7" /></div>
    <div className="row-heading lay"><Lay name='Lay' backgroundColor="#f77791" /></div>
    <div className="row-heading"></div>
    <div className="row-heading"></div>
    </div>



    </>
  )
}

export default OddsHeading