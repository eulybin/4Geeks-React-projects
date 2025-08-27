import { BASE_URL } from '../utils/constants';

// -------- POST NEW TODO --------
export const addTodo = async (userName, newTodo) => {
  const newTodoObj = {
    label: newTodo,
    is_done: false,
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newTodoObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/todos/${userName}`, requestOptions);
    if (!response.ok) {
      throw new Error('Could not add the new todo!');
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error('Something went wrong...' + err);
  }
};
