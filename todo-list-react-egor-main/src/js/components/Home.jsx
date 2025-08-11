import React, { useState } from 'react';
import TodoItem from './TodoItem';

import todosData from '../../data/todosData';

const Home = () => {
  const [todoInput, setTodoInput] = useState('');
  const [data, setData] = useState(todosData);

  const handleAddTodo = () => {
    if (todoInput !== '') {
      setData((prevTodosData) => [...prevTodosData, { todo: todoInput, id: data.length + 1 }]);
      setTodoInput('');
    }
  };

  const handleDeleteTodo = (id) => {
    setData((prevTodoData) => {
      return prevTodoData.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className='main-container text-center'>
      <div className='row mb-3'>
        <div className='col'>
          <h1 className='display-1'>todos</h1>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Write your next todo...'
              aria-label='Write your next todo...'
              aria-describedby='button-addon2'
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button onClick={handleAddTodo} className='btn btn-outline-primary' type='button' id='button-addon2'>
              Add Todo
            </button>
          </div>
        </div>
      </div>
      {data.map(({ todo, id }) => {
        return <TodoItem key={id} todo={todo} handleDeleteTodo={() => handleDeleteTodo(id)} />;
      })}
    </div>
  );
};

export default Home;
