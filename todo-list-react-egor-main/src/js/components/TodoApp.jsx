import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState('');
  const [data, setData] = useState([]);

  // -------- GET ALL TODOS FUNCTION --------
  const getAllTodos = async () => {
    const url = 'https://playground.4geeks.com/todo/users/eulybin';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Could not fetch the todos!');
      }

      const todosData = await response.json();

      //modify todosData to fit your local format
      const displayTodos = todosData.todos.map((todoObj) => {
        return { todo: todoObj.label, id: todoObj.id };
      });
      setData(displayTodos);
    } catch (err) {
      console.error('Something went wrong: ' + err);
    }
  };

  // -------- POST NEW TODO FUNCTION --------
  const postNewTodo = async (newTodo) => {
    const url = 'https://playground.4geeks.com/todo/todos/eulybin';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Could not add the new todo');
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.error('Something went wrong: ' + err);
    }
  };

  // -------- FETCHING ALL TODOS ON PAGE LOAD --------
  useEffect(() => {
    getAllTodos();
  }, []);

  // -------- ADD TODO ON CLICK --------
  const handleAddTodo = () => {
    if (todoInput !== '') {
      setData((prevTodosData) => [
        ...prevTodosData,
        { todo: todoInput, id: Math.floor(Math.random() * (1000 - 100 + 1)) + 100 },
      ]);
      setTodoInput('');
    }
  };
  // -------- DELETE TODO ON CLICK --------
  const handleDeleteTodo = (id) => {
    setData((prevTodoData) => {
      return prevTodoData.filter((todo) => todo.id !== id);
    });
  };
  // -------- ADD TODO ON ENTER --------
  const handleAddOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };
  // -------- DELETE ALL TODOS --------
  const handleDeleteAllTodos = () => {
    setData([]);
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
              onKeyDown={handleAddOnEnter}
            />
            <button onClick={handleAddTodo} className='btn btn-outline-primary' type='button' id='button-addon2'>
              Add Todo
            </button>
          </div>
        </div>
      </div>
      {data &&
        data.map(({ todo, id }) => {
          return <TodoItem key={id} todo={todo} handleDeleteTodo={() => handleDeleteTodo(id)} />;
        })}
      {data.length > 0 ? (
        <button onClick={handleDeleteAllTodos} className='btn btn-danger my-3'>
          Clear All Tasks
        </button>
      ) : null}
      <div className='items-left'>
        {data.length} {data.length === 1 ? 'item' : 'items'} left
      </div>
    </div>
  );
};

export default TodoApp;
