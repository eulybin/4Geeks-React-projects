import React from 'react';

import todosData from '../../data/todosData';

const Home = () => {
  return (
    <div className='text-center container bg-dark text-white'>
      <h1>TODOS</h1>
      <ul>
        {todosData.map(({ todo, id }) => {
          return <div key={id}>{todo}</div>;
        })}
      </ul>
    </div>
  );
};

export default Home;
