import React, { useEffect, useState } from 'react';
import './style.scss';
import Pagination from '../../Component/Pagination/Pagination';
import { useBethistoryMutation } from '../../services/bethistory/betHistory';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useGameNameMutation } from '../../services/sport/gameName';

const BetHistory = () => {
  const [trig , datas]= useGameNameMutation()
const [form , setForm] = useState({
   limit: 50, pageno: 1 
})
useEffect(()=>{
  trig({ limit: 50, pageno: 1 })
},[])
console.log(datas?.data?.data , "number")



  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['All', 'Cricket', 'Tennis', 'Soccer', 'Fancy'];
  const [searchTerm, setSearchTerm] = useState('');

  const [trigger, { data, isLoading }] = useBethistoryMutation();

  const [formData, setFormData] = useState({
    betType: 'P',
    from_date: moment().startOf('day').subtract(10, 'days').unix(),
    limit: '10',
    market_id: '0',
    match_id: '0',
    pageno: '1',
    sport_id: activeTab,
    to_date: moment().startOf('day').unix(),
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'from_date' || name === 'to_date' ? moment(value).startOf('day').unix() : value,
    }));
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const dateFilterHandler = (e) => {
    e.preventDefault();
    trigger(formData);
  };

  useEffect(() => {
    trigger(formData);
  }, [activeTab]);

  const clearFilter = () => {
    const initialData = {
      betType: 'P',
      from_date: moment().startOf('day').subtract(10, 'days').unix(),
      limit: '10',
      market_id: '0',
      match_id: '0',
      pageno: '1',
      sport_id: '0',
      to_date: moment().startOf('day').unix(),
    };
    setFormData(initialData);
    trigger(initialData);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered data based on search term, checking multiple fields for any match
  const filteredData = data?.data?.filter((item) =>
    searchTerm === '' ||
    item.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.matchName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.marketName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.marketType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="BetHistory-sec">
        <div className="BetHistory-sec-title">Bet History</div>

        <div className="date-filters">
          <div className="date1">
            <input
              type="date"
              id="fdate"
              className="form-control"
              name="from_date"
              value={formData?.from_date ? moment.unix(formData.from_date).format('YYYY-MM-DD') : ''}
              onChange={formHandler}
            />
          </div>
          <div className="date1">
            <input
              type="date"
              id="fdate"
              className="form-control"
              name="to_date"
              value={formData?.to_date ? moment.unix(formData.to_date).format('YYYY-MM-DD') : ''}
              onChange={formHandler}
            />
          </div>
          <div className="date1">
            <select name="betType" id="gameselect" className="form-control" onChange={formHandler}>
              <option value="10">Open</option>
              <option value="25">Settled</option>
            </select>
          </div>
          <div className="date1 filter2">
            <span className="filter filter-btn" onClick={dateFilterHandler}>
              <span className="icon-filter">
                <i className="fa fa-filter"></i>
              </span>{' '}
              Filter
            </span>
            <span className="clear filter-btn" onClick={clearFilter}>
              <span className="icon-filter">
                <i className="fa fa-eraser"></i>
              </span>{' '}
              Clear
            </span>
          </div>
        </div>

        <div className="betsalltab">
          <ul className="bet-link-tabs">
              <li
                
                className={`bet-link ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => {
                  setFormData((prev)=>{
                    return{
                      ...prev,sport_id:0
                    }
                  })
                  setActiveTab(0)}}
              >
                <a href="#">All</a>
              </li>
            {datas?.data?.data?.map((item ,index) => (
              <li
                key={index}
                className={`bet-link ${activeTab === item?.sport_id ? 'active' : ''}`}
                onClick={() =>{
                  setFormData((prev)=>{
                    return{
                      ...prev,sport_id:item?.sport_id
                    }
                  })
                  setActiveTab(item?.sport_id)}}
              >
                <a href="#">{item?.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="data-filter">
          <div className="show-enteries">
            <span className="show">Show</span>
            <select name="limit" id="entery-data" onChange={formHandler}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="Enteries">Entries</span>
          </div>
          <div className="search-filter">
            <span className="search">Search</span>
            <input
              type="text"
              className="search-data"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="tablebody">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Client</th>
                <th>Description</th>
                <th>Selection</th>
                <th>Type</th>
                <th>Odds</th>
                <th>Stack</th>
                <th>Date</th>
                <th>P_L</th>
                <th>Profit</th>
                <th>Liability</th>
                <th>Bet type</th>
                <th>Status</th>
                <th>IP</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loaderlogo />
              ) : (
                filteredData?.map((item, index) => (
                  <tr
                    key={index}
                    className="tablebethistory"
                    style={{ background: item?.Type === 'Back' ? '#72bbef' : '#faa9ba' }}
                  >
                    <td>{index + 1}</td>
                    <td>{item.user_name}</td>
                    <td>{item.matchName}</td>
                    <td>{item.marketName}</td>
                    <td>{item.marketType}</td>
                    <td>{item.Odds}</td>
                    <td>{item.Stack}</td>
                    <td>
                      {moment(parseInt(item?.Placed) * 1000)
                        .utcOffset('+05:30')
                        .format('DD/MM/YYYY HH:mm:a')}
                    </td>
                    <td>
                      <span style={{ color: item.PotentialProfit < 0 ? 'red' : 'green' }}>
                        {item.PotentialProfit}
                      </span>
                    </td>
                    <td>{item.Stack}</td>
                    <td>{item.Size}</td>
                    <td>{item.Type}</td>
                    <td>{/* Add Status here if available in data */}</td>
                    <td>{item.ipAddress?.split(',')[0]}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="data-list">
            <div className="total-data">
              Showing {filteredData?.length > 0 ? '1' : '0'} to {filteredData?.length} entries
            </div>
            <div className="pagination-area">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetHistory;
