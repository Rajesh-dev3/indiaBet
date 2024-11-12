import React, { useEffect, useState } from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import { useMatchPnlMutation } from '../../services/Matchpnl/matchpnl';
import moment from 'moment';
const Matchprofitnloss = () => {
  const [triger , {data}] = useMatchPnlMutation()
  const [formData , setFormData] = useState({
    from_date: String(moment().startOf('day').subtract(10, 'days').unix()),
    to_date: String(moment().startOf('day').unix())
  })

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
   
      [name]: name === "from_date" || name === "to_date" ? String(moment(value).startOf('day').unix()) : value,
    }));
  };





  useEffect(()=>{
triger({    from_date:  String(moment().startOf('day').subtract(10, 'days').unix()),
  to_date:  String(moment().startOf('day').unix())})
},[])


const submitHnadler= ()=>{
  triger(formData)
}

  return (

    <>
     <div className="Matchprofitnloss-sec">

      <div className='Matchprofitnloss-sec-title'>
      Profit Loss Listing </div>
      <div className="date-filters">

    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="from_date" value={formData?.from_date ? moment.unix(formData.from_date).format("YYYY-MM-DD") : ""} onChange={formHandler} />
    </div>
    <div className="date1">
    <input type="date" id="fdate" className='form-control' name="to_date" value={formData?.to_date ? moment.unix(formData.to_date).format("YYYY-MM-DD") : ""} onChange={formHandler} />
    </div>
    <div className="date1 filter2">
 <span className='filter filter-btn' onClick={submitHnadler}><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
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
  {data?.data?.map((item , index)=>{
  return(
 
    <tr key={index}>
    <td>
    {index + 1}</td>
    <td><Link to={`/matchprofitnlossinner/${item?.sport_id}/${item?.match_id}`}>{item?.name}</Link></td>
    <td ><span className='report'> <Link to={`/matchprofitnlossinner/${item?.sport_id}/${item?.match_id}`}>	Report</Link></span>	</td>
   
  </tr>
  )
})}

  
 
   

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