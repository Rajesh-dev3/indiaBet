import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Import styles if needed

const Countdown = ({setBetModuleOpen}) => {
  const [count, setCount] = useState(8);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if(count ==0){
      setBetModuleOpen(false)
    }
  }, [count]);

  return (
    <div id="countdown">
      <div id="countdown-number">{count}</div>
      <svg className='svgcircle'>
        <circle r="18" cx="20" cy="20"></circle>
      </svg>
    </div>
  );
};

export default Countdown;
