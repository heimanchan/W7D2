export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    // an array
    todos
  }
}

export const receiveTodo = todo => {
  console.log(todo)
  return {
    type: RECEIVE_TODO,
    todo
  }
}

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

