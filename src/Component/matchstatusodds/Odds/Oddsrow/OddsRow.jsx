import React from 'react'
import './style.scss'
import BackValue from '../../back-lay-value/BackValue'
import { useDispatch, useSelector } from 'react-redux';
import { setBetData } from '../../../../services/betSlice/betSlice';
const OddsRow = ({data,prevOdd,matchData,fun}) => {

  return (
  <>
   <div className="row-container">
    <div className="row-odds bat">
      <p className='game-name'>{data?.selectionName}</p>
      <p className='game-price' style={{color:data?.WinAndLoss>=0?"green":"red"}} >{data?.WinAndLoss}</p>

    </div>
    <div className="rowright">
    <div className="col1">
    <div className="row-odds"></div>
    <div className="row-odds"></div>

    </div>
    <div className="col1 col2">

    <div className="row-odds back-value">
 
      <BackValue top={data?.ex?.availableToBack[0].price} selectionId={data?.selectionId} bottom={data?.ex?.availableToBack[0]?.size} isBack={1} data={matchData}   bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      } fun={fun}/>
      </div>
     
    <div className="row-odds lay-value">
      <BackValue top={data?.ex?.availableToLay[0].price} bottom={data?.ex?.availableToLay[0]?.size} bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      } fun={fun} isBack={0}/>
                      </div>
                    
                       {/* <div className="overback">suspended
                       </div> */}
    </div>
    <div className="col1">

    <div className="row-odds"></div>
    <div className="row-odds"></div>
    </div>
    </div>
    </div>


  </>
  )
}

export default OddsRow