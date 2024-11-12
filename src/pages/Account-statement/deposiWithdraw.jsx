
import { Link } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const DepositWithdraw = ({data,isLoading}) => {


  
  return (
   <>

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
              {isLoading ? <Loaderlogo /> :data?.data?.length && data?.data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {moment(parseInt(item.created_at || 0) * 1000).utcOffset("+05:30").format("DD/MM/YYYY HH:mm:a")}
                  </td>
                  <td>{item.description}</td>
                  <td><span style={{ color: 'green' }}>{item?.credit}</span></td>
                  <td><span style={{ color: 'red' }}>{item?.debit}</span></td>
                  <td><span style={{ color: 'red' }}>{item?.commissions?item?.commissions:0}</span></td>
                  <td><span style={{ color: 'red' }}>{item?.match_PL?item?.match_PL:0}</span></td>
        
                  <td><span style={{ color: '#008000' }}>{item?.finalP_L?item?.finalP_L:0}</span></td>
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

export default DepositWithdraw