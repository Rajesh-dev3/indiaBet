import React, { useEffect, useState } from 'react'
import './style.scss'
import Tittle from '../../Component/GameTittle/Tittle'
import { useMatchPnlInnerMutation } from '../../services/Matchpnl/matchpnl'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const MatchProfitnlossInner = () => {
  const [ trigger , {data}] = useMatchPnlInnerMutation()
  console.log(data?.data?.fetchMatchPnl?.fancyBets, "inner")
  const {sportID,matchID}= useParams()
  const [formData , setFormData]= useState({
     match_id:matchID,
    sport_id:sportID
  })
  useEffect(()=>{
    trigger({match_id:matchID,
      sport_id:sportID})
    },[])

const oddmatch = data?.data?.fetchMatchPnl?.betsOdds
const funncy = data?.data?.fetchMatchPnl?.fancyBets

const totalPL = oddmatch?.reduce((acc, item) => acc + (item?.pL || 0), 0);
const result = totalPL <0 ? `You Loss ${totalPL}` : `You Won ${totalPL}`
  return (
    <div className='MatchInner-sec'>
        <div className="game1">
        <Tittle name='Match Winner Market Bets' textcolor='' bgcolor=''    gamename={result}/>

        <div className="tablebody">
<table>
  <thead>


  <tr>
    <th>Date</th>
    <th>Rate</th>
    <th>Amt.</th>
    <th>Mode</th>
    <th>Team</th>
    <th>Result</th>
    <th>P&L
    </th>
   
  </tr>
  </thead>
  <tbody>

{oddmatch?.map((item , index)=>{
  return(
<tr key={index}>
  <td>
  {
                moment(
                  parseInt(
                    item && item.Date ? item.Date : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}
    </td>
  <td>{item?.Rate}	</td>
  <td>{item?.Amt}	</td>
  <td>{item?.Mode}	</td>
  <td>{item?.Team}</td>
  <td>{item?.Result}</td>
  <td style={{color: item?.pL <0 ? "red" : "green"}}>{item?.pL}</td>

 
</tr>
  )
})}

</tbody>

  </table>
  {/* <div className="dat-list">
    <div className="total-data">Showing 1 to 0 of Entries 0</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
</div>
        <div className="game1">
        <Tittle name='Fancy Bets
' textcolor='' bgcolor='' />
        <div className="tablebody">
<table>
  <thead>


  <tr>
    <th>Date</th>
    <th>Fancy	</th>
    <th>Selection	</th>
    <th>Rate	</th>
    <th>Amt.</th>
    <th>Mode</th>
    <th>Result</th>
    <th>P&L
    </th>
   
  </tr>
  </thead>
  <tbody>


  {funncy?.map((item , index)=>{
  return(
<tr key={index}>
  <td>{item?.Date}</td>
  <td>{item?.Rate}	</td>
  <td>{item?.Amt}	</td>
  <td>{item?.Mode}	</td>
  <td>{item?.Team}</td>
  <td>{item?.Result}</td>
  <td style={{color: item?.pL <0 ? "red" : "green"}}>{item?.pL}</td>

 
</tr>
  )
})}
  </tbody>

  </table>
  {/* <div className="dat-list">
    <div className="total-data">Showing 1 to 0 of Entries 0</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
</div>
<div className="game1">
<Tittle name='Match Plus Minus' textcolor='#d4e735' bgcolor='#0c1f22f5' gamename={data?.data?.MatchPlusMinus}/>
</div>
<div className="game1">
<Tittle name='Commission' textcolor='#000' bgcolor='#d4e735 ' gamename={data?.data?.commission} />
</div>
<div className="game1">
<Tittle name='Net Plus Minus' textcolor='#d4e735' bgcolor='#0c1f22f5' gamename={data?.data?.NetPlusMinus} />
</div>
    </div>
  )
}

export default MatchProfitnlossInner