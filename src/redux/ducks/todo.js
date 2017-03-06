import uniqid from 'uniqid';
import { createAction, handleActions } from 'redux-actions';

export const completeTodo = createAction('TODO_COMPLETE');
export const addTodo = createAction('TODO_ADD');
export const addText = createAction('TODO_TYPE_NAME');

const initialState = {
  typeText: '',
  list: [],
};

export default handleActions({
  TODO_COMPLETE: (state, action) => ({
    ...state,
    list: state.list.map((todo) => {
      if (action.payload === todo.id) {
        return { ...todo, done: true };
      }

      return todo;
    }),
  }),

  TODO_ADD: state => ({
    ...state,
    list: [
      ...state.list,
      {
        id: uniqid(),
        done: false,
        name: state.typeText,
      },
    ],
    typeText: '',
  }),

  TODO_TYPE_NAME: (state, action) => ({
    ...state,
    typeText: action.payload,
  }),
}, initialState);
