import moment from 'moment'
import React from 'react'

const FancyBetTable = ({data}) => {
  console.log(data ,"fancydata")
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Runner</th>
            <th>Bet Type</th>
            <th>Odds</th>
            <th>Stack</th>
            <th>PnL</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
      {data?.map((item , index) =>{
return (
        <tr key={index} className='allbetchart' style={{background:item?.is_back == "0"?"#72bbef":"#faa9ba"}}>

          <td style={{background:"#4cebdc"}}>{index + 1}</td>
          <td>{item.fancy_name
          }</td>
          <td>{item.is_back ==1?"No":"Yes"}</td>

          <td>{item.run}</td>
          <td>{item.stack}</td>
          <td>{item.profit}</td>
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
      </table>
    </div>
  )
}

export default FancyBetTable