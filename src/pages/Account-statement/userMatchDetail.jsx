import { Link } from 'react-router-dom';
import './style.scss';
import { useEffect, useState } from 'react';
import UserMatchDetailTable from './userMatchDetailTable';

const UserMatchDetail = () => {
  // Sample data that you might be fetching or working with
  const [data, setData] = useState([
    { id: 1, name: 'Match 1', description: 'Match 1 details' },
    { id: 2, name: 'Match 2', description: 'Match 2 details' },
    { id: 3, name: 'Match 3', description: 'Match 3 details' },
  ]);

  const [searchQuery, setSearchQuery] = useState(''); // Track the search query

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter data based on the search query
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabObj = {
    0: <UserMatchDetailTable data={filteredData} isLoading={false} />, // Pass filtered data to the table
  };

  return (
    <>
      <div className="accountStatement-sec">
        <div className='accountStatement-title'>
          <div className="annouce">Account Statement</div>
          <div className="back-btn" ><Link to={"/AccountStatement"}><span style={{background:'#e2a521', color:"black"}}>Back</span></Link></div>
        </div>
    

        {/* Render the filtered data table */}
        {tabObj[0]}
      </div>
    </>
  );
};

export default UserMatchDetail;
