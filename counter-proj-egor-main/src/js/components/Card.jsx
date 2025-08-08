import React from 'react';

const Card = ({ text, width }) => {
  return (
    <span className='bg-secondary rounded mx-3 p-3 border border-light' style={{ width: width }}>
      {text}
    </span>
  );
};

export default Card;
