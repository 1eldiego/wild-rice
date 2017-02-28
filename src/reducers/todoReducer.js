import uniqid from 'uniqid';

const initialState = {
  typeText: '',
  list: [
    {
      id: 'todo1',
      name: 'Comprar adornos navideños',
      done: false,
    },
    {
      id: 'todo2',
      name: 'Sacar la basura',
      done: true,
    },
    {
      id: 'todo3',
      name: 'Entrenar a la pandilla',
      done: true,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case 'COMPLETE_TODO':
      newState = {
        ...state,
        list: state.list.map((todo) => {
          if (action.payload === todo.id) {
            return { ...todo, done: true };
          }

          return todo;
        }),
      };
      break;

    case 'ADD_TODO':
      newState = {
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
      };
      break;

    case 'ADD_TEXT':
      newState = {
        ...state,
        typeText: action.payload,
      };
      break;

    default:
      newState = state;
  }

  return newState;
};

export default todoReducer;
