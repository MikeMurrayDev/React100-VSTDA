import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
      super(props);
  
      this.markComplete = this.markComplete.bind(this)
    }
  
    markComplete(isCompleted){
      if (isCompleted) {
        return 'line-through';
      } else {
        return 'none';
      }
    }
  
    render() {
      return (
        <tr className='todo-item-row' style={{backgroundColor: this.props.setPriorityColor(this.props.priority), display: this.props.showNormalItem(this.props.edittingItem)}}>
          <td className='table-checkbox'>
            <input type='checkbox' name='isCompleted' href='#' onClick={() => this.props.completedItem(this.props.id)}></input>
          </td>
          <td className='todo-description' name='content' value={this.props.content} style={{textDecoration: this.markComplete(this.props.isCompleted)}}>
            {this.props.content}
          </td>
          <td className='edit-todo-icon'>
            <div className='fa-edit' name='editItem' href='#' onClick={() => this.props.editItem(this.props.id)}></div>
          </td>
          <td className='delete-todo'>
            <div className='fa-trash' name='deleteItem' href='#' onClick={() => this.props.deleteItem(this.props.id)}></div>
          </td>
        </tr>
      )
    }
  }

  export default TodoItem;