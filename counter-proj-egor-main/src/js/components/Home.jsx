import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';

const Home = () => {
  const [seconds, setSeconds] = useState('000000');

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSeconds((prevSecondsState) => prevSecondsState + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className='container bg-dark p-5 text-center'>
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
