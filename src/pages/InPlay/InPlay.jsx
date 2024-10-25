import React, { useEffect, useState } from 'react'
import './style.scss';
import MatchHead from '../../Component/matchstatusodds/Match-Head/MatchHead'
import SportRow from '../../Component/Sports/SportRow';
import { useInplayMutation } from "../../services/inplay/Inplay";
import Loaderlogo from '../../Component/LoaderLogo/loaderlogo';


const InPlay = () => {
  const [trigger, {data, isLoading}] = useInplayMutation();
  // const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    trigger({"limit": 10, "pageno": 1, "sport_id": 0})
  }, [])
 


  const cricketData = data?.data?.filter((item)=>item?.SportName == "Cricket")
  const tennisData = data?.data?.filter((item)=>item?.SportName == "Tennis")
  const soccerData = data?.data?.filter((item)=>item?.SportName == "Soccer")
  return (
    <>
    <div className="inplay-sec">
{
cricketData &&
    <MatchHead name={"cricket"}/>
}
    {isLoading ? <Loaderlogo />: cricketData && cricketData?.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item} active={true}/>
  )
})}
   {tennisData && 
    <MatchHead name={"tennis"}/>
   }
    {isLoading ? <Loaderlogo />: tennisData && tennisData?.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item} active={true}/>
  )
})}
   {soccerData && 
    <MatchHead name={"Soccer"}/>
   }
    {isLoading ? <Loaderlogo />: soccerData && soccerData?.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item} active={true}/>
  )
})}
 
    </div>
    </>
  )
}

export default InPlay