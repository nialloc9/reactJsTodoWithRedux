import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Active from './Active'
import Completed from './Completed'
import { createTodo, fetchTodos } from '../actions/todoActions'

//connect decorator.. gets data from store
@connect((store)=>{
    return {
      todos:store.todos
    }
})

class Layout extends React.Component {

  //get todos when component is about to mount
  componentWillMount(){
    this.props.dispatch(fetchTodos());
  }

  //create todo click
  handleCreateTodoClick(){
    const newToDo = this.refs.createTodo.value;
    this.refs.createTodo.value = ''
    this.props.dispatch(createTodo(newToDo))
  }

  //render dashboard to screen
  render(){
    return(
      <div>
        <button className="todoComponentBtn" onClick={this.handleCreateTodoClick.bind(this)}>Create</button>
        <input className="todoComponentCreateInput" ref="createTodo"/>
        <Link to='/'><button className="todoComponentBtn">Home</button></Link>
        <Link to='/completed'><button className="todoComponentBtn">Completed</button></Link>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
