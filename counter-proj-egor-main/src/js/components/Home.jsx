import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';
import Button from './Button';

const Home = () => {
  const initialSecondsStateValue = [0, 0, 0, 0, 0, 0];
  const [seconds, setSeconds] = useState(initialSecondsStateValue);
  const [stopTimer, setStopTimer] = useState(false);

  // --------- TIMER HELPER FUNCTION -----------
  const timerFunctionality = (arr) => {
    arr[arr.length - 1]++;
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] === 10) {
        arr[i] = 0;
        arr[i - 1]++;
      }
    }
    setSeconds([...arr]);
  };

  useEffect(() => {
    if (!stopTimer) {
      const timer = setInterval(() => {
        timerFunctionality(seconds);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stopTimer, seconds]);

  // --------- STOP TIMER -----------
  const handleStopTimer = () => {
    setStopTimer((prevTimerState) => !prevTimerState);
  };
  // --------- RESET TIMER -----------
  const handleResetTimer = () => {
    setSeconds(initialSecondsStateValue);
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
