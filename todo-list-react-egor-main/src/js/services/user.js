import { BASE_URL } from '../utils/constants';

// -------- CREATE NEW USER --------
export const createNewUser = async (userName) => {
  const newUserObj = {
    name: userName,
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(newUserObj),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`, requestOptions);
    if (!response.ok) {
      throw new Error('Could not create a new user: ' + userName);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Something went wrong... ' + error);
  }
};

// -------- GET ALL TODOS --------
export const getAllUserTodos = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
      throw new Error(`Could not fetch the todos for ${userName}!`);
    }
    const json = await response.json();
    return json.todos;
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};

// -------- DELETE ALL TODOS --------
export const deleteAllTodos = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Could not delete the todos for the user: ${userName}!`);
    }
    if (response.status !== 204) {
      const json = await response.json();
      return json;
    }
    return undefined;
  } catch (err) {
    console.error('Something went wrong...' + err);
  }
};
