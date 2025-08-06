import React from 'react';
import greyBg from '../../img/grey_bg.png';

const Card = ({ title, description, buttonLabel, buttonLink }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={greyBg} className='card-img-top' alt='grey background' />
        <h5 className='card-title mt-2'>{title}</h5>
        <p className='card-text'>{description}</p>
        <a href={buttonLink} target='_blank' className='btn btn-primary'>
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Card;
