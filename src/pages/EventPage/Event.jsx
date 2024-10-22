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
import { useDispatch, useSelector } from 'react-redux'
import { setBetData } from '../../services/betSlice/betSlice'
import moment from 'moment'

const Event = () => {
  const [odddata, setOdddata] = useState();
  const [prevState, setPrevState] = useState();
  const [prevFancy, setPrevFancy] = useState()
  const [fancyData, setFancyData] = useState()
  const { sportId, matchId } = useParams()
  const [trigger, { data  }] = useEventDetailMutation()
  const [trigg, { data: fancy }] = useGetEventSessionMutation()
console.log(data , "betscore")


  const date = moment(
    parseInt(
      odddata?.MatchDetails && odddata?.MatchDetails?.start_date ? odddata?.MatchDetails?.start_date : null,
    ) * 1000,
  )
  useEffect(() => {

    trigger({ "match_id": matchId, "sport_id": sportId })
    trigg({ match_id: matchId })
    const timer = setInterval(() => {
      trigger({ "match_id": matchId, "sport_id": sportId })
      trigg({ match_id: matchId })
      // console.log(matchId, 'dyummy')
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
  const [profitLoss, setProfitLoss] = useState([])

  const dispatch = useDispatch();

  const [selectionId2, setSelectionId] = useState("")

  const [checkBookMaker, setBookMaker] = useState(0)
  const [checkFancy, setCheckFancy] = useState(false)

  const betData = useSelector((state) => state?.betData?.betData)

  const profithandler = (stack, odds, is_back, eventId, item) => {
    setSelectionId(item)
    const stackWin = (Number(odds) - 1) * Number(stack);
    const findIndex = ((index) => {
      if (checkFancy == true) {
        return eventId?.runner_json?.length ? eventId?.runner_json[index]?.selectionId : null
      } else if (checkFancy == false) {
        return eventId?.runner_json?.length ? eventId?.runner_json[index]?.selectionId : null
      }
    })

    const checkSelectionId = (i) => {
      if (eventId?.runner_json[i].selectionId == item?.selectionId) {
        if (is_back == 1) {
          return Number(stackWin)
        }
        else if (is_back == 0) {
          return -Number(stackWin)
        }
        else {
          return -Number(stack)
        }
      }
      else if (eventId?.runner_json[i].selectionId != item?.selectionId) {
        if (is_back == 1) {
          return -Number(stack)
        }
        if (is_back == 0) {
          return Number(stack)
        }
      
      }

    }



const runner_jsonLength = eventId?.runner_json?.length
    const obj = [
      {
        selectionId: findIndex(0),
        marketName: eventId?.runner_json?.[0]?.selectionName,
        marketId: !checkFancy ? eventId?.market_id : eventId?.runner_json?.[0]?.selectionName,
        winLoss: checkSelectionId(0)
       

      },
      {
        selectionId: findIndex(1),
        marketName: eventId?.runner_json?.[1]?.selectionName,
        marketId: !checkFancy ? eventId?.market_id : eventId?.runner_json?.[1]?.selectionName,

        winLoss: checkSelectionId(1)
       
      },
      {
        selectionId: findIndex(2),
        marketName: eventId?.runner_json?.[2]?.selectionName,
        marketId: !checkFancy ? eventId?.market_id : eventId?.runner_json?.[2]?.selectionName,
        winLoss:runner_jsonLength ==2?checkSelectionId(1): checkSelectionId(2)
      
      }
    ];
  
    setProfitLoss(obj)
    dispatch(setBetData({ ...betData, odds: odds, event: eventId, isBack: is_back, obj }));

  }

  useEffect(() => {
    if (checkFancy == false) {
      if (betData?.stack != null) {
        profithandler(betData?.stack, betData?.odds, betData?.isBack, betData?.event, selectionId2)
      }
    } else if (checkFancy == true) {
      if (betData?.stack != null) {
        profithandler(betData?.stack, betData?.odds, betData?.isBack, betData?.event, selectionId2)
      }
    }

  }, [betData?.stack])


  useEffect(() => {
    if (betData == null) {

      setProfitLoss()
    }
  }, [betData == null])
  




  return (
    <>
      <div className="event">
        <MatchScore name={odddata?.BookerMakerMarket?.name} />
        <StatusOdds />
        <div style={{ marginTop: "10px" }}>
          {odddata?.MatchDetails?.runner_json?.length ?
            <OddsHeading max={odddata?.MatchDetails?.marketMaxStack} min={odddata?.MatchDetails?.marketMinStack} />
            : ""}
          {odddata?.MatchDetails?.runner_json?.map((item, i) => {

            const findFancySelection = profitLoss?.find(elm => elm.selectionId === item?.selectionId)?.winLoss || 0
            const displayValue = (findFancySelection + (item?.WinAndLoss || 0)).toFixed(2);
            return (

              <OddsRow
                profithandler={profithandler}
                setSelectionId={setSelectionId}
                profitLoss={displayValue}
                odddata={odddata?.MatchDetails}
                data={item} key={item?.selectionName}
                prevOdd={prevState?.MatchDetails?.runner_json[i]} />
            )
          })}
        </div >
        <div style={{ marginTop: "10px" }}>
          {odddata?.BookerMakerMarket?.runner_json?.length ?
            <OddsHeading max={odddata?.BookerMakerMarket?.marketMaxStack} min={odddata?.BookerMakerMarket?.marketMinStack} />
            : ""}
          {odddata?.BookerMakerMarket?.runner_json?.map((item, i) => {
            const findFancySelection = profitLoss?.find(elm => elm.selectionId === item?.selectionId)?.winLoss || 0
            const displayValue = (findFancySelection + (item?.WinAndLoss || 0)).toFixed(2)
            
            return (
              <OddsRow
                profithandler={profithandler}
                profitLoss={displayValue}
                setSelectionId={setSelectionId}
                odddata={odddata?.BookerMakerMarket}
                data={item} key={item?.selectionName}
                prevOdd={prevState?.BookerMakerMarket?.runner_json[i]}
              />
            )
          })}
        </div>

        {normalFancy?.length ?
          <FancyHead max={normalFancy?.[0]?.maxStack} min={normalFancy?.[0]?.minStack} />
          : ""}
        {normalFancy?.map((item, i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item} prev={prevNormalFancy[i]} />
          )
        })}
        {overbyover?.length ?
          <FancyHead max={overbyover?.[0]?.maxStack} min={overbyover?.[0]?.minStack} />
          : ""}
        {overbyover?.map((item, i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item} prev={prevOverbyover[i]} />
          )
        })}
        {ballbyball?.length ?
          <FancyHead max={ballbyball?.[0]?.maxStack} min={ballbyball?.[0]?.minStack} />
          : ""}
        {ballbyball?.map((item, i) => {
          return (
            <FancyBox key={item?.RunnerName} data={item} prev={prevBallbyball[i]} />
          )
        })}

      </div>
    </>
  )
}

export default Event