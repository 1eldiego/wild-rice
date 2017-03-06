export function completeTodo(id) {
  return {
    type: 'COMPLETE_TODO',
    payload: id,
  };
}

export function addTodo() {
  return {
    type: 'ADD_TODO',
  };
}

export function addText(value) {
  return {
    type: 'ADD_TEXT',
    payload: value,
  };
}
