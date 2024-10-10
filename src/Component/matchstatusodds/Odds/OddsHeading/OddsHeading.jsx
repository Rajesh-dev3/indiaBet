import React from 'react'
import './style.scss'
import Lay from '../../lay-back/Lay'
const OddsHeading = () => {

  return (
    <>
   
   <div className="table-container">
    <div className="row-heading max-min">Min :100.0 Max :10000.0</div>
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