import React, { useEffect, useState } from 'react'
import './style.scss';
import MatchHead from '../../Component/matchstatusodds/Match-Head/MatchHead'
import SportRow from '../../Component/Sports/SportRow';
import { useInplayMutation } from "../../services/inplay/Inplay";


const InPlay = () => {
  const [trigger, {data}] = useInplayMutation();
  // const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    trigger({"limit": 10, "pageno": 1, "sport_id": 0})
  }, [])
  console.log(data?.data , "inplay")


  const cricketData = data?.data?.filter((item)=>item?.SportName == "Cricket")
  const tennisData = data?.data?.filter((item)=>item?.SportName == "Tennis")
  return (
    <>
    <div className="inplay-sec">
{
cricketData &&
    <MatchHead name={"cricket"}/>
}
    {cricketData && cricketData?.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item}/>
  )
})}
   {tennisData && 
    <MatchHead name={"tennis"}/>
   }
    {tennisData && tennisData?.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item}/>
  )
})}
    {/* <SportRow/>
    <SportRow/>
    <MatchHead/>
    <SportRow/> */}
    </div>
    </>
  )
}

export default InPlay