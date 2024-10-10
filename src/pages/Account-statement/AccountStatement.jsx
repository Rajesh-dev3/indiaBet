
import { Link } from 'react-router-dom'
import './style.scss';
import { useState } from 'react';
import { useAccountstatementMutation } from '../../services/account-statement/AccountStatement';
import moment from 'moment';

const AccountStatement = () => {

  const [trigger,{data}] = useAccountstatementMutation()
 console.log(data , 'data')
  const [formData, setFormData] = useState({
    from_date:'',
    to_date:'',
    limit:'10',
    pageno:'1',
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
    trigger({...formData,from_date:moment(formData?.from_date).startOf('day').unix(),
      to_date:moment(formData?.to_date).startOf('day').unix()
    }); // Dispatch the loginUser thunk
  };
  return (
   <>
   <div className="accountStatement-sec">
    <div className='accountStatement-title'>
        <div className="annouce">

        Account Statement
    
        </div>
           <div className="back-btn"><Link to={"/"}><span>Back</span></Link></div></div>
<div className="profit-btn-area">
    <button className='match-profit entries-btn'>match profit</button>
    <button className='Casino-profit entries-btn'>casino profit</button>
    <button className='DW entries-btn'>D & W</button>
    <button className='sattlement entries-btn'>Sattlement</button>
    <button className='ledgers entries-btn'>Ledgers</button>
</div>
<div className="date-filter">
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="from_date" onChange={formHandler}/>
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="to_date" onChange={formHandler} />
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn' onClick={dateFilterHandler}>Filter</span>
 <span className='clear filter-btn'>Clear</span>
    </div>
</div>
<div className="data-filter">
<div className="show-enteries">
<span className='show'>Show</span>
<select name="limit" id="entery-data" onChange={formHandler} >
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
    <th>Date</th>
    <th>S.no</th>
    <th>Credit</th>
    <th>Debit</th>
    <th>Pts	</th>
    <th>Remark</th>

  </tr>
  </thead>
  <tbody>
{data?.data?.map((item , index) =>{
return (

  <tr key={index}>
    <td>{
                moment(
                  parseInt(
                    item && item.created_at ? item.created_at : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td>
    <td>{index + 1}</td>
    <td >  <span style={{ color: item.amount < 0 ? 'red' : 'green' }}> {item.amount}</span></td>
    <td>-</td>
    <td>{item.available_balance}</td>
    <td>{item.description}</td>

  </tr>
)
})
}
  </tbody>
  </table>
  <div className="data-list">
    <div className="total-data">Showing 0 to 0 of 0 entries</div>
    <div className="pagination-area"></div>
  </div>
</div>
</div>

   </>
  )
}

export default AccountStatement