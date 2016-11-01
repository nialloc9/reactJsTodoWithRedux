import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos, completeTodo, deleteTodo } from '../actions/todoActions'

@connect((store)=>{
    return {
      todos:store.todos
    }
})

class Active extends React.Component{


  handleDeleteClick(id){
    this.props.dispatch(deleteTodo(id))
  }

  handleCompleteClick(id){
    this.props.dispatch(completeTodo(id))
  }

  render(){

    const { todos } = this.props;
    const activeTodos = todos.filter(function(todo){
      if(todo.completed == false){
        return todo
      }
    })

    const mappedActiveTodos = activeTodos.map(todo =>
      <div className='todoComponent' key={todo.id}>
        <ul>
          <li class="todoComponentText">
            {todo.text}<br />
          </li>

          <li class="todoComponentCompleteClick" onClick={()=>this.handleCompleteClick(todo.id)}>
            Complete
          </li>

          <li class="toDoComponetDeleteClick" onClick={()=>this.handleDeleteClick(todo.id)}>
            X
          </li>
        </ul>
      </div>
    )

    return(
      <div>
          <h1>Active Todos</h1>
          <ul>{ mappedActiveTodos }</ul>
      </div>
    )
  }
}

export default Active
