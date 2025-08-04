import React from 'react';
import greyBg from '../../img/grey_bg.png';

const Card = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={greyBg} className='card-img-top img-fluid' alt='grey background' />
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
