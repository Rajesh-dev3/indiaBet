
import { Link } from 'react-router-dom'
import moment from 'moment';
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';

const Ledgers = () => {


  
  return (
   <>

<table>
  <thead>

  <tr>
    <th>S.no</th>
    <th>Date</th>
    <th>Description	</th>
    <th>Credit</th>
    <th>Debit</th>
    <th>Commission</th>
    <th>Match P&L	</th>
    <th>Final P&L
    </th>

  </tr>
  </thead>
  <tbody>


  <tr>
    <td></td>
    {/* <td>{
                moment(
                  parseInt(
                    item && item.created_at ? item.created_at : null,
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("DD/MM/YYYY HH:mm:a")}</td> */}
    <td>0</td>
    <td >  <span style={{ color:  'green'  }}>0</span></td>
    <td >  <span style={{ color: 'red' }}>0</span></td>
    <td >
       <span style={{color:'red'}}>0</span> </td>
    <td>-</td>
    <td><span style={{color:'#008000'}}>0</span></td>

  </tr>

  </tbody>
  </table>
 

   </>
  )
}

export default Ledgers