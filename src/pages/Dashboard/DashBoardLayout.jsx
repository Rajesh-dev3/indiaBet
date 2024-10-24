import  { useEffect, useState } from 'react'
import "./style.scss"
import Modal from '../../Component/modal'
import EditStakeModal from '../../Component/editStake/EditStakeModal'
import { Outlet, useLocation } from 'react-router-dom'
// import BetPlaceSlip from '../../Component/BetPlaceSlip/BetPlaceSlip'
import BetPlaceSlip2 from '../../Component/BetPlaceSlip2/BetPlaceSlip2'
import Tabs from '../../Component/Tabs/Tabs'
import { useSelector } from 'react-redux'
// import BetPlaceSlip from '../../Component/BetPlaceSlip/BetPlaceSlip'
const DashBoardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const {pathname} = useLocation()

  const urlList = ["event"]
  const checkPathName =  urlList.includes(pathname.split("/")[1])

  const betData = useSelector((state) => state.betData);
const [betModuleOpen, setBetModuleOpen] = useState(false)
  useEffect(() => {
   if(betData?.betData?.odds){
    setBetModuleOpen(true)
   }
  }, [betData?.betData?.odds])
  
  
  // {"is_back":"1","match_id":"33642369","odds":"480","selection_id":7461,"stack":100,"market_id":"1.233736154"}
  return (
    <>
    {isOpen &&
    <Modal Element={<EditStakeModal setIsOpen={setIsOpen}/>} closeModal={closeModal}/>
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
        {checkPathName && 
        <>
        {betModuleOpen ?
        <BetPlaceSlip2 setBetModuleOpen={setBetModuleOpen}/>
      :""}
        <Tabs/>
        {/* <BetPlaceSlip /> */}
        </>
        }
      </div>
    </div>
   </div>
   </>


  )
}

export default DashBoardLayout







