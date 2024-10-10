import React from 'react'
import './style.scss';
const BetPlaceSlip = () => {
  return (
    <>
    <div className='betplace'>
        <div className="betheader">
<div className="bettitle">
    <span>Lay</span>(Bet For)
</div>
<div className="bet-profit">
    <p className='profit'>Profit</p>
    <p>0</p>
</div>
<div className="bet-loss">
<p className='loss'>Loss</p>
<p>0</p>
</div>
<div className="bet-game-name">
<p className='bet-name'>Trinbago Knight Riders</p>

</div>



        </div>
        <div className="betstake">
            <div className="left-bet-odd">
                <p className='odd'>Odd</p>
                <div className="bet-value">
                    <input type="number" />
                    <div className="minus">-</div>
                    <div className="plus">+</div>
                </div>
            </div>
            <div className="right-bet-stake">
                <p className='Stake'>Stake</p>
                <div className="bet-value">
                    <input type="number" />
                    <div className="minus">-</div>
                    <div className="plus">+</div>
                </div>
            </div>
        </div>
        <div className="betprice-btn">
            <div className="pricebtn">
            <div  className='pr-btn'><input type="text" value={"500"} disabled /></div>
            <div className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div  className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div className='pr-btn'><input type="text" value={"500"} disabled  /></div>
            <div className='pr-btn'><button className='cleanbtn'> <i className='fa fa-trash-o'></i> Clean</button></div>

            </div>
   
            
        </div>
        <div className="betclean-btn">
            <button className='clean-all'> <i className='fa fa-trash-o'></i> Clean All Selection</button>
            <button className='place-bet'> <i className='fa fa-trash-o'></i> Place Bet</button>
        </div>
    </div>
    
    </>
  )
}

export default BetPlaceSlip