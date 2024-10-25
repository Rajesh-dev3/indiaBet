import React from 'react'
import BackValue from '../../back-lay-value/BackValue'
import './style.scss'

const FancyBox = ({data,prev,fun,setCheckFancy,setBookMaker}) => {
    return (
   
        <div className="fancybox-container">
        <div className="batname" >  <p className='game-name'>{data?.RunnerName}</p>
        <p className='game-price'>Book</p></div>
       <div className="middle">

        <div className="lay-value"><BackValue checkBookMaker={false} setBookMaker={setBookMaker} checkFancy={true} setCheckFancy={setCheckFancy} data={data} top={data?.LayPrice1} isBack={0} bottom={data?.LaySize1} fun={fun} bg={
          data?.LayPrice1 > prev?.price
          ? "odds-up-color"
          : data?.LayPrice1 < prev?.price
          ? "odds-down-color"
          : ""
        }/></div>
        <div className="back-value"><BackValue checkBookMaker={false} setBookMaker={setBookMaker} checkFancy={true} setCheckFancy={setCheckFancy}data={data} isBack={1} top={data?.BackPrice1} bottom={data?.BackSize1} fun={fun} bg={
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