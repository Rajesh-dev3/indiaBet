import React, { useEffect, useState } from 'react'
import './style.scss';
import Pagination from '../../Component/Pagination/Pagination';
import { useBethistoryMutation } from '../../services/bethistory/betHistory';
import moment from 'moment';

const BetHistory = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Cricket', 'Tennis', 'Soccer', 'Fancy'];

  
  const [trigger ,{data}] = useBethistoryMutation()
 console.log(data, 'bethistory')
 const [formData, setFormData] = useState({
  betType: "P",
from_date:'1727980200',
limit:'10',
market_id: '0',
match_id:'0',
pageno:'1',
sport_id:'0',
to_date:'1728584999',
});


const formHandler = (e)=>{
const   { name, value } = e.target;
  // console.log(e?.target?.value,"formHandler")
  setFormData((prev) =>{
return {
 ...prev,[name]:value

}
  })
}
const dateFilterHandler = (e) => {
  e.preventDefault();
  trigger(formData); // Dispatch the loginUser thunk
};


useEffect(() => {
  trigger(formData); 
}, [])


  return (
    <>
    
    <div className="BetHistory-sec">
    <div className='BetHistory-sec-title'>
    Bet History</div>


         <div className="date-filters">
  
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="from_date" onChange={formHandler}/>
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="to_date"onChange={formHandler} />
    </div>
    <div className="date1">
    <select name="betType" id="gameselect" className='form-control' onChange={formHandler}>
  <option value="10">Open</option>
  <option value="25">Settled</option>

</select>
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'><span className='icon-filter'><i className="fa fa-filter" onClick={dateFilterHandler}></i></span> Filter</span>
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
<select name="limit" id="entery-data"  onChange={formHandler}>
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
  <thead>
  <tr>
    <th>S.No.	</th>
    <th>Client</th>
    <th>Description</th>
    <th>Market</th>
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
  </thead>
  <tbody>
{data?.data?.map((item , index) =>{
return (

  <tr key={index}>
    <td>{index + 1}</td>
    <td>{item.userId}</td>
    <td >  {item.seriesName}</td>
    <td>{item.marketName}</td>
 
    <td>
      {/* {item.Type} */}
      </td>
    <td>{item.Odds}</td>
    <td>{item.Stack}</td>
    <td>{
                moment(
                  parseInt(
                    item && item.Placed ? item.Placed : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td>
    <td> <span style={{ color: item.PotentialProfit < 0 ? 'red' : 'green' }}>{item.PotentialProfit}</span></td>
    <td>{item.description}</td>
    <td>{item.Liability}</td>
    <td>{item.Type}</td>
    <td>{item.description}</td>
    <td>{item.ipAddress}</td>

  </tr>
)
})
}
  </tbody>
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