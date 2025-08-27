import { BASE_URL } from '../utils/constants';

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
