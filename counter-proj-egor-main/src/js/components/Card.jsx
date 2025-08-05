import React from 'react';

const Card = ({ text }) => {
  return (
    <div className='bg-secondary rounded mx-3 p-2' style={{ width: '9rem' }}>
      {text}
    </div>
  );
};

export default Card;
