import React, { useEffect, useState } from 'react'
import './style.scss';
import Countdown from '../Coundown/Countdown';
import { useOddsBetsPlaceMutation } from '../../services/betPalce/oddsBetPlace';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEventDetailMutation } from '../../services/eventDetail/eventDetail';
import { setBetData } from '../../services/betSlice/betSlice';
const BetPlaceSlip2 = ({ setBetModuleOpen }) => {
    const [stakeValue, setStakeValue] = useState(null);

    const dispatch = useDispatch();
    const handleStakeChange = (e) => {
        const newStakeValue = e.target.value;

        // Allow the stake value to be empty or a valid number
        if (newStakeValue === '' || !isNaN(Number(newStakeValue))) {
            setStakeValue(newStakeValue);  // Update the stake value based on input field
        }
    };

    const [trigge, { data: odds }] = useEventDetailMutation()




    const betData = useSelector((state) => state.betData?.betData);
    const { sportId, matchId ,fancyId} = useParams()
    const [trigger, { data }] = useOddsBetsPlaceMutation()
    const betSubmitHandler = () => {
        const betPAyloadDat = {
            is_back:String(betData?.isBack),
            market_id:String(fancyId),
            match_id:String(matchId),
            odds: String(betData?.odds),
            stack: stakeValue,
            selection_id:betData?.obj?.[0]?.selectionId
        }
        trigger(betPAyloadDat)
    }

    useEffect(() => {
        if (betData) {
           
            trigge({ "match_id": matchId, "sport_id": sportId })

        }

    }, [])
   
 

    useEffect(() => {
        
        // const profit = checkIsback(betData?.is_back)
        dispatch(setBetData({...betData,stack:stakeValue}));
    }, [stakeValue,betData?.is_back])
    useEffect(() => {
        if(betData?.is_back){

            setStakeValue(0)
        }
    }, [betData?.is_back])
    
    const stakeData = odds?.data?.UserSportSettings[0]?.match_stack.split(",")
  
const [profitLoss, setProfitLoss] = useState({
    profit:0,
    loss:0
})
// const checkSelectionId = (i)=>{
//     if(obj?.runner_json[i].selectionId == item?.selectionId){
//       if(obj?.is_back == 1){
//         return Number(stackWin)
//       }else{
        
//         return -Number(stack)
//       }
//     }else{
//       if(obj?.is_back == 0){
//         return Number(stackWin)
//       }else{
//         return -Number(stack)
        
//       }
//     }
//   }
useEffect(() => {
    betData?.obj?.map((item,index)=>{
        if(index ==1 || index == 0 && item?.winLoss){

            if(Number(item?.winLoss)>=0){
                setProfitLoss((prev)=>{
                    return{
                        ...prev,profit:Number(item?.winLoss)
                    }
                })
            }
            else if(Number(item?.winLoss)<0){
                setProfitLoss((prev)=>{
                    return{
                        ...prev,loss:Number(item?.winLoss)
                    }
                })
            }
        }
    })

}, [betData])

    return (
        <>
            <div className='betplace2'>
                <Countdown setBetModuleOpen={setBetModuleOpen} />
                <div className="betheader2">
                    <div className="bettitle2">
                        <span>{betData?.isBack == 1 ? "Back" : "Lay"}</span>(Bet For)
                    </div>
                    <div className="bet-profit2">
                        <p className='profit2'>Profit</p>
                        <p>{profitLoss?.profit}</p>
                    </div>
                    <div className="bet-loss2">
                        <p className='loss2'>Loss</p>
                        <p>{profitLoss?.loss}</p>
                    </div>
                    <div className="bet-game-name2">
                        <p className='bet-name2'>{betData?.selectionName}</p>

                    </div>



                </div>
                <div className="betstake2">
                    <div className="left-bet-odd2">
                        <p className='odd2'>Odd</p>
                        <div className="bet-value2">
                            <input type="number" value={betData?.odds} />
                            <div className="minus2">-</div>
                            <div className="plus2">+</div>
                        </div>
                    </div>
                    <div className="right-bet-stake2">
                        <p className='Stake2'>Stake</p>
                        <div className="bet-value2">
                            <input type="number" value={betData?.stack}
                                onChange={handleStakeChange} />
                            <div className="minus2" onClick={() =>{
                           
                                setStakeValue((prev) => Math.max(prev - 1, 0))}}>-</div>
                            <div className="plus2" onClick={() => setStakeValue((prev) => prev + 1)}>+</div>
                        </div>
                    </div>
                </div>
                <div className="betprice-btn2">
                    <div className="pricebtn2">
                        {stakeData?.map((item) => {
                            return (

                                <div className='pr-btn2' onClick={() => setStakeValue((prev) => prev + Number(item))} key={item}>{item}</div>
                            )
                        })}

                        <div className='pr-btn2 cleanbtn2' onClick={() => setStakeValue(0)}><i className='fa fa-trash-o'></i> Clean</div>

                    </div>


                </div>
                <div className="betclean-btn2">
                    <button className='clean-all2'> <i className='fa fa-trash-o'></i> Clean All Selection</button>
                    <button className='place-bet2' onClick={() => betSubmitHandler()}> <i className='fa fa-trash-o'></i> Place Bet</button>
                </div>
            </div>

        </>
    )
}

export default BetPlaceSlip2