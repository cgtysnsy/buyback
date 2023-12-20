import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  const progress = (seconds / 60) * 100;

  return (
    <div className="countdown">
      <svg className="countdown-svg">
        <circle r="66" cx="70" cy="70" className="bg-circle"></circle>
        <circle
          r="66"
          cx="70"
          cy="70"
          className="progress-circle"
          style={{
            strokeDashoffset: `calc((425 * ${progress}) / 100)  `,
          }}
        ></circle>
      </svg>
      <div className="countdown-number">
        <span className="num">{seconds}</span>
        <br />
        <span className="text">Saniye</span>
      </div>
    </div>
  );
};

export default Countdown;
