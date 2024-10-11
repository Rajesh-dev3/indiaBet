import React, { useEffect, useState } from 'react'
import './style.scss';
import Countdown from '../Coundown/Countdown';
import { useOddsBetsPlaceMutation } from '../../services/betPalce/oddsBetPlace';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEventDetailMutation } from '../../services/eventDetail/eventDetail';
const BetPlaceSlip2 = ({setBetModuleOpen}) => {
  const [stakeValue, setStakeValue] = useState(null);


  const handleStakeChange = (e) => {
    const newStakeValue = e.target.value;

    // Allow the stake value to be empty or a valid number
    if (newStakeValue === '' || !isNaN(Number(newStakeValue))) {
      setStakeValue(newStakeValue);  // Update the stake value based on input field
    }
  };

  const [trigge, { data:odds }] = useEventDetailMutation()


  

  const betData = useSelector((state) => state.betData.betData);
  const [stakeDat, setstakeData] = useState([])
  const { sportId, matchId } = useParams()
const [trigger,{data}] = useOddsBetsPlaceMutation()
const betSubmitHandler = ()=>{
    const payloadBetData = {...betData,stake:stakeValue}
    trigger(payloadBetData)
}

useEffect(() => {
if(betData){

    trigge({ "match_id": matchId, "sport_id": sportId })
    
}

}, [])
const stakeData = odds?.data?.UserSportSettings[0]?.match_stack.split(",")

  return (
    <>
    <div className='betplace2'>
        <Countdown setBetModuleOpen={setBetModuleOpen}/>
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
                {stakeData?.map((item)=>{
                    return(

                        <div  className='pr-btn2' onClick={() => setStakeValue((prev) => prev + item)} key={item}>{item}</div>
                    )
                })}
     
            <div className='pr-btn2 cleanbtn2' onClick={() => setStakeValue(0)}><i className='fa fa-trash-o'></i> Clean</div>

            </div>
   
            
        </div>
        <div className="betclean-btn2">
            <button className='clean-all2'> <i className='fa fa-trash-o'></i> Clean All Selection</button>
            <button className='place-bet2'  onClick={()=>betSubmitHandler()}> <i className='fa fa-trash-o'></i> Place Bet</button>
        </div>
    </div>
    
    </>
  )
}

export default BetPlaceSlip2