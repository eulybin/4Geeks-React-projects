import React from 'react';

const Card = ({ text }) => {
  return (
    <div className='bg-secondary rounded mx-3 p-2 border border-light' style={{ width: '8rem' }}>
      {text}
    </div>
  );
};

export default Card;
