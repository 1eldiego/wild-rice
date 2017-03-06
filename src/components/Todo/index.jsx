import React from 'react';
import Item from './Item';
import AddItem from './AddItem';
import './styles.less';

const Todo = props => (
  <ul>
    {props.todosList.map(todo => (
      <Item
        key={todo.id}
        id={todo.id}
        completeTodo={props.completeTodo}
        name={todo.name}
        done={todo.done}
      />
    ))}
    <AddItem addTodo={props.addTodo} typeText={props.typeText} addText={props.addText} />
  </ul>
);

Todo.defaultProps = {
  typeText: '',
};

Todo.propTypes = {
  completeTodo: React.PropTypes.func.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  typeText: React.PropTypes.string,
  addText: React.PropTypes.func.isRequired,
  todosList: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Todo;
