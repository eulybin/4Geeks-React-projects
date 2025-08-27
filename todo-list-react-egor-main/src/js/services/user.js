import { BASE_URL } from '../utils/constants';

// -------- GET ALL TODOS --------
export const getAllUserTodos = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
      throw new Error(`Could not fetch the todos for ${userName}!`);
    }
    const json = await response.json();
    console.log(json.todos);
    return json.todos;
  } catch (err) {
    console.error('Something went wrong: ' + err);
  }
};
