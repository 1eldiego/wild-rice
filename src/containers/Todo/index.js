import { connect } from 'react-redux';
import { completeTodo, addTodo, addText } from '../../redux/ducks/todo';
import Todo from '../../components/Todo';

const mapStateToProps = state => ({
  todosList: state.todos.list,
  typeText: state.todos.typeText,
});

const mapDispatchToProps = dispatch => ({
  completeTodo: id => dispatch(completeTodo(id)),
  addTodo: () => dispatch(addTodo()),
  addText: event => dispatch(addText(event.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
