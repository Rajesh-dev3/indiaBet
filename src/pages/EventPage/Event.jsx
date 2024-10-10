import { useEffect, useState } from 'react'
import StatusOdds from '../../Component/matchstatusodds/StatusOdds'
import OddsHeading from '../../Component/matchstatusodds/Odds/OddsHeading/OddsHeading'
import OddsRow from '../../Component/matchstatusodds/Odds/Oddsrow/OddsRow'
import FancyHead from '../../Component/matchstatusodds/Odds/FancyHead/FancyHead'
import FancyBox from '../../Component/matchstatusodds/Odds/Fancybox/FancyBox'
import './style.scss'
import MatchScore from '../../Component/MatchScorebox/.MatchScore'
import { useParams } from 'react-router-dom'
import { useEventDetailMutation } from '../../services/eventDetail/eventDetail'
import { useGetEventSessionMutation } from '../../services/fancy/Fancy'

const Event = () => {
  const [odddata, setOdddata] = useState();
  const [prevState, setPrevState] = useState();
  const [prevFancy, setPrevFancy] = useState()
  const [fancyData, setFancyData] = useState()
  const { sportId, matchId } = useParams()
  const [trigger, { data }] = useEventDetailMutation()
  const [trigg, { data: fancy }] = useGetEventSessionMutation()



  useEffect(() => {

    trigger({ "match_id": matchId, "sport_id": sportId })
    trigg({ match_id: matchId })
    const timer = setInterval(() => {
      trigger({ "match_id": matchId, "sport_id": sportId })
      trigg({ match_id: matchId })
    }, 3000);
    return () => clearInterval(timer);
  }, [sportId, matchId])


  useEffect(() => {
    if (data?.message === "Success") {
      if (!odddata) {
        setPrevState(data?.data);
      } else {
        setPrevState(odddata);
      }
      setOdddata(data?.data);
    }
    if (fancy?.message === "Success") {
      if (!fancyData) {
        setPrevFancy(fancy?.data);
      } else {
        setPrevFancy(fancyData);
      }
      setFancyData(fancy?.data);
    }

  }, [data, fancy])

  const normalFancy = fancyData?.filter((item) => item?.fancy_category === "normal")
  const overbyover = fancyData?.filter((item) => item?.fancy_category === "overbyover")
  const ballbyball = fancyData?.filter((item) => item?.fancy_category === "ballbyball")

      ///prev fancy
      const prevNormalFancy = prevFancy?.filter((item) => item?.fancy_category === "normal")
      const prevOverbyover = prevFancy?.filter((item) => item?.fancy_category === "overbyover")
      const prevBallbyball = prevFancy?.filter((item) => item?.fancy_category === "ballbyball")
  return (
    <>
      <div className="event">
        <MatchScore />
        <StatusOdds />
        <div style={{ marginTop: "10px" }}>

          <OddsHeading max={odddata?.MatchDetails?.marketMaxStack} min={odddata?.MatchDetails?.marketMinStack} />
          {odddata?.MatchDetails?.runner_json?.map((item,i) => {
            return (

              <OddsRow data={item} key={item?.selectionName} prevOdd={prevState?.MatchDetails?.runner_json[i]}/>
            )
          })}
        </div >
        <div style={{ marginTop: "10px" }}>

          <OddsHeading max={odddata?.BookerMakerMarket?.marketMaxStack} min={odddata?.BookerMakerMarket?.marketMinStack} />
          {odddata?.BookerMakerMarket?.runner_json?.map((item) => {
            return (

              <OddsRow data={item} key={item?.selectionName} />
            )
          })}
        </div>

        {normalFancy?.length ?
        <FancyHead max={normalFancy?.[0]?.maxStack} min={normalFancy?.[0]?.minStack} />
        :""}
        {normalFancy?.map((item,i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item} prev={prevNormalFancy[i]}/>
          )
        })}
{overbyover?.length ?
        <FancyHead max={overbyover?.[0]?.maxStack} min={overbyover?.[0]?.minStack} />
:""}
        {overbyover?.map((item,i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item}  prev={prevOverbyover[i]}/>
          )
        })}
{ballbyball?.length ?
        <FancyHead max={ballbyball?.[0]?.maxStack} min={ballbyball?.[0]?.minStack} />
:""}
        {ballbyball?.map((item,i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item} prev={prevBallbyball[i]}/>
          )
        })}

      </div>
    </>
  )
}

export default Event