import React from 'react'
import './style.scss'
import { tv } from '../../assets/Index'
const StatusOdds = () => {
  return (
    <div className='statusOdds'>
        <div className="match">Matched - <span>223434</span>
        <div className="tv">
            <img src={tv} alt="tv" />
        </div>
        
        
        </div>
        <div className="high-low">
            <span>High vol.</span>
            <i className='fa fa-bullhorn'></i>
        </div>
    </div>
  )
}

export default StatusOdds