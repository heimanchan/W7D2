import React from 'react';
import { uniqueId } from '../../utils/utils';
import { receiveTodo } from '../../actions/todo_actions';
// should not import actions
// import { receiveTodo } from '../../actions/todo_actions';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      body: '',
      done: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    // const info = receiveTodo(todo);
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: this.state.done
    }

    this.props.receiveTodo(todo);
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  render () {
    return (
      <form action="">
        <label>
          Title
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        </label>

        <label>
          Body
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}