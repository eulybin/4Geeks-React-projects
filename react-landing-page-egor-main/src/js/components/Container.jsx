import React from 'react';
import Card from './Card';
import Jumbotron from './Jumbotron';

const Container = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Jumbotron />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 col-lg-3'>
          <Card />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Container;
