import { useEffect, useState } from 'react'
import StatusOdds from '../../Component/matchstatusodds/StatusOdds'
import OddsHeading from '../../Component/matchstatusodds/Odds/OddsHeading/OddsHeading'
import OddsRow from '../../Component/matchstatusodds/Odds/Oddsrow/OddsRow'
import FancyHead from '../../Component/matchstatusodds/Odds/FancyHead/FancyHead'
import FancyBox from '../../Component/matchstatusodds/Odds/Fancybox/FancyBox'
import MatchScore from '../../Component/MatchScorebox/.MatchScore'
import { useParams } from 'react-router-dom'
import { useEventDetailMutation } from '../../services/eventDetail/eventDetail'
import { useGetEventSessionMutation } from '../../services/fancy/Fancy'
import { useDispatch, useSelector } from 'react-redux'
import { setBetData } from '../../services/betSlice/betSlice'
import BetPlaceSlip2 from '../../Component/BetPlaceSlip2/BetPlaceSlip2'
import { useMediaQuery } from '../../useMediaQuery'
import Tabs from '../../Component/Tabs/Tabs'

import './style.scss'

const Event = () => {
  const [odddata, setOdddata] = useState();
  
  const [prevState, setPrevState] = useState();
  const [prevFancy, setPrevFancy] = useState()
  const [fancyData, setFancyData] = useState()
  const { sportId, matchId } = useParams()
  const [trigger, { data  }] = useEventDetailMutation()
  const [trigg, { data: fancy }] = useGetEventSessionMutation()



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

  const [checkBookMaker, setBookMaker] = useState(false)
  const [checkFancy, setCheckFancy] = useState(false)

  const betData = useSelector((state) => state?.betData?.betData)

  const profithandler = (stack, odds, is_back, eventId, item) => {
    setSelectionId(item)
    if (item) {
      setBetModuleOpen(true)
    }
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
    // {"is_back":"1","match_id":"33706407","odds":"1.29","selection_id":1,"stack":100,"market_id":"1.234739410_B"}



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
        winLoss: runner_jsonLength == 2 ? checkSelectionId(1) : checkSelectionId(2)

      }
    ];

    setProfitLoss(obj)
    dispatch(setBetData({ ...betData, odds: odds, event: eventId, isBack: is_back, obj,...item,checkBookMaker,checkFancy }));

  }

//   useEffect(() => {
//     // `${selectionId}_B`
//   if(checkBookMaker){
//    const bookmakerPayload =  {"is_back":betData?.isBack,"match_id":matchId,"odds":betData?.odds,"selection_id":selectionId2?.selectionId,"stack":betData?.stack,"market_id":betData?.event?.market_id}
//    if(betData?.stack != null && betData?.isBack != undefined){

//     dispatch(setBetData(bookmakerPayload));
//   }
//   }else{
//     const bookmakerPayload =  {"is_back":betData?.isBack,"match_id":matchId,"odds":betData?.odds,"selection_id":selectionId2?.selectionId,"stack":betData?.stack,"market_id":betData?.event?.market_id}
//     if(betData?.stack != null && betData?.isBack != undefined){

//       dispatch(setBetData(bookmakerPayload));
//     }
    
//   }
// }, [checkBookMaker,profitLoss,betData?.isBack,betData?.stack,betData?.odds])




  const fancyProfitLoss= (stack,odds,is_back,eventId)=>{
    setSelectionId(eventId)
    if (eventId) {
      setBetModuleOpen(true)
    }
    const obj = is_back ==0? [ 
      {
    selectionId: eventId?.SelectionId,
    winLoss:stack !=null? -Number(eventId?.LaySize1):0
  },
        {
      selectionId: eventId?.SelectionId,
      winLoss:stack !=null? eventId?.BackSize1:0
    },
    ]:[
      {
    selectionId: eventId?.SelectionId,
    winLoss:stack !=null?-Number(stack):0
  },
      {
        selectionId: eventId?.SelectionId,
        winLoss:stack !=null? eventId?.BackSize1:0
      },
    ];

    dispatch(setBetData({ ...betData,stack:betData?.stack, odds: odds, event: eventId, isBack: is_back, obj ,checkFancy}));
    setProfitLoss(obj)
  }

  useEffect(() => {
    if(checkFancy == true){
     if (betData?.stack != null ) {
       fancyProfitLoss(betData?.stack, betData?.odds,betData?.isBack,selectionId2)
     }
   }
   
 }, [betData?.stack,betData?.odds,betData?.isBack])

  useEffect(() => {
    if (checkFancy == false) {
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



  const [betModuleOpen, setBetModuleOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width:780px)")

// console.log(profitLoss,"profit")

const [isLiveTVVisible, setIsLiveTVVisible] = useState(false);

const toggleLiveTV = () => {
  setIsLiveTVVisible(prevState => !prevState);
};


  return (
    <>
      <div className="event">
        <MatchScore name={odddata?.BookerMakerMarket?.name} toggle={toggleLiveTV} />
             {/* Conditional rendering of the Live TV section */}
        <StatusOdds />
      {isLiveTVVisible && (
        <div className="live-tv">
          <p>Service not available</p>
        </div>
      )}
        <div style={{ marginTop: "10px" }}>
          {odddata?.MatchDetails?.runner_json?.length ?
            <OddsHeading max={odddata?.MatchDetails?.marketMaxStack} min={odddata?.MatchDetails?.marketMinStack} />
            : ""}
          {odddata?.MatchDetails?.runner_json?.map((item, i) => {

            const findFancySelection = profitLoss?.find(elm => elm.selectionId === item?.selectionId)?.winLoss || 0
            const displayValue = (findFancySelection + (item?.WinAndLoss || 0)).toFixed(2);
          
            return (
              <>
                <OddsRow
                  profithandler={profithandler}
                  setSelectionId={setSelectionId}
                  profitLoss={displayValue}
                  setCheckFancy={setCheckFancy}
                  setBookMaker={setBookMaker}
                  checkBookMaker={false}
                  odddata={odddata?.MatchDetails}
                  data={item} key={item?.selectionName}
                  prevOdd={prevState?.MatchDetails?.runner_json[i]} />
                {betModuleOpen && isMobile && item?.selectionId == selectionId2?.selectionId ?
                  <BetPlaceSlip2  setBetModuleOpen={setBetModuleOpen} />
                  : ""}
              </>

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
              <>
                <OddsRow
                  profithandler={profithandler}
                  profitLoss={displayValue}
                  setCheckFancy={setCheckFancy}
                  checkBookMaker={true}
                  setSelectionId={setSelectionId}
                  setBookMaker={setBookMaker}
                  odddata={odddata?.BookerMakerMarket}
                  data={item} key={item?.selectionName}
                  prevOdd={prevState?.BookerMakerMarket?.runner_json[i]}
                />
                {betModuleOpen && isMobile && item?.selectionId == selectionId2?.selectionId ?
                  <BetPlaceSlip2 setBetModuleOpen={setBetModuleOpen} />
                  : ""}
              </>
            )
          })}
        </div>

        {normalFancy?.length ?
          <FancyHead max={normalFancy?.[0]?.maxStack} min={normalFancy?.[0]?.minStack}  />
          : ""}
        {normalFancy?.map((item, i) => {
          return (
            <>
            <FancyBox setBookMaker={setBookMaker} profitLoss={profitLoss} setCheckFancy={setCheckFancy} key={item?.RunnerName} data={item} prev={prevNormalFancy[i]} fun={fancyProfitLoss}/>
            {betModuleOpen && isMobile && item?.SelectionId == selectionId2?.SelectionId ?
              <BetPlaceSlip2  setBetModuleOpen={setBetModuleOpen} />
              : ""}
              </>
          )
        })}
        {overbyover?.length ?
          <FancyHead max={overbyover?.[0]?.maxStack} min={overbyover?.[0]?.minStack} />
          : ""}
        {overbyover?.map((item, i) => {
          return (
            <>
            <FancyBox setBookMaker={setBookMaker} profitLoss={profitLoss} setCheckFancy={setCheckFancy} key={item?.RunnerName} data={item} prev={prevOverbyover[i]} fun={fancyProfitLoss}/>
            {betModuleOpen && isMobile && item?.SelectionId == selectionId2?.SelectionId ?
              <BetPlaceSlip2  setBetModuleOpen={setBetModuleOpen} />
              : ""}
            </>
          )
        })}
        {ballbyball?.length ?
          <FancyHead max={ballbyball?.[0]?.maxStack} min={ballbyball?.[0]?.minStack} />
          : ""}
        {ballbyball?.map((item, i) => {
          return (
            <>
            <FancyBox setBookMaker={setBookMaker} profitLoss={profitLoss} setCheckFancy={setCheckFancy} key={item?.RunnerName} data={item} prev={prevBallbyball[i]} fun={fancyProfitLoss}/>
            {betModuleOpen && isMobile && item?.SelectionId == selectionId2?.SelectionId ?
              <BetPlaceSlip2  setBetModuleOpen={setBetModuleOpen} />
              : ""}
            </>
          )
        })}
{isMobile && <Tabs />}
      </div>
    </>
  )
}

export default Event