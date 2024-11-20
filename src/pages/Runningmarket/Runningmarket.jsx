import React, { useEffect, useState } from 'react'
import './style.scss'
import { useMybetMutation } from '../../services/mybet/mybet';
import { useParams } from 'react-router-dom';
import { useRunningMarketMutation } from '../../services/runningMarket/runningMarket';

// import moment from 'moment'
const Runningmarket = () => {
  const {matchId} =useParams()
  const[trigger, {data}]= useRunningMarketMutation()
  console.log(data , "usebet");
  const [formData, setFormData] = useState({
    "limit":50,"pageno":1,"series_id":0,"sport_id":0,"type":"home"
  });
  const [upddateData, setUpddateData] = useState([])
  useEffect(() => {
    trigger(formData)
   }, [matchId])
   useEffect(() => {

     const newrara = data?.data?.map(match => ({
      Match_Name: match.Match_Name,
      Market_Name: match.Market_Odds[0].Market_Name,
      Sport_Name: match.Sport_Name,
      Match_Status: match.Market_Odds[0].Odds[0].Match_Status,
      teamName1: match.Market_Odds[0].Odds[0].teamName,
      teamName2: match.Market_Odds[0].Odds[1].teamName,
      pnl1: match.Market_Odds[0].Odds[0].PnL,
      pnl2: match.Market_Odds[0].Odds[1].PnL,
  }));
  setUpddateData(newrara)
   }, [data])
   

console.log(upddateData,"upddateData");
  return (
  <>
    <div className="Runningmarket-sec">
    <div className='Runningmarket-sec-title'>
    My Market
    </div>
<div className="data-area">
<div className="tablebody ">
  
    {upddateData?.length ? upddateData?.map((item,i)=>{
  return(
    <table key={i}>
  <thead>

  <tr>
    <th>S.no</th>
    <th>Match_Name</th>
    <th>Market_Name	</th>
    <th>Sport_Name</th>
    <th>Match_Status</th>
    <th>{item?.teamName1}</th>
    <th>{item?.teamName2}</th>
    <th>The Draw
    </th>

  </tr>
  </thead>
  <tbody>

  <tr>
    <td>{i + 1}</td>
    <td>{item?.Match_Name}</td>
    <td>{item?.Market_Name}	</td>
    <td>{item?.Sport_Name}</td>
    <td>{item?.Match_Status}</td>
    <td style={{color:item?.pnl1>0?"green":"red"}}>{item?.pnl1}</td>
    <td  style={{color:item?.pnl2>0?"green":"red"}}>{item?.pnl2}</td>
    <td>0
    </td>

  </tr>
  </tbody>

  <tbody>
  {/* {data?.data?.map((item , index) =>{
return (

  <tr key={index}>
    <td>{index + 1}</td>
    <td>{
                moment(
                  parseInt(
                    item && item.created_at ? item.created_at : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td>
    <td>{item.description}</td>
    <td >  <span style={{ color:  'green'  }}> {item.amount>0 ? item?.amount:0}</span></td>
    <td >  <span style={{ color: 'red' }}>{item.amount<0 ? item?.amount:0}</span></td>
    <td >
       <span style={{color:'red'}}>0</span> </td>
    <td>-</td>
    <td><span style={{color:'#008000'}}>{item.available_balance}</span></td>

  </tr>
)
}) */}
{/* } */}
  </tbody>
  </table>
  )
    }):<div style={{padding:'3px'}}> No record found</div>} 
  

  {/* <div className="data-list">
    <div className="total-data">Showing 0 to 0 of 0 entries</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
{
  
}
  {/* <p className='no-data-found'>No record found</p> */}
  </div>    
</div>
  
  </>
  
  )
}

export default Runningmarket