// turn to an array
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  // keys = [ {id:1 title: 1 } ]
  return keys.map((el) => state.todos[el])
}

window.allTodos = allTodos;