import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const MatchProfit = ({ data, isLoading }) => {
  // State to store the search term
  const [searchTerm, setSearchTerm] = useState('');
  
  // State to store filtered data
  const [filteredData, setFilteredData] = useState(data?.data || []);

  // Update filtered data based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData(data?.data || []);
    } else {
      const filtered = data?.data?.filter(item => 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data?.data]); // Dependency on searchTerm and data

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="data-filter">
        <div className="show-enteries">
          <span className='show'>Show</span>
          <select name="limit" id="entery-data">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span className='Enteries'>Entries</span>
        </div>
        <div className="search-filter">
          <span className='search'>Search</span>
          <input
            type="text"
            className='search-data'
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
              <th>S.no</th>
              <th>Date</th>
              <th>Description</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Commission</th>
              <th>Match P&L</th>
              <th>Final P&L</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <Loaderlogo />
            ) : (
              filteredData?.length > 0 &&
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {moment(parseInt(item.created_at || 0) * 1000)
                      .utcOffset('+05:30')
                      .format('DD/MM/YYYY HH:mm:a')}
                  </td>
                  <td>
                    <Link to={`/user-matchDetail/${item?.match_id}/${item?.market}`}>
                      {item.description}
                    </Link>
                  </td>
                  <td>
                    <span style={{ color: 'green' }}>{item?.credit}</span>
                  </td>
                  <td>
                    <span style={{ color: 'red' }}>{item?.debit}</span>
                  </td>
                  <td>
                    <span style={{ color: 'red' }}>{item?.commissions}</span>
                  </td>
                  <td>
                    <span style={{ color: 'red' }}>{item?.match_PL}</span>
                  </td>
                  <td>
                    <span style={{ color: '#008000' }}>{item?.finalP_L}</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="data-list">
          <div className="total-data">
            Showing {filteredData?.length || 0} to {data?.data?.length} entries
          </div>
          <div className="pagination-area"></div>
        </div>
      </div>
    </>
  );
};

export default MatchProfit;
