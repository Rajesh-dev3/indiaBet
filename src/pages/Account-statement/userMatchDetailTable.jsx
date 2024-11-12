
import { Link, useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';
import { useShowBetMutation } from '../../services/showBet/showBet';
import { useEffect } from 'react';

const UserMatchDetailTable = () => {
const {sportId,matchId} = useParams()

  const [trigger,{data,isLoading}] = useShowBetMutation()
  useEffect(() => {
    trigger({
        matchId:sportId
    })
  }, [matchId])
  
const nav = useNavigate()
const navHandler = (match_id,marketId)=>{
  nav(`/show-bet/${match_id}/${marketId}`)
}

  return (
   <>

<div className="tablebody" style={{marginTop:"30px"}}>
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Event Name</th>
                <th>Market</th>
                <th>P_L</th>
                <th>Comm</th>
                <th>Total</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <Loaderlogo /> : data?.data?.data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {item?.matchName}
                    {/* {moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")} */}
                  </td>
                  <td>{item.marketName}</td>
                  <td><span style={{ color: 'green' }}>{item?.PnL}</span></td>
                  <td><span style={{ color: 'red' }}>{0}</span></td>
                  <td><span style={{ color:item?.totalAmt>0?"green": 'red' }}>{item?.totalAmt}</span></td>
                  <td><span >{moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")}</span></td>
        
                  <td> <span style={{ color: '#008000' }} onClick={()=>navHandler(item?.matchId,item?.marketId?item?.marketId:item?.fancyId)}>Show Bets</span></td>
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

export default UserMatchDetailTable
