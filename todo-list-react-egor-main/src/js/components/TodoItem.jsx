import React from 'react';

const TodoItem = ({ todo, handleDeleteTodo }) => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='list-item p-3'>
          <div>{todo}</div>
          <button className='delete-btn btn btn-danger' onClick={handleDeleteTodo}>
            <i className='fa-solid fa-trash' style={{ color: '#ffffff' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
