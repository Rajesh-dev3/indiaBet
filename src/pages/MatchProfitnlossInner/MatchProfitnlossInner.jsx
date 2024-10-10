import React from 'react'
import './style.scss'
import Tittle from '../../Component/GameTittle/Tittle'
const MatchProfitnlossInner = () => {
  return (
    <div className='MatchInner-sec'>
        <div className="game1">
        <Tittle name='Match Winner Market Bets' textcolor='' bgcolor='' />
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

  </table>
  {/* <div className="dat-list">
    <div className="total-data">Showing 1 to 0 of Entries 0</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
</div>
<div className="game1">
<Tittle name='Match Plus Minus' textcolor='#d4e735' bgcolor='#0c1f22f5' />
</div>
<div className="game1">
<Tittle name='Commission' textcolor='#000' bgcolor='#d4e735 ' />
</div>
<div className="game1">
<Tittle name='Net Plus Minus' textcolor='#d4e735' bgcolor='#0c1f22f5' />
</div>
    </div>
  )
}

export default MatchProfitnlossInner