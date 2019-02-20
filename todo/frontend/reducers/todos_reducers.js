import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const toObj = (array) => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    const index = array[i]['id']
    obj[index] = array[i]
  }

  return obj;
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_TODOS:
      return toObj(action.todos);
    case RECEIVE_TODO:
      return Object.assign({}, state, toObj([action.todo]));
    default:
      return state;
  }
}

export default todosReducer;

// const newState = Object.assign(oldState)


[
  {
  id: 1,
    title: 'item1',
    body: 'body1',
    done: false
  },
  {
  id: 2,
  title: 'item2',
  body: 'body2',
  done: true
  }
]