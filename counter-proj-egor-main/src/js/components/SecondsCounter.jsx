import React from 'react';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className='container bg-dark'>
      <div className='row'>
        <span>
          <i className='fa-regular fa-clock' style={{ color: '#ffffff' }}></i>
        </span>
        <h1>{seconds}</h1>
      </div>
    </div>
  );
};

export default SecondsCounter;
