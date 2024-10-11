import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Pagination from '../../Component/Pagination/Pagination'
import { useProfitnlossMutation } from '../../services/profitnloss/profitnloss'
import moment from 'moment';

const ProfitLoss = () => {

  
  const [trigger ,{data}] = useProfitnlossMutation()
 console.log(data, 'pnl')
 const [formData, setFormData] = useState({
betType:"P",
from_date:'1728498600',
limit: '15',
match_id:"0",
pageno:'1',
sport_id:"0",
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
    <div className="ProfitLoss-sec">
    <div className='ProfitLoss-sec-title'>
        Profit Loss Listing </div>


         <div className="date-filters">
    <div className="date1">
    <select name="betType" id="gameselect" className='form-control' onChange={formHandler} >
  <option value="10">All</option>
  <option value="25">Cricket</option>
  <option value="50">Soccer</option>
  <option value="100">Tennis</option>
  <option value="100">Fancy</option>
</select>
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="from_date"  onChange={formHandler} />
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="to_date" onChange={formHandler}  />
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn'onClick={dateFilterHandler}><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
 <span className='clear filter-btn'><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span>
    </div>
</div>

<div className="data-filter">
<div className="show-enteries">
<span className='show'>Show</span>
<select name="limit" id="entery-data"  onChange={formHandler} >
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
    <th>S.no.</th>
    <th>Event Name	</th>
    <th>Market</th>
    <th>P_L</th>
    <th>Commission</th>
    <th>Created On
   
   
    </th>
  </tr>

  </thead>
  <tbody>
{data?.data?.map((item , index) =>{
return (

  <tr key={index}>
    <td>{index + 1}</td>
    <td >  {item.matchName}</td>
    <td>{item.seriesName}</td>
    <td> <span style={{ color: item.userPL < 0 ? 'red' : 'green' }}>{item.userPL}</span></td>
 
    <td>
      {/* {item.Type} */}0
      </td>
  
    <td>{
                moment(
                  parseInt(
                    item && item.matchDate ? item.matchDate : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td>
    {/* <td> <span style={{ color: item.PotentialProfit < 0 ? 'red' : 'green' }}>{item.PotentialProfit}</span></td>
   <td>{item.description}</td> */}
   

  </tr>
)
})
}
  </tbody>
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