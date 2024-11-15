import { Link, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useShowBetMutation } from '../../services/showBet/showBet';
import { useEffect, useState } from 'react';

const UserMatchDetailTable = () => {
  const { sportId, matchId } = useParams();
  const [trigger, { data, isLoading }] = useShowBetMutation();

  const nav = useNavigate();

  // State to store search query
  const [searchQuery, setSearchQuery] = useState('');

  // Trigger API call on component mount and when matchId changes
  useEffect(() => {
    trigger({
      matchId: sportId,
    });
  }, [matchId]);

  // Filter data based on search query
  const filteredData = data?.data?.data?.filter(item => {
    return (
      item?.matchName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item?.marketName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Navigate to detailed view page
  const navHandler = (match_id, marketId) => {
    nav(`/show-bet/${match_id}/${marketId}`);
  };

  return (
    <>
      <div className="data-filter2 ">
        <div className="search-filter2">
          <span className="search2">Search</span>
          <input
            type="text"
            className="search-data2"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="tablebody tbodytable2">
        <table style={{ marginTop: '1px' }}>
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
            {isLoading ? (
              <Loaderlogo />
            ) : (
              filteredData?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.matchName}</td>
                  <td>{item.marketName}</td>
                  <td>
                    <span style={{ color: 'green' }}>{item?.PnL}</span>
                  </td>
                  <td>
                    <span style={{ color: 'red' }}>{0}</span>
                  </td>
                  <td>
                    <span style={{ color: item?.totalAmt > 0 ? 'green' : 'red' }}>
                      {item?.totalAmt}
                    </span>
                  </td>
                  <td>
                    <span>
                      {moment(parseInt(item.created_at || 0) * 1000)
                        .utcOffset('+05:30')
                        .format('DD/MM/YYYY HH:mm:a')}
                    </span>
                  </td>
                  <td>
                    <span
                      className="showbet-btn"
                      style={{ color: '#4083a9', cursor: 'pointer' }}
                      onClick={() =>
                        navHandler(item?.matchId, item?.marketId ? item?.marketId : item?.fancyId)
                      }
                    >
                      Show Bets
                    </span>
                  </td>
                </tr>
              ))
            )}
            <tr className="showbethead">
              <td className="td" style={{ borderRight: 'none' }}>
                Total Pnl
              </td>
              <td className="td" style={{ borderRight: 'none' }}></td>
              <td className="td"></td>
              <td
                className="td"
                style={{ color: data?.data?.totalPnL < 0 ? 'red' : 'green' }}
              >
                {data?.data?.totalPnL}
              </td>
              <td className="td" style={{ color: 'red' }}>
                0
              </td>
              <td
                className="td"
                style={{ color: data?.data?.totalPnL < 0 ? 'red' : 'green' }}
              >
                {data?.data?.totalPnL}
              </td>
              <td className="td" style={{ borderRight: 'none' }}></td>
              <td className="td" style={{ borderLeft: 'none' }}></td>
            </tr>
          </tbody>
        </table>
        <div className="data-list">
          <div className="total-data">
            Showing {filteredData?.length} entries
          </div>
          <div className="pagination-area">
            {/* Add Pagination component here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMatchDetailTable;
