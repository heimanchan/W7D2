import React from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import { uniqueId } from '../../utils/utils'

// class TodoList extends React.Component {
//   constructor (props) {
//     super(props)
//   }

//   render ({ todos }) { 
    
//     return (
//       <>
//         <h1>test from todolist</h1>
//         {todos}
//       </>
//     ) 
//   }
// }

export default ({ todos, receiveTodo }) => {
  // const allList = (array) => {
  //   return array.map((el) => <li key={el.id}>title: {el.title} 
  //   &nbsp;body: {el.body} 
  //   &nbsp;done: {el.done}</li>)
  
  return (
    <>
      <h1>from todolist comp</h1>
      {/* {allList(todos)} */}

      <h2>Using the map Function</h2>
      {/* <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul> */}

      <ul>
        {/* {todos.map(todo => <TodoListItem todo={todo}/>)} */}
        {todos.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)}
      </ul>

      <TodoForm receiveTodo={receiveTodo}/>
    </>
  )
}