import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import todoReducer from './reducers/todoReducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(todoReducer, middleware)
