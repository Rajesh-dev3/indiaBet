
import { Link } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const Statement = ({data,isLoading}) => {


  
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
                  <td> <Link to={`/user-matchDetail/${item?.match_id}/${item?.market}`}>
                    {item.description}
                    </Link>
                    </td>
                  <td><span style={{ color: 'green' }}>{item.amount > 0 ? item.amount : 0}</span></td>
                  <td><span style={{ color: 'red' }}>{item.amount < 0 ? item.amount : 0}</span></td>
                  <td><span style={{ color: 'red' }}>0</span></td>
                  <td>-</td>
                  <td><span style={{ color: '#008000' }}>{item.available_balance}</span></td>
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

export default Statement