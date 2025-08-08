import React from 'react';
import Card from './Card';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col d-flex justify-content-center align-items-center'>
        <Card text={<i className='fa-regular fa-clock' style={{ color: '#ffffff' }}></i>} />
        <Card text={seconds} />
      </div>
    </div>
  );
};

export default SecondsCounter;
