import React, { useState } from 'react'
import './style.scss';
import Countdown from '../Coundown/Countdown';
const BetPlaceSlip2 = () => {
  const [stakeValue, setStakeValue] = useState(0);

  const handleStakeChange = (e) => {
    const newStakeValue = Number(e.target.value);
    setStakeValue(newStakeValue);  // Update the Stake value based on input field
  };











  return (
    <>
    <div className='betplace2'>
        <Countdown/>
        <div className="betheader2">
<div className="bettitle2">
    <span>Lay</span>(Bet For)
</div>
<div className="bet-profit2">
    <p className='profit2'>Profit</p>
    <p>0</p>
</div>
<div className="bet-loss2">
<p className='loss2'>Loss</p>
<p>0</p>
</div>
<div className="bet-game-name2">
<p className='bet-name2'>Trinbago Knight Riders</p>

</div>



        </div>
        <div className="betstake2">
            <div className="left-bet-odd2">
                <p className='odd2'>Odd</p>
                <div className="bet-value2">
                    <input type="number" />
                    <div className="minus2">-</div>
                    <div className="plus2">+</div>
                </div>
            </div>
            <div className="right-bet-stake2">
                <p className='Stake2'>Stake</p>
                <div className="bet-value2">
                    <input type="number"     value={stakeValue} 
                onChange={handleStakeChange}/>
                    <div className="minus2" onClick={() => setStakeValue((prev) => Math.max(prev - 1, 0))}>-</div>
                    <div className="plus2" onClick={() => setStakeValue((prev) => prev + 1)}>+</div>
                </div>
            </div>
        </div>
        <div className="betprice-btn2">
            <div className="pricebtn2">
            <div  className='pr-btn2' onClick={() => setStakeValue((prev) => prev + 500)}>500</div>
            <div className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 1000)}>1000</div>
            <div className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 1500)}>1500</div>
            <div className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 2000)}>2000</div>
            <div  className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 2500)}>2500</div>
            <div className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 3000)}>3000</div>
            <div className='pr-btn2'  onClick={() => setStakeValue((prev) => prev + 3500)}>3500</div>
            <div className='pr-btn2 cleanbtn2' onClick={() => setStakeValue(0)}><i className='fa fa-trash-o'></i> Clean</div>

            </div>
   
            
        </div>
        <div className="betclean-btn2">
            <button className='clean-all2'> <i className='fa fa-trash-o'></i> Clean All Selection</button>
            <button className='place-bet2'> <i className='fa fa-trash-o'></i> Place Bet</button>
        </div>
    </div>
    
    </>
  )
}

export default BetPlaceSlip2