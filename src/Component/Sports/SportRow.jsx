import React from 'react'
import './style.scss'
import { gameplayer } from '../../assets/Index'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
const SportRow = ({item,active}) => {
  return (
       <NavLink to={`/event/${item?.sport_id}/${item?.match_id}` }>
    <div className='sport-sec' >
        <h4 className='game-name'> {item?.seriesName}</h4>
        <NavLink to={`/event/${item?.sport_id}/${item?.match_id}` }>
        <div style={{display:"flex"}}>
        <div className="game">

        <div className="sport_name">
            <span className='player-top'>
            <img src={gameplayer} alt="player" /><span className='sportname'>
            {
                moment(
                  parseInt(
                    item?.start_date
                  ) * 1000,
                )
                  .utcOffset("+05:30")
                  .format("YYYY-MM-DD HH:mm:ss")}</span>

            </span>
            <span className='player-top player-bottom'>
            <StarRoundedIcon/><span className='sportname time' style={{color:"#2789ce", fontSize:"12px",  whiteSpace: "nowrap",
  width: "140px",
  overflow: "hidden",
  textOverflow: "ellipsis", 
  }}> {item?.name}</span>

            </span>
        </div>
        <div className="match_status">
        
        {active? <span className='blinking-inplay'>In Play</span>
         : <span className='going-inplay'>Going In-play</span>}

        </div>
        </div>
        <div className="match_odds_front">
            <span className="back-cell">{item?.runner_json?.[0]?.ex?.availableToBack?.[0]?.price}</span>
            <span className="lay-cell">{item?.runner_json?.[0]?.ex?.availableToLay?.[0]?.price}</span>
        </div>
        </div>
        </NavLink>
    </div>
        </NavLink>
  )
}

export default SportRow