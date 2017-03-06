import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import todoReducer from './ducks/todo';

const reducers = combineReducers({
  todos: todoReducer,
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(logger()),
  ),
);

