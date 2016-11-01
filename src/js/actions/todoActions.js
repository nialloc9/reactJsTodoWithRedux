export function fetchTodos(){
  return{
    type: "FETCH_TODOS_FULFILLED",
    payload: [{
      id:0,
      text: 'Get Milk',
      completed: false
    },
    {
      id:1,
      text: 'Do Laundry',
      completed: true
    }]
  }
}

export function createTodo(text){
  return{
    type: 'CREATE_TODO',
    payload: text
  }
}

export function completeTodo(id){
  return{
    type: 'COMPLETE_TODO',
    payload: id
  }
}

export function makeTodoActive(id){
  return{
    type: 'ACTIVATE_TODO',
    payload: id
  }
}

export function deleteTodo(id){
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
