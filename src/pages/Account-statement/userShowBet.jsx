
import { Link, useParams } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useUserBetHistoryMutation } from '../../services/showBet/showBet';
import { useEffect } from 'react';

const UserShowBet = () => {
  const { sportId, matchId } = useParams()

  const [trigger, { data, isLoading }] = useUserBetHistoryMutation()
  useEffect(() => {
    trigger({

      "match_id": sportId,
      "market_id": matchId

    })
  }, [matchId, sportId])



  function goBack() {
    window.history.back();
  }
  return (
    <>
    <div className="accountStatement-sec">

      <div className='accountStatement-title'>
        <div className="annouce">Show Bet History</div>
        <div className="back-btn back-btn2"><span onClick={goBack}>Back</span></div>
      </div>
      <div className="tablebody">
        <table>
          <thead>
            <tr className='showbethead'>
              <th className='th'>S.no</th>
              <th className='th'>userName</th>
              <th className='th'>Description</th>
              <th className='th'>selectionName</th>
              <th className='th'>Type</th>
              <th className='th'>Odds</th>
              <th className='th'>Stake</th>
              <th className='th'>Date</th>
              <th className='th'>P_L</th>
              <th className='th'>Profit</th>
              <th className='th'>Liability</th>
              <th className='th'>STATUS</th>
              <th className='th'>BetCode</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <Loaderlogo /> : data?.data?.map((item, index) => (
              <tr key={index} style={{background:item?.type == "Back" ?"#72bbef":"#faa9ba"}} className='showbettablehover' >
                <td>{index + 1}</td>
                <td>
                  {item?.user_name}
                  {/* {moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")} */}
                </td>
                <td>{item.description}</td>
                <td><span>{item?.selectionName}</span></td>
                <td><span>{item?.type == 0 ? "Lay" : "Back"}</span></td>
                <td><span >{item?.odds}</span></td>
                <td><span >{item?.Stake}</span></td>

                <td><span >{moment(parseInt(item.Date || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")}</span></td>
                <td><span  style={{ color: item?.P_L > 0 ? "green" : 'red' }}>{item?.P_L}</span></td>
                <td><span style={{ color: item?.profit > 0 ? "green" : 'red' }}>{item?.profit}</span></td>
                <td><span  style={{ color: item?.Liability > 0 ? "green" : 'red' }}>{item?.Liability}</span></td>
                <td><span >{item?.status}</span></td>
                <td> <span>{item?.BetCode.split(",")[1]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="data-list">
          <div className="total-data">Showing{data?.data.length <0 ? "0":"1"} to {data?.data.length}  entries</div>
          <div className="pagination-area"></div>
        </div>
      </div>
    </div>


    </>
  )
}

export default UserShowBet
