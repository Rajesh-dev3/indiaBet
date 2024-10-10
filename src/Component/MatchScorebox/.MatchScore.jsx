import React from 'react'
import './style.scss'
import { ball, bat } from '../../assets/Index'
const MatchScore = () => {
  return (
    <>
    <div className='MatchScore'>
        <div className="scoretitle">
            <div className="titleName">New South Wales v South Australia</div>
            <div className="matches-btn">
                <button className="matchlist">Matches</button>
            </div>
        </div>
        <div className="scorebox">
        <div className="overlay">
            <div className="team-match">
                <div className="team team1"><p>New South Wales

</p> <span className='balls'> :-0/0(0.0)
</span></div>
                <div className="team team2"><p>South Australia

</p> <span className='balls'> :-0/0(0.0)
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
                    <li className="runs">1</li>
                    <li className="runs">2</li>
                    <li className="runs">3</li>
                    <li className="runs">4</li>
                    <li className="runs">5</li>
                    <li className="runs">6</li>
                </ul>
            </div>
            <div className="run-right">Match Abandoned</div>
            </div> 
<div className="wlc">Welcome</div>
            </div>
        </div>
      

    </div>
    </>
  )
}

export default MatchScore