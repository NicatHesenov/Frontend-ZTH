import { useEffect, useState } from "react";
import "./timer.css";
function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  useEffect(() => {
    if (!timerId) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerId]);
  const startTimer = () => {
    setTimerId(true);
  };

  const stopTimer = () => {
    setTimerId(false);
  };
  const resetTimer = () => {
    setTimerId(false);
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h1>Timer: {time}</h1>
      <div className="timer-btn">
        <button className="stop-btn" onClick={stopTimer}>
          Stop
        </button>
        <button className="start-btn" onClick={startTimer}>
          Start
        </button>{" "}
        <button className="start-btn" onClick={resetTimer}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Timer;
