import React from 'react'
import moment from 'moment';

const AllBetTable = ({data}) => {
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Runner</th>
          <th>Odds</th>
          <th>Stack</th>
          <th>Bet Type</th>
          <th>PnL</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
      {data?.map((item , index) =>{
return (
        <tr key={index} className='allbetchart' style={{background:item?.is_back == "1"?"#72bbef":"#faa9ba"}}>

          <td style={{background:"#4cebdc"}}>{index + 1}</td>
          <td>{item.selectionName
          }</td>
          <td>{item.odds}</td>
          <td>{item.stack}</td>
          <td>{item.is_back ==1?"Back":"Lay"}</td>
          <td>{item.p_l}</td>
          <td>{
                moment(
                  parseInt(
                    item && item.created_at ? item.created_at : null,
                  ) * 1000,
                )
                  // .utcOffset("+05:30")
                  .format("ddd MMM DD HH:mm:ss z YYYY")}</td> 
        
        
        </tr>
        )
      })
      }
      </tbody>
      <tbody>
        {/* Add your table rows here */}
        
      </tbody>
    </table>
  </div>
  )
}

export default AllBetTable