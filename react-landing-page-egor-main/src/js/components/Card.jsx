import React from 'react';
import greyBg from '../../img/grey_bg.png';

const Card = ({ title, description }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={greyBg} className='card-img-top' alt='grey background' />
        <h5 className='card-title mt-2'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
