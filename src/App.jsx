import React, { Component } from 'react';
import './css/style.css';

let todoList = [];
var id = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };

    this.addNewItem = this.addNewItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.completedItem = this.completedItem.bind(this);
  }

  addNewItem(content, priority){
    let temporaryTodoList = this.state.todoList

    let newTodoItem = {
      id: id,
      content: content,
      priority: priority,
      isCompleted: false,
      edittingItem: false
    }

    temporaryTodoList.push(newTodoItem);

    this.setState({
      todoList: temporaryTodoList
    });

    id++;
  };

  editItem(id) {
    let temporaryEditList = this.state.todoList;
    
    for (let i = 0; i < temporaryEditList.length; i++){
      if (temporaryEditList[i].id == id) {
        temporaryEditList[i].edittingItem = true;
      }
    }

    this.setState({todoList: temporaryEditList});
  }

  saveItem(id, content, priority){
    let temporarySaveList = this.state.todoList;

    for(let i = 0; i < temporarySaveList.length; i++){
      if (temporarySaveList[i].id == id) {
        temporarySaveList[i].edittingItem = false;
        temporarySaveList[i].content = content;
        temporarySaveList[i].priority = priority;
      }
    }

    this.setState({todoList: temporarySaveList});
  }

  completedItem(id){
    let temporaryCompletedList = this.state.todoList;

    for(let i = 0; i < temporaryCompletedList.length; i++){
      if (temporaryCompletedList[i].id == id) {
        temporaryCompletedList[i].isCompleted = !temporaryCompletedList[i].isCompleted;
      }
    }

    this.setState({todoList: temporaryCompletedList});
  }

  deleteItem(id){
    let temporaryDeleteList = this.state.todoList.filter((itemToBeDeleted) => {
      if (itemToBeDeleted.id !== id) {
        return itemToBeDeleted;
      }
    });

    this.setState({todoList: temporaryDeleteList});
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
          <AddNewTodo addNewItem={this.addNewItem}></AddNewTodo>
          <ViewTodos
            todoList={this.state.todoList}
            editItem={this.editItem}
            saveItem={this.saveItem}
            completedItem={this.completedItem}
            deleteItem={this.deleteItem}
          ></ViewTodos>
        </div>
      </div>
    );
  }
}

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

class ViewTodos extends Component {
  constructor(props) {
    super(props);

    this.setPriorityColor = this.setPriorityColor.bind(this)
    this.showEditItem = this.showEditItem.bind(this)
    this.showNormalItem = this.showNormalItem.bind(this)
  }

  showEditItem(edittingItem){
    if(edittingItem){
      return 'block';
    } else{
      return 'none';
    }
  }

  showNormalItem(edittingItem){
    if(edittingItem){
      return 'none';
    } else{
      return 'block';
    }
  }

  setPriorityColor(priority){
    if(priority == 1){
      return '#DFF2BF';
    } else if (priority == 2){
      return '#FEEFB3';
    }  else {
      return '#FFBABA';
    }
  }

  render() {
    return (
      <div className='card view-todo'>
        <div className='card-header'>
          View Todos
        </div>
        <div className='card-body-edit'>
          <table className='edit-table'>
            <tbody>
              {this.props.todoList.map((each) => {
                    return (
                      <EditTodo
                        key={each.id}
                        content={each.content}
                        priority={each.priority}
                        isCompleted={each.isCompleted}
                        edittingItem={each.edittingItem}
                        id={each.id}

                        showEditItem={this.showEditItem}
                        showNormalItem={this.showNormalItem}
                        setPriorityColor={this.setPriorityColor}
                        editItem={this.props.editItem}
                        saveItem={this.props.saveItem}
                        completedItem={this.props.completedItem}
                        deleteItem={this.props.deleteItem}
                        >{each.content}
                      </EditTodo>
                    )
                  })  
                }
            </tbody>
          </table>
          
          <table className='todo-table'>
            <tbody>
              {this.props.todoList.map((each) => {
                  return (
                    <TodoItem
                      key={each.id}
                      content={each.content}
                      priority={each.priority}
                      isCompleted={each.isCompleted}
                      edittingItem={each.edittingItem}
                      id={each.id}

                      showEditItem={this.showEditItem}
                      showNormalItem={this.showNormalItem}
                      setPriorityColor={this.setPriorityColor}
                      editItem={this.props.editItem}
                      saveItem={this.props.saveItem}
                      completedItem={this.props.completedItem}
                      deleteItem={this.props.deleteItem}
                      >{each.content}
                    </TodoItem>
                  )
                })  
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

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

export default App;
