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

const AccountStatement = () => {
  const [activeButton, setActiveButton] = useState('AC'); // Track active button
  const [trigger, { data, isLoading }] = useAccountstatementMutation();
  const [formData, setFormData] = useState({
    from_date: String(moment().startOf('day').subtract(10, 'days').unix()),
    to_date:String(moment().startOf('day').unix()),
    type: activeButton,
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
   
      [name]: name === "from_date" || name === "to_date" ? String(moment(value).startOf('day').unix()) : value,
    }));
  };

  const dateFilterHandler = (e) => {
    e.preventDefault();
    trigger(formData);
  };

  const clearFilter = () => {
    const initialData = {

      type: activeButton,
      from_date: String(moment().startOf('day').subtract(10, 'days').unix()),
      to_date:String(moment().startOf('day').unix()),

    };
    setFormData(initialData);
    trigger(initialData);
  };

  const handleButtonClick = (buttonType) => {
    setFormData((prev) => ({
      ...prev,
      type:buttonType
      ,
    }));
    setActiveButton(buttonType);
  };
    // You could trigger a different API call or filter data based on `buttonType`
  
  const [tabOpen, setTabOpen] = useState(2)
  useEffect(() => {
    trigger(formData);
  }, [activeButton]);

console.log(formData,"formData")
  const tabObj = {
    0: <MatchProfit data={data} isLoading={isLoading} />,
    1: <CasinoProfit data={data} isLoading={isLoading}/>,
    2: <Statement data={data} isLoading={isLoading} />,
    3: <DepositWithdraw data={data?.data} isLoading={isLoading}/>,
    4: <Ledger data={data} isLoading={isLoading}/>
  }
  const typeObj  = {
    'match profit':"MP",
    'casino profit':"CP",
    "Satement":"AC",
    'D & W':"DW",
    'Ledgers':"ML"
  }

  return (
    <>
      <div className="accountStatement-sec">
        <div className='accountStatement-title'>
          <div className="annouce">Account Statement</div>
          <div className="back-btn"><Link to={"/"}><span>Back</span></Link></div>
        </div>
        <div className="profit-btn-area">
          {['match profit', 'casino profit', 'Satement', 'D & W', 'Ledgers'].map((type, i) => (
            <button
              key={type}
              className={`entries-btn ${activeButton === typeObj[type] ? 'active' : ''}`}
              onClick={() => {
                console.log(typeObj[type])
                handleButtonClick(typeObj[type])
                setTabOpen(i)
              }}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="date-filter">
          <div className="date1">
            <input
              type="date"
              id="fdate"
              className="form-control"
              name="from_date"
              value={formData?.from_date ? moment.unix(formData.from_date).format("YYYY-MM-DD") : ""}
              onChange={formHandler}
            />
          </div>
          <div className="date1">
            <input
              type="date"
              id="fdate"
              className='form-control'
              name="to_date"
              value={formData?.to_date ? moment.unix(formData.to_date).format("YYYY-MM-DD") : ""}
              onChange={formHandler}
            />
          </div>
          <div className="date1 filter2">
            <span className='filter filter-btn' onClick={dateFilterHandler}>Filter</span>
            <span className='clear filter-btn' onClick={clearFilter}>Clear</span>
          </div>
        </div>
        <div className="data-filter">
          <div className="show-enteries">
            <span className='show'>Show</span>
            <select name="limit" id="entery-data" onChange={formHandler}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className='Enteries'>Entries</span>
          </div>
          <div className="search-filter">
            <span className='search'>Search</span>
            <input type="text" className='search-data' />
          </div>
        </div>
        {tabObj[tabOpen]}
      </div>
    </>
  );
};

export default AccountStatement;
