import React from 'react';

const Jumbotron = () => {
  return (
    <div className='p-5 mb-4 bg-body-secondary rounded-3 mt-5 mb-5'>
      <div className='container-fluid py-5'>
        <h1 className='display-1'>Custom Jumbotron</h1>
        <p className='col-md-8'>
          Using a series of utilities, you can create this jumbotron, just like the one in previous versions of
          Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
        </p>
        <button className='btn btn-primary btn-lg' type='button'>
          Example button
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
