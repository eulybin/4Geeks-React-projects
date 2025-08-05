import React from 'react';
import Card from './Card';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className='row d-flex justify-content-center'>
      <Card text={<i className='fa-regular fa-clock' style={{ color: '#ffffff' }}></i>} />
      <Card text='0' />
      <Card text='0' />
      <Card text='0' />
      <Card text='0' />
      <Card text='0' />
      <Card text={seconds} />
    </div>
  );
};

export default SecondsCounter;
