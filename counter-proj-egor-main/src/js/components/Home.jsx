import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';
import Button from './Button';

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const handleResetTimer = () => {
    setSeconds(0);
  };

  const handleStopTimer = () => {
    setSeconds((prevSecondsState) => (prevSecondsState = prevSecondsState));
    setStopTimer((prevTimerState) => !prevTimerState);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSecondsState) => prevSecondsState + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='container bg-dark p-5 text-center'>
      <SecondsCounter seconds={seconds} />
      <div>
        <Button
          onClick={handleStopTimer}
          btnText={`${stopTimer ? 'Resume Timer' : 'Stop Timer'}`}
          btnColor={`${stopTimer ? 'btn-success' : 'btn-danger'}`}
        />
        <Button onClick={handleResetTimer} btnText={'Reset Timer'} btnColor={'btn-primary'} />
      </div>
    </div>
  );
};

export default Home;
