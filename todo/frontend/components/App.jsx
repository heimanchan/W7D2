import React from 'react';
import TodoListContainer from './todos/TodoListContainer'

export default class App extends React.Component {
  render () {
    return(
      <>
        <h1>From App.jsx</h1>
        <TodoListContainer />
      </>
    );
  } 
}