import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
const Account = () => {
  const handleLogOut = () => {
    localStorage.clear();
}
  return (
    <>
    <div className='account-sec'>
        <div className="username">
            <div className="leftname"> <span><i className='fa fa-user-circle-o'></i></span> c386761(Chana)
            </div>
            <div className="gmt">GMT +5:30
            </div>
        </div>
        <div className="account-list">
      <Link to={"/AccountStatement"}>
      
                <p> <i className='fa fa-inr'></i> Account Statement</p>
                <p> <i className='fa fa-angle-right' style={{fontSize:'20px', color:" #4083a9"}}></i> </p>
      </Link>
           
        </div>
        <div className="account-list">
      <Link to={"/profitLoss"}>
      
                <p> <i className='fa fa-bar-chart'></i>  Profit & Loss</p>
                <p> <i className='fa fa-angle-right' style={{fontSize:'20px', color:" #4083a9"}}></i> </p>
      </Link>
           
        </div>
        <div className="account-list">
      <Link to={"/userBetHistory"}>
      
                <p> <i className='fa fa-address-book-o'></i>  Bet History</p>
                <p> <i className='fa fa-angle-right' style={{fontSize:'20px', color:" #4083a9"}}></i> </p>
      </Link>
           
        </div>
        <button className="logout-btn" onClick={handleLogOut}> Logout <i className='fa fa-sign-in'></i> </button>
    </div>
    </>
  )
}

export default Account