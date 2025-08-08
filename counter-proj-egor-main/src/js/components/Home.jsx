import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';
import Button from './Button';

const Home = () => {
  const [seconds, setSeconds] = useState('000000');
  const [stopTimer, setStopTimer] = useState(false);

  const handleResetTimer = () => {
    setSeconds(0);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSeconds((prevSecondsState) => prevSecondsState + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className='container bg-dark p-5 text-center'>
      <SecondsCounter seconds={seconds} />
      <div>
        <Button btnText={'Stop Timer'} btnBg={'btn-danger'} />
        <Button onClick={handleResetTimer} btnText={'Reset Timer'} btnBg={'btn-primary'} />
      </div>
    </div>
  );
};

export default Home;
