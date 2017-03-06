import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import AddItem from './AddItem';
import { completeTodo, addTodo, addText } from '../../actions/todoActions';
import './styles.less';

const Todo = props => (
  <ul>
    {props.todosList.map(todo => (
      <Item
        completeTodo={props.completeTodo(todo.id)}
        key={todo.id}
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

const mapStateToProps = state => ({
  todosList: state.todos.list,
  typeText: state.todos.typeText,
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => () => dispatch(completeTodo(id)),
  addTodo: () => dispatch(addTodo()),
  addText: event => dispatch(addText(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
