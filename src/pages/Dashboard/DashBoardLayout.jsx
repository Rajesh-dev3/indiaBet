import  { useState } from 'react'
import "./style.scss"
import Modal from '../../Component/modal'
import EditStakeModal from '../../Component/editStake/EditStakeModal'
import { Outlet } from 'react-router-dom'
// import BetPlaceSlip from '../../Component/BetPlaceSlip/BetPlaceSlip'
import BetPlaceSlip2 from '../../Component/BetPlaceSlip2/BetPlaceSlip2'
import Tabs from '../../Component/Tabs/Tabs'
const DashBoardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
    {isOpen &&
    <Modal Element={<EditStakeModal/>} closeModal={closeModal}/>
    }
   <div className="dashboard-sec">

    <div className="dashboard-left">
   <Outlet/>
  
    </div>
    <div className="dashboard-right">
      <div className="panel-heading bhead hidden-xs">
        <span>Bet Slip</span>
        <p className='editstake'  onClick={openModal}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Stake</p>
      </div>
      <div className="betslip-sec">
        {/* <BetPlaceSlip/> */}
        <BetPlaceSlip2/>
        <Tabs/>
      </div>
    </div>
   </div>
   </>


  )
}

export default DashBoardLayout







