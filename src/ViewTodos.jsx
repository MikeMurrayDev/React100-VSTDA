import React, {Component} from 'react';
import TodoItem from './TodoItem.jsx';
import EditTodo from './EditTodo.jsx';

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

  export default ViewTodos;
