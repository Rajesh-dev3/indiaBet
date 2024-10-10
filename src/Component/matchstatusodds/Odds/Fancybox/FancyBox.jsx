import React from 'react'
import BackValue from '../../back-lay-value/BackValue'
import './style.scss'

const FancyBox = ({data,prev}) => {
    return (
   
        <div className="fancybox-container">
        <div className="batname" >  <p className='game-name'>{data?.RunnerName}</p>
        <p className='game-price'>Book</p></div>
       <div className="middle">

        <div className="lay-value"><BackValue top={data?.LayPrice1} bottom={data?.LaySize1} bg={
          data?.LayPrice1 > prev?.price
          ? "odds-up-color"
          : data?.LayPrice1 < prev?.price
          ? "odds-down-color"
          : ""
        }/></div>
        <div className="back-value"><BackValue top={data?.BackPrice1} bottom={data?.BackSize1}  bg={
          data?.price > prev?.price
          ? "odds-up-color"
          : data?.price < prev?.price
          ? "odds-down-color"
          : ""
        }/>
        
      </div>
      {data?.adminMessage == "BET SUSPENDED"|| data?.inplayStatus === "SUSPENDED"  || data?.inplayStatus === "CLOSE" || data?.inplayStatus === "Ball Running" ?
           <div className="suspend absolute w-full h-full text-[red] font-bold flex items-center justify-center">
            {data?.inplayStatus === "Ball Running"?"Ball Running":"SUSPENDED"}
           </div>:""
          } 
       </div>
       <div className="right">

        <div className="fancybox-row"></div>
        <div className="fancybox-row"></div>
       </div>
        </div>
      )
    }

export default FancyBox