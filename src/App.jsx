import React, { Component } from 'react';
import './css/style.css';
import ViewTodos from './ViewTodos.jsx';
import AddNewTodo from './AddNewTodo.jsx';

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

export default App;
