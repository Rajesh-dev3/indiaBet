import React from 'react'
import { casinogame } from '../../assets/Index'
import './style.scss'
const CasinoGame = () => {
  return (
    <>
    <div className="casinogame-sec">
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(()=>{
              return(
<img src={casinogame} alt="game" />
  )
})}
    </div>
    </>
  )
}

export default CasinoGame