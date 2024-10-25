import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SportRow from "../../Component/Sports/SportRow";
import SwiperSlider from "../../Component/SwiperSlider/SwiperSlider";
import { useEventgameMutation } from "../../services/eventGame/gameEvent";
import { useGameNameMutation } from "../../services/sport/gameName";
import Loaderlogo from "../../Component/LoaderLogo/loaderlogo";
import BetPlaceSlip from "../../Component/BetPlaceSlip/BetPlaceSlip";
import { useGamelengthMutation } from "../../services/gameLength/gamelenght";
// import { useEffect } from "react";

const Dashboard = () => {
  const [sportsLength, setSportLength] = useState({
    4: 0,
    2: 0,
    1: 0,
    111: 0,
  });

  const [trigger, { data, isLoading }] = useEventgameMutation();
  const [
    triggerGamelength,
    { data: gameLengthData, isLoading: isGameLengthLoading },
  ] = useGamelengthMutation();

 
  
  useEffect(() => {
    triggerGamelength({ limit: 50, pageno: 1, series_id: 0, type: "home" });
  }, []);

  useEffect(() => {
    if (gameLengthData?.data) {
     
        setSportLength({
            4: gameLengthData?.data["cricketLength"],
            1: gameLengthData?.data["soccerLength"],
            2: gameLengthData?.data["tennisLength"],
            111: 0,
          });
        }
      }, [gameLengthData]);


  const [sportId, setSportId] = useState(4);
  useEffect(() => {
    trigger({
      limit: 50,
      pageno: 1,
      sport_id: String(sportId),
      series_id: 0,
      type: "home",
    });
  }, [sportId]);

  const [trigge, { data: gameName }] = useGameNameMutation();

  useEffect(() => {
    trigge({ limit: 50, pageno: 1 });
  }, []);

  const checkMatchLength = data?.data?.UpCommingMatches && [
    ...data?.data?.InplayMatches,
    ...data?.data?.UpCommingMatches,
  ];

  return (
    <div>
      <div className="slider-wrapper">
        <SwiperSlider />
      </div>

      <div className="nav-tabs">
        <ul className="nav-list">
          {isLoading ? (
            <Loaderlogo />
          ) : (
            gameName?.data?.map((game, index) => {
              const { name, sport_id } = game;

              return (
                <li
                  className={`list-item ${
                    sportId === sport_id ? "active" : ""
                  }`}
                  key={sport_id + index}
                  onClick={() => setSportId(sport_id)}
                >
                  <Link to={"#"}>
                    <span>{name}</span>
                    <span className="game-no">{sportsLength[sport_id]}</span>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="game-area">
        {isLoading ? (
          <Loaderlogo />
        ) : (
          checkMatchLength?.map((item, i) => {
            return <SportRow key={i} index={i} item={item} active={data?.data?.InplayMatches?.length>i?true:false} />;
          })
        )}
        
      </div>
      {/* <SportRow/> */}
      {/* <BetPlaceSlip/> */}
    </div>
  );
};

export default Dashboard;