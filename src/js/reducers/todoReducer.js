export default function todoReducer(state={
  todos: [
    ],
    fetched: false,
    fetching: false,
    error: null,
}, action){

  switch(action.type){
    case "FETCH_TODOS":{
      return {...state, todos: [...state.todos, action.payload],fetching: true}
    }
    case "FETCH_TODOS_REJECTED":{
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_TODOS_FULFILLED":{
      return {...state, fetching: false, fetched: true, todos: action.payload}
    }
    case "CREATE_TODO":{
      return{
        ...state, todos: [...state.todos, {id: Date.now(), text: action.payload, completed: false}]
      }
    }

    case "COMPLETE_TODO":{
      const newTodos = [...state.todos]
      const todoUpdate = newTodos.findIndex(todo => todo.id === action.payload)
      newTodos[todoUpdate].completed = true;

      return{...state, fetched: false, fetching: false, todos: newTodos}
    }

    case "ACTIVATE_TODO":{
      const newTodos = [...state.todos]
      const todoUpdate = newTodos.findIndex(todo => todo.id === action.payload)
      newTodos[todoUpdate].completed = false;

      return{...state, fetched: false, fetching: false, todos: newTodos}
    }

    case "DELETE_TODO":{
      return{...state , fetched:false, fetching: false, todos: [...state.todos.filter(function(el){
            return el.id !== action.payload;
        })]};
    }

  }

  return state
}
