import React from 'react'
import './style.scss'
import { useScoreBoardQuery } from '../../services/Scoreboard/scoreboard'
import { ball, bat } from '../../assets/Index'
const MatchScore = (odddata, date, matchId) => {
    const {data} = useScoreBoardQuery(odddata?.matchId,{
        pollingInterval:1000
      })
      console.log(data, "data")

      
  const calculateOvers = (balls) => {
    // Calculate the number of overs
    var overs = Math.floor(balls / 6) + ((balls % 6) / 10);
    return overs;
  }
  const two = data?.data?.length && data?.data[2]
  const zero = data?.data?.length && data?.data[0]


  const scoreColor = {
    6:"purple",
    4:"green",
    w:"red",
  }
  return (
    <>
    <div className='MatchScore'>
        <div className="scoretitle">
            <div className="titleName"> {odddata?.odddata?.MatchDetails?.name} </div>
            <div className="matches-btn">
                <button className="matchlist">Matches</button>
            </div>
        </div>
        <div className="scorebox">
        <div className="overlay">
            <div className="team-match">
                <div className="team team1"> <span className='countrypl'>{two?.t1 || 0}</span><span  className='balls'>:-{two?.score || 0} -{two?.wicket || ""} ({two?.ballsdone? calculateOvers(two?.ballsdone):0})</span> 

</div>
                <div className="team team2"><span className='countrypl'>{two?.t2 || 0}</span> <span className='balls'>:-{two?.score2 || 0}-{two?.wicket2 || ""}({two?.ballsdone2? calculateOvers(two?.ballsdone2):"0.0"})
</span></div>
            </div>
           <div className="runs-ball">
            <div className="run-left">
                <ul className="player">
                    <li className='playerid'><img src={bat} alt="asas" /> <span className='playername'>N/A</span><span className='score'>0</span></li>
                    <li className='playerid'><img src={bat} alt="asas" /> <span className='playername'>N/A</span><span className='score'>0</span></li>
                    
                </ul>
                <ul className="overs">
                    <li className="runs-img"><img src={ball} alt="ball" /></li>
                    {/* <li className="runs">  */}
                        {zero?.recentBalls?.[0]?.length ? zero?.recentBalls?.[0]?.map((item,i)=>  <li key={item+i}  className="runs" style={{background:scoreColor[item]}}>{item}</li>): <li  className="runs">NA</li>}
                    {/* </li> */}
                    {/* <li className="runs">2</li>
                    <li className="runs">3</li>
                    <li className="runs">4</li>
                    <li className="runs">5</li>
                    <li className="runs">6</li> */}
                </ul>
            </div>
            <div className="run-right"><span>{zero?.cb}</span></div>
            </div> 
<div className="wlc">Welcome</div>
            </div>
        </div>
      

    </div>
    </>
  )
}

export default MatchScore