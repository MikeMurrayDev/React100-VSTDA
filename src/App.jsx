import React, { Component } from 'react';
import './css/style.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      priority: '',
      editEnabled: false,
      deleteItem: false
    };

  }

  render() {
    return (
      <div className='grid-container'>
        <div className='row'>
          <h1 className='app-header white-font'>Very Simple Todo App</h1>
        </div>
        <div className='row'>
          <div className='white-font app-description'>Track all of the things</div>
        </div>
        <div className='row line'></div>
        <div className='row cards'>
          <AddNewTodo></AddNewTodo>
          <ViewTodos></ViewTodos>
        </div>
      </div>
    );
  }
}

class AddNewTodo extends Component {

  render() {
    return (
      <div className='card add-new-todo'>
        <div className='card-header'>
          Add New Todo
        </div>
        <div className='card-body'>
          <div className='row'>
            <label>I want to...</label>
          </div>
          <div className='row'>
            <textarea className='new-todo-text'></textarea>
          </div>
          <div className='row'>
            <label>How much of a priority is this?</label>
          </div>
          <div className='select-row'>
            <select type='dropdown' required>
              <option value=''>Select a Priority</option> 
              <option value='3'>High</option> 
              <option value='2'>Medium</option> 
              <option value='1'>Low</option> 
            </select>
          </div>

        </div>
        <div className='card-footer'>
          <button className='add-button'>Add</button>
        </div>
      </div>
    )
  }
}

class ViewTodos extends Component {

  render() {
    return (
      <div className='card view-todo'>
        <div className='card-header'>
          View Todos
        </div>
        <div className='card-body-edit'>
        <table className='edit-table'>
            <EditTodo></EditTodo>
          </table>
          <table className='todo-table'>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
          </table>
        </div>
      </div>

    )
  }
}

class TodoItem extends Component {

  render() {
    return (
      <tr className='todo-item-row'>
        <td className='table-checkbox'>
          <input type='checkbox'></input>
        </td>
        <td className='todo-description'>
          Description that might be really long sometimes and talk about crazy stuff and also crazy things
        </td>
        <td className='edit-todo-icon'>
          <a><i className='fa fa-edit'></i></a>
        </td>
        <td className='delete-todo'>
          <a><i className='fa fa-trash'></i></a>
        </td>
      </tr>

    )
  }
}

class EditTodo extends Component {

  render() {
    return (
      <tr className='edit-todo-row'>
        <td className='edit-todo-data'>
          <div className='row'>
              <label>Description</label>
          </div>
          <div className='row'>
            <textarea className='new-todo-text'></textarea>
          </div>
          {/* <div className='card-body'>
            <div className='row'>
              <label>Priority?</label>
            </div>
            <div className='select-row'>
              <select type='dropdown' required>
                <option value=''>Select a Priority</option> 
                <option value='3'>High</option> 
                <option value='2'>Medium</option> 
                <option value='1'>Low</option> 
              </select>
            </div>
          </div> */}
        </td>
      </tr>

    )
  }
}



export default App;