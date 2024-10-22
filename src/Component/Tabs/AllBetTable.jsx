import React from 'react'

const AllBetTable = ({data}) => {
  console.log(data,"data")
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        
        </tr>
      </tbody>
      <tbody>
        {/* Add your table rows here */}
        
      </tbody>
    </table>
  </div>
  )
}

export default AllBetTable