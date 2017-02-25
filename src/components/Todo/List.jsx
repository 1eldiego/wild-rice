import React from 'react';
import Item from './Item';

const List = props => (
  <ul>
    {props.todos.map(todo => <Item key={todo.id} name={todo.name} done={todo.done} />)}
  </ul>
);

List.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
