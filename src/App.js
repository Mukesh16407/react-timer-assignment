import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const timerRef = useRef();
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const startTimer = () => {
    // Complete this function
    timerRef.current = setInterval(() => {
      setSecond(second + 1);

      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
    }, 1000);
  };
  const stopTimer = () => {
    // Csetomplete this function
    clearInterval(timerRef.current);
  };
  const resetTimer = () => {
    // Complete this function
    setSecond(0);
    setMinute(0);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecond(second + 1);

      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [minute, second]);
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {minute < 10 ? "0" + minute : minute} mins </span>
      <span> {second < 10 ? "0" + second : second} secs</span>
      <div>
        <button
          onClick={() => {
            startTimer();
          }}
        >
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
