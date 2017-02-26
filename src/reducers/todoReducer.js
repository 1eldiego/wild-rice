const initialState = [
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
];

const todoReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case 'COMPLETE_TODO':
      newState = state.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, done: true };
        }

        return todo;
      });
      break;

    case 'ADD_TODO':
      newState = [...state, action.payload];
      break;

    default:
      newState = state;
  }

  return newState;
};

export default todoReducer;
