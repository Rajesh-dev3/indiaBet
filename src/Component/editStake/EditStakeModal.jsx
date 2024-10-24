import React, { useEffect, useState } from "react";
import "./style.scss";
import { useEventDetailMutation } from "../../services/eventDetail/eventDetail";
import { useStakeUpdateMutation } from "../../services/StakeUpdate/stakeupdate";
import { useParams } from "react-router-dom";
const EditStakeModal = ({ setIsOpen }) => {
  const [matchStackArray, setMatchStackArray] = useState([]);
  const [stakeData, setStakeData] = useState({
    one_click_stack: "0",
    sport_id: "4",
  });
  const [trigger, { data }] = useEventDetailMutation();
  const [trig, { data: stakeUpdateResponse }] = useStakeUpdateMutation();
  useEffect(() => {
    trigger({ match_id: "0", sport_id: "4" });
    // console.log(, "trigger")
  }, []);
  const updateMatchStack = (e) => {
    const { name, value } = e.target;
    setMatchStackArray((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    let stakeArray = data?.data?.UserSportSettings[0]?.match_stack;
    const stake = stakeArray?.split(",");
    stake?.map((item, index) => {
      setMatchStackArray((prev) => {
        return {
          ...prev,
          [`stake${index + 1}`]: item,
        };
      });
    });
  }, [data]);

  const stakeUpdateHandler = () => {
    const convertValueArray = Object.values(matchStackArray);
    const stakeString = convertValueArray.join(",");
    const updateRequestData = {
      ...stakeData,
      match_stack: stakeString,
    };
    trig(updateRequestData);
  };
  useEffect(() => {
    if (stakeUpdateResponse?.error == false) {
      // toast.success(stakeUpdateResponse?.message)
      setIsOpen(false);
    } else if (stakeUpdateResponse?.error == true) {
      // toast.error(stakeUpdateResponse?.message)
    }
  }, [stakeUpdateResponse]);
  return (
    <div className="edit-stack-container">
      <div className="chip-sec">
        {Object.keys(matchStackArray).map((elm, index) => {
          return (
            <div className="chip" key={index + elm}>
              <p className="chip-heading">Chip value {index + 1}:</p>
              <input
                type="number"
                id="chip"
                autoFocus
                name={elm}
                 inputMode="numeric" pattern="[0-9]*"
                value={matchStackArray[elm]}
                onChange={updateMatchStack}
              />
            </div>
          );
        })}
      

      </div>
      <div className="update-chip">
        <button className="chip-btn" onClick={() => stakeUpdateHandler()}>
          Update Chip Setting
        </button>
      </div>
    </div>
  );
};

export default EditStakeModal;
