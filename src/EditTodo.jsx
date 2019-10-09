import React, {Component} from 'react';

class EditTodo extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        content: this.props.content,
        priority: this.props.priority,
      }
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    render() {
      return (
        <tr className='edit-todo-row' style={{ display: this.props.showEditItem(this.props.edittingItem)}}>
          <td className='edit-todo-data' style={{backgroundColor: this.props.setPriorityColor(this.props.priority)}}>
            <div className='row'>
                <label>Description</label>
            </div>
            <div className='row'>
              <textarea className='new-todo-text' name='content' value={this.state.content} onChange={this.onChange}></textarea>
            </div>
            <div className='row'>
              <label>Priority?</label>
            </div>
            <div className='edit-priority-select-row'>
              <select type='dropdown' name='priority' value={this.state.priority} onChange={this.onChange} required>
                <option value='3'>High</option> 
                <option value='2'>Medium</option> 
                <option value='1'>Low</option> 
              </select>
            </div>
            <div className='row save-button-row'>
              <button className='save-update-button' name='saveItem' href='#' 
                onClick={() => this.props.saveItem(this.props.id, this.state.content, this.state.priority)}
              >Save</button>
            </div>
          </td>
        </tr>
  
      )
    }
  }

export default EditTodo;
