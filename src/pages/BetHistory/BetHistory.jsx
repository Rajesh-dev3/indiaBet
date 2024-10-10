import React, { useState } from 'react'
import './style.scss';
import Pagination from '../../Component/Pagination/Pagination';

const BetHistory = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Cricket', 'Tennis', 'Soccer', 'Fancy'];

  return (
    <>
    
    <div className="BetHistory-sec">
    <div className='BetHistory-sec-title'>
    Bet History</div>


         <div className="date-filters">
  
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="fdate" />
    </div>
    <div className="date1">
    <select name="entery-data" id="gameselect" className='form-control'>
  <option value="10">Open</option>
  <option value="25">Settled</option>

</select>
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
 <span className='clear filter-btn'><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span>
    </div>
</div>
<div className="betsalltab">
      <ul className='bet-link-tabs'>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`bet-link ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <a href="#">{tab}</a>
          </li>
        ))}
      </ul>
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
    <th>S.No.	</th>
    <th>Client</th>
    <th>Description</th>
    <th>Selection</th>
    <th>Type	</th>
    <th>Odds</th>
    <th>Stack</th>
    <th>Date </th>
    <th>P_L	 </th>
    <th>Profit </th>
    <th>Liability </th>
    <th>Bet type	 </th>
    <th>Status	 </th>
    <th>IP	 </th>
  </tr>
  </table>
  <div className="data-list">
    <div className="total-data">Showing 0 to 0 of 0 entries</div>
    <div className="pagination-area">  <Pagination/> </div>
  </div>
</div>



</div>
    
    
    </>
  )
}

export default BetHistory