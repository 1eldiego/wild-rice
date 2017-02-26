import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoReducer from './reducers/todoReducer';

const reducers = combineReducers({
  todos: todoReducer,
});

export default createStore(reducers, {}, applyMiddleware(logger()));
