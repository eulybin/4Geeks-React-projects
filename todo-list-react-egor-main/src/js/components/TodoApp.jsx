import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { USER } from '../utils/constants';
import { getAllUserTodos, createNewUser, deleteAllTodos, getAllUsers } from '../services/user';
import { addTodo, deleteTodo } from '../services/todo';

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState('');
  const [data, setData] = useState([]);

  // -------- VERIFY USER EXISTS --------
  useEffect(() => {
    const allUsersData = async () => {
      const { users } = await getAllUsers();
      const userExists = users.some((user) => user.name === USER);
      if (!userExists) {
        await createNewUser(USER);
      }
    };
    allUsersData();
  }, []);

  // -------- ADD TODO ON CLICK --------
  const handleAddTodo = async () => {
    if (todoInput !== '' && todoInput.length < 40) {
      const newTodo = await addTodo(USER, todoInput);
      setData((prevTodoData) => [...prevTodoData, newTodo]);
      setTodoInput('');
    } else {
      alert('Please enter a todo between 1-40 characters long.');
    }
  };

  // -------- ADD TODO ON ENTER --------
  const handleAddOnEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  // -------- DELETE TODO ON CLICK --------
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setData((prevTodoData) => prevTodoData.filter((todo) => todo.id !== id));
  };

  // -------- DELETE ALL TODOS --------
  const handleDeleteAllTodos = async () => {
    await deleteAllTodos(USER);
    await createNewUser(USER);
    setData([]);
  };

  return (
    <div className='main-container text-center'>
      <div className='row mb-3'>
        <div className='col'>
          <h1 className='display-1'>Todo App</h1>
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
      {data.length > 0 &&
        data.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} handleDeleteTodo={() => handleDeleteTodo(todo.id)} />;
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
