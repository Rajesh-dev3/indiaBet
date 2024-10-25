import React, { useEffect, useState } from 'react'
import './style.scss';
import Pagination from '../../Component/Pagination/Pagination';
import { useBethistoryMutation } from '../../services/bethistory/betHistory';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const BetHistory = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Cricket', 'Tennis', 'Soccer', 'Fancy'];

  
  const [trigger ,{data, isLoading}] = useBethistoryMutation()

 const [formData, setFormData] = useState({
  betType: "P",
from_date:moment().startOf('day').subtract(10, 'days').unix(),
limit:'10',
market_id: '0',
match_id:'0',
pageno:'1',
sport_id:'0',
to_date:moment().startOf('day').unix(),
});


const formHandler = (e)=>{
  const   { name, value } = e.target;
      if(name == "from_date" || name == "to_date"){
  
        setFormData((prev) =>{
     return {
       ...prev,[name]:moment(value).startOf('day').unix()
    
     }
        })
      }else{
  
        setFormData((prev) =>{
     return {
       ...prev,[name]:value
    
     }
        })
      }
    }
const dateFilterHandler = (e) => {
  e.preventDefault();
  trigger(formData); // Dispatch the loginUser thunk
};


useEffect(() => {
  trigger(formData); 
}, [])
const clearFilter= ()=>{
  const initialData ={
    betType: "P",
    from_date:moment().startOf('day').subtract(10, 'days').unix(),
    limit:'10',
    market_id: '0',
    match_id:'0',
    pageno:'1',
    sport_id:'0',
    to_date:moment().startOf('day').unix(),
  }
  setFormData(initialData)
  trigger(initialData);
}


  return (
    <>
    
    <div className="BetHistory-sec">
    <div className='BetHistory-sec-title'>
    Bet History</div>


         <div className="date-filters">
  
    <div className="date1">
 
    <input type="date" id="fdate" className='form-control' name="from_date"  value={formData?.from_date ? moment.unix(formData.from_date).format("YYYY-MM-DD"): ""} onChange={formHandler}/>
    </div>
    <div className="date1">

    <input type="date" id="fdate" className='form-control' name="to_date"    value={formData?.to_date ? moment.unix(formData.to_date).format("YYYY-MM-DD") : ""} onChange={formHandler} />
    </div>
    <div className="date1">
    <select name="betType" id="gameselect" className='form-control' onChange={formHandler}>
  <option value="10">Open</option>
  <option value="25">Settled</option>

</select>
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'onClick={dateFilterHandler}><span className='icon-filter'><i className="fa fa-filter" ></i></span> Filter</span>
 <span className='clear filter-btn'onClick={()=>clearFilter()}><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span>
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
    <th>Selection</th>
    <th>Type</th>
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
  {isLoading ? <Loaderlogo />: data?.data?.map((item , index) =>{
return (

  <tr key={index}  className='tablebethistory' style={{background:item?.Type == "Back" ? "#72bbef":"#faa9ba"}}
  >
    <td >{index + 1}</td>
    <td >{item.user_name}</td>
    <td >  {item.matchName}</td>
    <td >{item.marketName}</td>
    <td >{item.marketType}</td>
 
    
    <td >{item.Odds}</td>
    <td >{item.Stack}</td>
    <td >{
                moment(
                  parseInt(
                    item && item.Placed ? item.Placed : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td>
    <td > <span style={{ color: item.PotentialProfit < 0 ? 'red' : 'green' }}>{item.PotentialProfit}</span></td>
    <td >{item.Stack}</td>
    <td >{item.Size}</td>
    <td >{item.Type}</td>
    <td >{}</td>
    <td >{item.ipAddress?.split(",")[0]}</td>

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