import React from 'react';
import Card from './Card';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className='container bg-dark p-5'>
      <div className='row'>
        <Card text={<i className='fa-regular fa-clock' style={{ color: '#ffffff' }}></i>} />
        <Card text='0' />
      </div>
    </div>
  );
};

export default SecondsCounter;
