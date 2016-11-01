import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, makeTodoActive } from '../actions/todoActions'
//TODO create external todo dumb component

@connect((store)=>{
  return {
    todos:store.todos
  }
})
class Completed extends React.Component{
  //TODO map data to new const that holds new TodoComponents
  //TODO delete todo when delete clicked
  //TODO change to active when active clicked

  handleDeleteClick(id){
    this.props.dispatch(deleteTodo(id))
  }

  handleActivateClick(id){
    this.props.dispatch(makeTodoActive(id))
  }

  render(){
    const { todos } = this.props;

    const completedTodos = todos.filter(function(todo){
      if(todo.completed == true){
        return todo
      }
    })

    const mappedTodos = completedTodos.map(todo =>

      <div className='todoComponent' key={todo.id}>
        <ul>
          <li class="todoComponentText">
            {todo.text}<br />
          </li>

          <li class="todoComponentCompleteClick" onClick={()=>this.handleActivateClick(todo.id)}>
            Make active
          </li>

          <li class="toDoComponetDeleteClick" onClick={()=>this.handleDeleteClick(todo.id)}>
            X
          </li>
        </ul>
      </div>
    )

    return(
      <div className="todoComponent">
        <h1>Completed Todos</h1>
        {mappedTodos}
      </div>
    )
  }
}

//TODO add connect decorator
export default Completed
