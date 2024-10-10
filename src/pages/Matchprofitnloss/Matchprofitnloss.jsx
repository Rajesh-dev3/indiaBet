import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
const Matchprofitnloss = () => {
  return (

    <>
     <div className="Matchprofitnloss-sec">

      <div className='Matchprofitnloss-sec-title'>
      Profit Loss Listing </div>
      <div className="date-filters">

    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
 {/* <span className='clear filter-btn'><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span> */}
    </div>
</div>

<div className="tablebody">
<table>
  <thead>


  <tr>
    <th style={{width:'11%'}}>
    S.No.</th>
    <th>Event Name	</th>
    <th style={{width:'20%'}}> <Link>	Report</Link></th>
   
  </tr>
  </thead>
  <tbody>

 
  <tr>
    <td>
    1</td>
    <td><Link to={"/matchprofitnlossinner"}>		V Kudermetova v L Samsonova</Link></td>
    <td ><span className='report'> <Link to={"/matchprofitnlossinner"}>	Report</Link></span>	</td>
   
  </tr>
  <tr>
    <td>
    1</td>
    <td> <Link to={"/matchprofitnlossinner"}>		V Kudermetova v L Samsonova</Link></td>
    <td><span className='report'> <Link to={"/matchprofitnlossinner"}>	Report</Link></span>	</td>
   
  </tr>
 
   

  </tbody>
  </table>
  {/* <div className="dat-list">
    <div className="total-data">Showing 1 to 0 of Entries 0</div>
    <div className="pagination-area"></div>
  </div> */}
</div>
     </div>
    </>
  )
}

export default Matchprofitnloss