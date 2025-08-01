import React, { useState } from 'react';

const Home = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  return (
    <div className='text-center d-flex justify-content-center align-items-center flex-column mt-5 gap-3'>
      <button className='btn btn-success btn-lg' onClick={incrementCounter}>
        Increment Counter
      </button>
      <span className='display-1'>Counter: {counter}</span>
      <button className='btn btn-success btn-lg' onClick={decrementCounter}>
        Decrement Counter
      </button>
    </div>
  );
};

export default Home;
