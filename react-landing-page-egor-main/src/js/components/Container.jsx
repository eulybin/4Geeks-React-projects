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
          <Card
            title='Title 1'
            description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis excepturi.'
          />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card
            title='Title 2'
            description='Some other and brief description for the second card! Just saying whatever...'
          />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card
            title='Title 3'
            description='dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          />
        </div>
        <div className='col-md-6 col-lg-3'>
          <Card
            title='Title 4'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have.'
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
