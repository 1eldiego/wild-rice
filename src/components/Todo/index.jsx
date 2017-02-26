import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import AddItem from './AddItem';
import './styles.less';

const Todo = props => (
  <ul>
    {props.todos.map(todo => (
      <Item
        completeTodo={props.completeTodo(todo.id)}
        key={todo.id}
        name={todo.name}
        done={todo.done}
      />
    ))}
    <AddItem addTodo={props.addTodo} />
  </ul>
);

Todo.propTypes = {
  completeTodo: React.PropTypes.func.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => () => dispatch({ type: 'COMPLETE_TODO', payload: id }),
  addTodo: name => dispatch({ type: 'ADD_TODO', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
