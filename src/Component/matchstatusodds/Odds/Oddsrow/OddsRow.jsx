import React from 'react'
import './style.scss'
import BackValue from '../../back-lay-value/BackValue'
const OddsRow = ({data,prevOdd}) => {
  return (
  <>
   <div className="row-container">
    <div className="row-odds bat">
      <p className='game-name'>{data?.selectionName}</p>
      <p className='game-price'>0.00</p>

    </div>
    <div className="rowright">
    <div className="col1">
    <div className="row-odds"></div>
    <div className="row-odds"></div>

    </div>
    <div className="col1 col2">

    <div className="row-odds back-value">
 
      <BackValue top={data?.ex?.availableToBack[0].price} bottom={data?.ex?.availableToBack[0]?.size}    bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      }/>
      </div>
     
    <div className="row-odds lay-value"><BackValue top={data?.ex?.availableToLay[0].price} bottom={data?.ex?.availableToLay[0]?.size} bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      }/></div>
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