import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SportRow from "../../Component/Sports/SportRow";
import SwiperSlider from "../../Component/SwiperSlider/SwiperSlider";
import { useEventgameMutation } from "../../services/eventGame/gameEvent";
import { useGameNameMutation } from "../../services/sport/gameName";
// import { useEffect } from "react";

const Dashboard = () => {
  const [trigger, {data,isLoading}] = useEventgameMutation();
const [sportId, setSportId] = useState(4)
  useEffect(() => {
    trigger({"limit":50,"pageno":1,"sport_id":String(sportId),"series_id":0,"type":"home"})
  }, [sportId])
  

 const [trigge,{data:gameName}] = useGameNameMutation()

 useEffect(() => {
  trigge({"limit":50,"pageno":1})
 }, [])

 const checkMatchLength =data?.data?.UpCommingMatches && [...data?.data?.InplayMatches,...data?.data?.UpCommingMatches]

  return (
    <div>
      <div className="slider-wrapper">

        <SwiperSlider/>
      </div>

      <div className="nav-tabs">
<ul className="nav-list">
  {gameName?.data?.map((game, index) =>{
    const {name,sport_id} = game
    return(
      <li
      className={`list-item ${sportId === sport_id ? 'active' : ''}`}
      key={sport_id+index}
      onClick={() => setSportId(sport_id)}
    >
      <Link to={"#"}>
        <span>{name}</span> 
        {/* <span className={`game-no ${index === 0 ? 'bg-clr' : ''}`}>{checkMatchLength?.length}</span> */}
      </Link>
    </li>
    )
  })}
</ul>
</div>
<div className="game-area">
{data?.data?.InplayMatches.map((item, i)=>{
              return(
<SportRow  key={i} index={i} item={item} active={true}/>
  )
})}
{isLoading ? "Loading": data?.data?.UpCommingMatches?.length ?
data?.data?.UpCommingMatches.map((item, i)=>{
  return(
    <SportRow  key={i} index={i} item={item} active={false}/>
  )
}):"Nodata"
}
</div>
{/* <SportRow/> */}
    </div>
  )
}

export default Dashboard