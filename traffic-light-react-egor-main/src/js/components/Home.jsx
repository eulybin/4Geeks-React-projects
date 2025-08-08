import React from 'react';

const Home = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='traffic-light-body'>
        <div className='red-light'></div>
        <div className='yellow-light'></div>
        <div className='green-light'></div>
      </div>
      <div className='traffic-light-stick'></div>
    </div>
  );
};

export default Home;
