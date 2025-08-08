import React from 'react';
import Card from './Card';

const SecondsCounter = ({ seconds }) => {
  const displaySecondsCards = seconds.map((elem, index) => {
    return <Card key={index} text={elem} width={'9rem'} />;
  });
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col d-flex justify-content-center align-items-center'>
        <Card width={'9rem'} text={<i className='fa-regular fa-clock' style={{ color: '#ffffff' }}></i>} />
        {displaySecondsCards}
      </div>
    </div>
  );
};

export default SecondsCounter;
