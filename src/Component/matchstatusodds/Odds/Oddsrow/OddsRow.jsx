import React from 'react'
import './style.scss'
import BackValue from '../../back-lay-value/BackValue'
const OddsRow = () => {
  return (
  <>
   <div className="row-container">
    <div className="row-odds bat">
      <p className='game-name'>Trinbago Knight Riders</p>
      <p className='game-price'>0.00</p>

    </div>
    <div className="row-odds"></div>
    <div className="row-odds"></div>
    <div className="row-odds back-value"><BackValue top='1.01' bottom='1000' bgcolor='#72bbef'/></div>
    <div className="row-odds lay-value"><BackValue top='-' bottom='-' bgcolor='#faa9ba'/></div>
    <div className="row-odds"></div>
    <div className="row-odds"></div>
    </div>


  </>
  )
}

export default OddsRow