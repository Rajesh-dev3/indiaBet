import React, { useState, useEffect } from 'react';
import './Countdown.css';
import { useDispatch, useSelector } from 'react-redux';
import { setBetData } from '../../services/betSlice/betSlice';

const Countdown = ({ setBetModuleOpen }) => {
  const [count, setCount] = useState(8);
  const [circleDashoffset, setCircleDashoffset] = useState(0); // New state to control the circle stroke offset
  const dispatch = useDispatch();

  const circleRadius = 18; // Circle radius
  const circleCircumference = 2 * Math.PI * circleRadius; // Circle circumference

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      // Update the circle's dashoffset based on the count
      const progress = ((8 - count) / 8) * circleCircumference;
      setCircleDashoffset(progress);

      return () => clearInterval(timer);
    }

    if (count === 0) {
      dispatch(setBetData());
      setBetModuleOpen(false);
    }
  }, [count, circleCircumference, dispatch, setBetModuleOpen]);

  const stack = useSelector((state) => state?.betData?.betData);

  useEffect(() => {
    if (stack?.odds) {
      setCount(8);
      setCircleDashoffset(0); // Reset the circle animation
    }
  }, [stack?.odds]);

  return (
    <div id="countdown">
      <div id="countdown-number">{count}</div>
      <svg className="svgcircle" width="50" height="50">
        <circle
          r={circleRadius}
          cx="20"
          cy="20"
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleDashoffset}
        />
      </svg>
    </div>
  );
};

export default Countdown;
