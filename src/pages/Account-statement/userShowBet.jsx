
import { Link, useParams } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useUserBetHistoryMutation } from '../../services/showBet/showBet';
import { useEffect } from 'react';

const UserShowBet = () => {
const {sportId,matchId} = useParams()

  const [trigger,{data,isLoading}] = useUserBetHistoryMutation()
  useEffect(() => {
    trigger({
        
            "match_id":sportId,
            "market_id":matchId
    
    })
  }, [matchId,sportId])
  
  

function goBack() {
  window.history.back();
}
  return (
   <>
 <div className='accountStatement-title'>
          <div className="annouce">Show Bet History</div>
          <div className="back-btn"><span onClick={goBack}>Back</span></div>
        </div>
<div className="tablebody" style={{marginTop:"30px"}}>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>userName</th>
                <th>Description</th>
                <th>selectionName</th>
                <th>Type</th>
                <th>Odds</th>
                <th>Stake</th>
                <th>Date</th>
                <th>P_L</th>
                <th>Profit</th>
                <th>Liability</th>
                <th>STATUS</th>
                <th>BetCode</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <Loaderlogo /> : data?.data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {item?.user_name}
                    {/* {moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")} */}
                  </td>
                  <td>{item.description}</td>
                  <td><span style={{ color: 'green' }}>{item?.selectionName}</span></td>
                  <td><span style={{ color: 'red' }}>{item?.type == 0 ?"Lay":"Back"}</span></td>
                  <td><span style={{ color:item?.totalAmt>0?"green": 'red' }}>{item?.odds}</span></td>
                  <td><span >{item?.Stake}</span></td>
          
                  <td><span >{moment(parseInt(item.Date || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")}</span></td>
                  <td><span >{item?.P_L}</span></td>
                  <td><span >{item?.profit}</span></td>
                  <td><span >{item?.Liability}</span></td>
                  <td><span >{item?.status}</span></td>
                  <td><Link to={"show-bets"}> <span style={{ color: '#008000' }}>{item?.BetCode.split(",")[1]}</span></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="data-list">
            <div className="total-data">Showing 0 to 0 of 0 entries</div>
            <div className="pagination-area"></div>
          </div>
        </div>
 

   </>
  )
}

export default UserShowBet
