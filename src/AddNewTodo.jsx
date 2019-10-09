import React, {Component} from 'react';

class AddNewTodo extends Component {
    constructor( props ) {
      super( props );
  
      this.state = {
        content: '', 
        priority: '',
      };
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
  
  
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
              <textarea className='new-todo-text' id='content' name='content' placeholder='What to do?' value={this.state.content} onChange={this.onChange}></textarea>
            </div>
            <div className='row'>
              <label>How much of a priority is this?</label>
            </div>
            <div className='add-priority-select-row'>
              <select type='dropdown' name='priority' value={this.state.priority} onChange={this.onChange} required>
                <option value='0'>Select a Priority</option> 
                <option value='3'>High</option> 
                <option value='2'>Medium</option> 
                <option value='1'>Low</option> 
              </select>
            </div>
  
          </div>
          <div className='card-footer'>
            <button className='add-button' name='addNewItem' href='#' onClick={() => this.props.addNewItem(this.state.content, this.state.priority)}>Add</button>
          </div>
        </div>
      )
    }
  }

  export default AddNewTodo;
  