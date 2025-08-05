import React, { useState } from 'react';
import SecondsCounter from './SecondsCounter';

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className='container bg-dark p-5 text-center'>
      <SecondsCounter seconds={counter} />
      <button onClick={() => setCounter(counter + 1)} className='btn btn-primary btn-lg'>
        Increment Counter
      </button>
    </div>
  );
};

export default Home;
