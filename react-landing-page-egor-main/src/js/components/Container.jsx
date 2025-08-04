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
        <div className='col-4'>
          <Card />
        </div>
        <div className='col-4'>
          <Card />
        </div>
        <div className='col-4'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Container;
