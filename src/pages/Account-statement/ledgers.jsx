
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const Ledger = ({data,isLoading}) => {


  
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
                  <td><span style={{ color: 'red' }}>{item?.commission}</span></td>
                  <td><span style={{ color:item?.match_PL<0?"red": '#008000'  }}>{item?.match_PL}</span></td>
        
                  <td><span style={{ color:item?.finalP_l<0?"red": '#008000' }}>  <span style={{ color: item?.finalP_l < 0 ? "red" : item?.finalP_l > 0 ? '#008000' : 'black' }}>
                    {item?.finalP_l}
                    {item?.finalP_l < 0 && ' ( Dena Hai )'}
                    {item?.finalP_l > 0 && ' ( Lena Hai )'}
                    {item?.finalP_l === 0 && '( Kuch Nahi )'}
                  </span></span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="data-list">
            <div className="total-data">Showing {data?.data?.length <0 ?"0":"1"} to {data?.data?.length} entries</div>
            <div className="pagination-area"></div>
          </div>
        </div>
 

   </>
  )
}

export default Ledger