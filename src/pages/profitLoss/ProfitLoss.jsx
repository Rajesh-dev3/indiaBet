import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Pagination from '../../Component/Pagination/Pagination'
const ProfitLoss = () => {
  return (
    <>
    <div className="ProfitLoss-sec">
    <div className='ProfitLoss-sec-title'>
        Profit Loss Listing </div>


         <div className="date-filters">
    <div className="date1">
    <select name="entery-data" id="gameselect" className='form-control'>
  <option value="10">All</option>
  <option value="25">Cricket</option>
  <option value="50">Soccer</option>
  <option value="100">Tennis</option>
  <option value="100">Fancy</option>
</select>
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
 <span className='clear filter-btn'><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span>
    </div>
</div>

<div className="data-filter">
<div className="show-enteries">
<span className='show'>Show</span>
<select name="entery-data" id="entery-data">
  <option value="10">10</option>
  <option value="25">25</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>
<span className='Enteries'>Enteries</span>
</div>
<div className="search-filter">
    <span className='search'>Search</span>
    <input type="text" className='search-data'/>
</div>

</div>

<div className="tablebody">
<table>
  <tr>
    <th>S.no.</th>
    <th>Event Name	</th>
    <th>Market</th>
    <th>P_L</th>
    <th>Commission</th>
    <th>Created On
   
   
    </th>
  </tr>
  </table>
  <div className="dat-list">
    <div className="total-data">Showing 1 to 0 of Entries 0</div>
    <div className="pagination-area">
      <Pagination/>
    </div>
  </div>
</div>


         </div>
    </>
  )
}

export default ProfitLoss