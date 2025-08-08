import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';
import Button from './Button';

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    if (!stopTimer) {
      const timer = setInterval(() => {
        setSeconds((prevSecondsState) => prevSecondsState + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stopTimer]);

  // --------- STOP TIMER -----------
  const handleStopTimer = () => {
    let currentSeconds = seconds;
    setSeconds(currentSeconds);
    setStopTimer((prevTimerState) => !prevTimerState);
  };
  // --------- RESET TIMER -----------
  const handleResetTimer = () => {
    setSeconds(0);
  };

  return (
    <div className='container bg-dark p-5 text-center'>
      <SecondsCounter seconds={seconds} />
      <div>
        <Button
          onClick={handleStopTimer}
          btnIcon={
            stopTimer ? (
              <i className='fa-solid fa-play' style={{ color: '#ffffff' }}></i>
            ) : (
              <i className='fa-solid fa-stop' style={{ color: '#ffffff' }}></i>
            )
          }
          btnText={`${stopTimer ? 'Resume Timer' : 'Stop Timer'}`}
          btnColor={`${stopTimer ? 'btn-success' : 'btn-danger'}`}
        />
        <Button
          onClick={handleResetTimer}
          btnIcon={<i className='fa-solid fa-rotate-right' style={{ color: '#ffffff' }}></i>}
          btnText={'Reset Timer'}
          btnColor={'btn-primary'}
        />
      </div>
    </div>
  );
};

export default Home;
