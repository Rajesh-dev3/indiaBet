import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import './style.scss';

const Statement = ({ data, isLoading }) => {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter data based on the search query
  const filteredData = () => {
    if (!searchQuery) return data?.data || []; // Return unfiltered data if no search query
    return data?.data?.filter((item) =>
      item?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.amount?.toString().includes(searchQuery) ||
      item?.available_balance?.toString().includes(searchQuery)
    );
  };

  // Function to replace '->' with '-'
  const formatDescription = (description) => {
    if (!description) return '';
    return description
    .replace(/->/g, '-')   // Replace '->' with '-'
    .replace(/:/g, '')     // Remove ':'
    .replace(/[()]/g, '')  // Remove parentheses ()
    .replace(/\[|\]/g, '');
  };

  const [isIphone, setIsIphone] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const iphone = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const android = /Android/.test(navigator.userAgent);
    setIsIphone(iphone);
    setIsAndroid(android);
  }, []);
  console.log(isIphone,isAndroid)

  return (
    <>
      <div className="data-filter">
        <div className="show-enteries">
          <span className="show">Show</span>
          <select name="limit" id="entery-data">
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
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="tablebody2">
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
              filteredData().length > 0 ? (
                filteredData().map((item, index) => (
                  <tr key={index+item.amount}>
                    <td style={{fontSize:"11px"}}>{index + 1}</td>
                    <td style={{fontSize:"11px"}}>
                      {moment(parseInt(item.created_at || 0) * 1000)
                        .utcOffset('+05:30')
                        .format('DD/MM/YYYY HH:mm:a')}
                    </td>
                    <td className="disc-n">
                      <Link to={`/user-matchDetail/${item?.match_id}/${item?.market}`}>
                       <p style={{margin:0,padding:0,fontSize:"12px"}}>
                         {item?.description }
                        </p>
                        {/* afdaf */}
                      </Link>
                    </td>
                    <td style={{fontSize:"11px"}}>
                      <span style={{ color: 'green' }}>
                        {item.amount > 0 ? item.amount : 0}
                      </span>
                    </td>
                    <td style={{fontSize:"11px"}}>
                      <span style={{ color: 'red' }}>
                        {item.amount < 0 ? item.amount : 0}
                      </span>
                    </td>
                    <td style={{fontSize:"11px"}}>
                      <span style={{ color: 'red' }}>0</span>
                    </td>
                    <td>-</td>
                    <td>
                      <span style={{ color: '#008000' }}>
                        {item.available_balance}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No matching data found</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="data-list">
          <div className="total-data">
            Showing {filteredData().length} to {data?.data?.length} entries
          </div>
          <div className="pagination-area"></div>
        </div>
      </div>
    </>
  );
};

export default Statement;
