import React, { useState, useEffect } from 'react';

function Timer(){
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up!");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    const hrs = Math.floor(timeLeft / 3600);
    const mins = Math.floor((timeLeft % 3600) / 60);
    const secs = timeLeft % 60;

    setHours(hrs);
    setMinutes(mins);
    setSeconds(secs);
  }, [timeLeft]);

  function start(){
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    if (totalSeconds > 0){
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    } else{
      alert("Please enter a valid time.")
    }
  }

  function pause(){
    setIsRunning(false);
  }

  function reset(){
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimeLeft(0);
  }

  function formatTime(value){
    return value.toString().padStart(2, '0');
  }
 
  return (
    <div className = "timer-container"> 
        <h1 className = "timer"> Countdown Timer</h1>
        <div className="display-time">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
       
        <div className = "input-space">
            <div className = "hours-input">
                <input 
                    type="number"
                    min="0"
                    value={hours || ''} 
                    onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
                    className= "hours-placeholder"
                    placeholder = "Enter hours"
                />    
                <label className="hours-label"> Hours </label>
            </div>
            
        <div className = "minutes-input">
        <input
          type="number"
          min="0"
          value={minutes || ''}
          onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value)) {
            const totalMinutes = Math.max(0, value);
            setHours(Math.floor(totalMinutes / 60));
            setMinutes(totalMinutes % 60);
          } else {
        setMinutes(''); 
          }
        }}           
             className= "minutes-placeholder"
             placeholder= "Enter minutes"
           />
           <label className="minutes-label">Minutes</label> 
        
        </div> 
        <div className = "seconds-input">
        <input
            type="number"
            min="0"
            value={timeLeft || ''}
            onChange={(e) => {
              const value = e.target.value;
              const totalSeconds = Math.max(0, value);
  
              if (!isNaN(totalSeconds)) {
                setHours(Math.floor(totalSeconds / 3600));
                setMinutes(Math.floor((totalSeconds % 3600) / 60));
                setSeconds(totalSeconds % 60);
                setTimeLeft(totalSeconds);
              } else {
                setTimeLeft('');
              }
            }}  
            className="seconds-placeholder"
            placeholder="Enter seconds"
          />
          <label className="seconds-label">Seconds</label>
        </div>
        </div>
        
       
      <div className="button-space">
        {!isRunning ? (
          <button
            onClick={start}
            className="start-button"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pause}
            className="pause-button"
          >
            Pause
          </button>
        )}
        <button
          onClick={reset}
          className="reset-button"
        >
          Reset
        </button>
      </div>

    </div>

  )
  ;
};

export default Timer;