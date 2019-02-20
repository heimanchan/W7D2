import { allTodos } from '../../reducers/selectors';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = state => { // reading from the store
  // {todos: state.todos}
  return {todos: allTodos(state)}
  // allTodos(state)
};

const mapDispatchToProps = dispatch => {  //writing to store
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);