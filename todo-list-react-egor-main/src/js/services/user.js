import { BASE_URL } from '../utils/constants';

// -------- CREATE NEW USER --------
export const createNewUser = async (userName) => {
  const newUserObj = {
    name: userName,
  };

  const requestOptions = {
    method: 'POST',
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

// -------- GET ALL USERS --------
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`Could not fetch the users!`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};

// -------- GET ALL TODOS --------
export const getAllUserTodos = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
      throw new Error(`Could not fetch the todos for ${userName}!`);
    }
    const data = await response.json();
    return data.todos;
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};

// -------- DELETE USER AND ALL TODOS --------
export const deleteAllTodos = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`Could not delete the user: ${userName}!`);
    }
    if (response.status === 204) return null;
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Something went wrong...' + err);
  }
};
