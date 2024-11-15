import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import Pagination from '../../Component/Pagination/Pagination'
import { useProfitnlossMutation } from '../../services/profitnloss/profitnloss'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo'

const ProfitLoss = () => {
  const [trigger, { data, isLoading }] = useProfitnlossMutation();

  const [formData, setFormData] = useState({
    betType: "P",
    from_date: moment().startOf('day').subtract(10, 'days').unix(),
    limit: '15',
    match_id: "0",
    pageno: '1',
    sport_id: "0",
    to_date: moment().startOf('day').unix(),
  });

  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredData, setFilteredData] = useState(data?.data || []); // State to store filtered data

  // Handle form input change
  const formHandler = (e) => {
    const { name, value } = e.target;
    if (name === "from_date" || name === "to_date") {
      setFormData((prev) => {
        return {
          ...prev, [name]: moment(value).startOf('day').unix()
        }
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev, [name]: value
        }
      });
    }
  }

  // Date filter handler
  const dateFilterHandler = (e) => {
    e.preventDefault();
    trigger(formData); // Dispatch the trigger
  };

  // Clear filter handler
  const clearFilter = () => {
    const initialData = {
      betType: "P",
      from_date: moment().startOf('day').subtract(10, 'days').unix(),
      limit: '15',
      match_id: "0",
      pageno: '1',
      sport_id: "0",
      to_date: moment().startOf('day').unix(),
    };
    setFormData(initialData);
    trigger(initialData);
    setSearchQuery(''); // Clear search query when filter is reset
  };

  // Search filter handler
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Filter data based on search query
  useEffect(() => {
    if (data && data.data) {
      const filtered = data.data.filter((item) => {
        // Search across match name and series name
        return (
          item.matchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.seriesName.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  }, [searchQuery, data]); // Re-run whenever search query or data changes

  // Initialize data on mount
  useEffect(() => {
    trigger(formData);
  }, []);

  return (
    <>
      <div className="ProfitLoss-sec">
        <div className='ProfitLoss-sec-title'>
          Profit Loss Listing
        </div>

        <div className="date-filters">
          <div className="date1">
            <select name="betType" id="gameselect" className='form-control' onChange={formHandler}>
              <option value="10">All</option>
              <option value="25">Cricket</option>
              <option value="50">Soccer</option>
              <option value="100">Tennis</option>
              <option value="100">Fancy</option>
            </select>
          </div>
          <div className="date1">
            <input type="date" id="fdate" className='form-control' name="from_date" value={formData?.from_date ? moment.unix(formData.from_date).format("YYYY-MM-DD") : ""} onChange={formHandler} />
          </div>
          <div className="date1">
            <input type="date" id="fdate" className='form-control' name="to_date" value={formData?.to_date ? moment.unix(formData.to_date).format("YYYY-MM-DD") : ""} onChange={formHandler} />
          </div>
          <div className="date1 filter2">
            <span className='filter filter-btn' onClick={dateFilterHandler}><span className='icon-filter'><i className="fa fa-filter"></i></span> Filter</span>
            <span className='clear filter-btn' onClick={clearFilter}><span className='icon-filter'><i className="fa fa-eraser"></i></span> Clear</span>
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
            <span className='Enteries'>Enteries</span>
          </div>
          <div className="search-filter">
            <span className='search'>Search</span>
            <input
              type="text"
              className='search-data'
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="tablebody">
          <table>
            <thead>
              <tr>
                <th>S.no.</th>
                <th>Event Name</th>
                <th>Market</th>
                <th>P_L</th>
                <th>Commission</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <Loaderlogo /> : filteredData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.matchName}</td>
                    <td>{item.seriesName}</td>
                    <td><span style={{ color: item.userPL < 0 ? 'red' : 'green' }}>{item.userPL}</span></td>
                    <td style={{color:'red'}}>0</td>
                    <td>{moment(parseInt(item?.matchDate) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:ss")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="dat-list">
            <div className="total-data">Showing {filteredData.length <0 ?"0":"1"} to {filteredData.length} Entries {filteredData.length} </div>
            <div className="pagination-area">
              <Pagination />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProfitLoss;
