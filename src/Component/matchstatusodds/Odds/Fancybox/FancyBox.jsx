import React from 'react'
import BackValue from '../../back-lay-value/BackValue'
import './style.scss'

const FancyBox = () => {
    return (
   
        <div className="fancybox-container">
        <div className="fancybox-row batname" >  <p className='game-name'>Trinbago Knight Riders</p>
        <p className='game-price'>Book</p></div>
       
        <div className="fancybox-row back-value"><BackValue top='1.01' bottom='1000' bgcolor='#72bbef'/></div>
        <div className="fancybox-row lay-value"><BackValue top='-' bottom='-' bgcolor='#faa9ba'/></div>
        <div className="fancybox-row"></div>
        <div className="fancybox-row"></div>
        </div>
      )
    }

export default FancyBox