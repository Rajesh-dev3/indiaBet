import { Link, useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useShowBetMutation } from '../../services/showBet/showBet';
import { useEffect, useState } from 'react';

const UserMatchDetailTable = () => {
  const { sportId, matchId } = useParams();
  const [trigger, { data, isLoading }] = useShowBetMutation();

  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredData, setFilteredData] = useState(data?.data?.data || []); // State to store filtered data

  const nav = useNavigate();

  // Trigger API call on component mount and when matchId changes
  useEffect(() => {
    trigger({
      matchId: sportId
    });
  }, [matchId]);

  // Update filtered data whenever the search query or fetched data changes
  useEffect(() => {
    if (data && data.data && searchQuery) {
      const filtered = data.data.data.filter((item) => {
        // Filter data based on match name, market name, and PnL
        return (
          item.matchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.marketName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item?.PnL && item?.PnL.toString().includes(searchQuery))
        );
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data?.data?.data || []);
    }
  }, [searchQuery, data]); // Re-run whenever searchQuery or data changes

  // Search input change handler
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Navigate to detailed view page
  const navHandler = (match_id, marketId) => {
    nav(`/show-bet/${match_id}/${marketId}`);
  };

  return (
    <>
      <div className="search-filter">
        <input
          type="text"
          className="search-data"
          placeholder="Search by Match or Market"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="tablebody tbodytable2" >
        <table  style={{marginTop:'1px'}}>
          <thead>
            <tr className="showbethead">
              <th className="th">S.no</th>
              <th className="th">Event Name</th>
              <th className="th">Market</th>
              <th className="th">P_L</th>
              <th className="th">Comm</th>
              <th className="th">Total</th>
              <th className="th">Date</th>
              <th className="th">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Loaderlogo /> : filteredData?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.matchName}</td>
                <td>{item.marketName}</td>
                <td><span style={{ color: 'green' }}>{item?.PnL}</span></td>
                <td><span style={{ color: 'red' }}>{0}</span></td>
                <td><span style={{ color: item?.totalAmt > 0 ? 'green' : 'red' }}>{item?.totalAmt}</span></td>
                <td><span>{moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")}</span></td>
                <td>
                  <span className="showbet-btn" style={{ color: '#4083a9', cursor: 'pointer' }} onClick={() => navHandler(item?.matchId, item?.marketId ? item?.marketId : item?.fancyId)}>Show Bets</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="data-list">
          <div className="total-data">Showing {filteredData.length} entries</div>
          <div className="pagination-area">
            {/* Add Pagination component here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMatchDetailTable;
