import React from 'react'
import StatusOdds from '../../Component/matchstatusodds/StatusOdds'
import OddsHeading from '../../Component/matchstatusodds/Odds/OddsHeading/OddsHeading'
import OddsRow from '../../Component/matchstatusodds/Odds/Oddsrow/OddsRow'
import FancyHead from '../../Component/matchstatusodds/Odds/FancyHead/FancyHead'
import FancyBox from '../../Component/matchstatusodds/Odds/Fancybox/FancyBox'
import './style.scss'
import MatchScore from '../../Component/MatchScorebox/.MatchScore'
import { useParams } from 'react-router-dom'

const Event = () => {
  const {sportId,matchId} = useParams()
  console.log(sportId,matchId)
  return (
    <>
    <div className="event">
<MatchScore/>
    <StatusOdds/>
<OddsHeading/>
<OddsRow/>
<OddsRow/>

<FancyHead />
<FancyBox/>
<FancyBox/>
<FancyBox/>
    </div>
    </>
  )
}

export default Event