import { Link } from 'react-router-dom'
import './style.scss';
import { useEffect, useState } from 'react';
import { useAccountstatementMutation } from '../../services/account-statement/AccountStatement';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import Statement from './Statement';
import MatchProfit from './Matchprofit';
import CasinoProfit from './casinoProfit';
import DepositWithdraw from './deposiWithdraw';
import Ledger from './ledgers';
import UserMatchDetailTable from './userMatchDetailTable';

const UserMatchDetail = () => {
 
  const tabObj = {
    0: <UserMatchDetailTable data={[]} isLoading={false} />,

  }

  return (
    <>
      <div className="accountStatement-sec">
        <div className='accountStatement-title'>
          <div className="annouce">Account Statement</div>
          <div className="back-btn"><Link to={"/"}><span>Back</span></Link></div>
        </div>
        <div className="data-filter2 ">
        
          <div className=" search-filter2">
            <span className='search2'>Search</span>
            <input type="text" className='search-data2' />
          </div>
        </div>

      
        {tabObj[0]}
      </div>
    </>
  );
};

export default UserMatchDetail;
