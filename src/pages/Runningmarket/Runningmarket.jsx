import React, { useState } from 'react'
import './style.scss'
import { useMybetMutation } from '../../services/mybet/mybet';
import { useParams } from 'react-router-dom';

// import moment from 'moment'
const Runningmarket = () => {
  const[trigger, {data} ]= useMybetMutation()
  const {matchId} =useParams()
  const [formData, setFormData] = useState({
    fancy_id:0,
    market_id:"0",
    match_id:matchId,
    limit:10,
    pageno:1,
  });
  console.log(data, "running")
  return (
  <>
    <div className="Runningmarket-sec">
    <div className='Runningmarket-sec-title'>
    My Market
    </div>
<div className="data-area">
<div className="tablebody">
<table>
  <thead>

  <tr>
    <th>S.no</th>
    <th>Match_Name</th>
    <th>Market_Name	</th>
    <th>Sport_Name</th>
    <th>Match_Status</th>
    <th>pn1</th>
    <th>pn2</th>
    <th>The Draw
    </th>

  </tr>
  </thead>
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
  {/* <div className="data-list">
    <div className="total-data">Showing 0 to 0 of 0 entries</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
  {/* <p className='no-data-found'>No record found</p> */}
  </div>    
</div>
  
  </>
  
  )
}

export default Runningmarket