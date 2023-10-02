import { connect } from 'react-redux';
import { TodoList } from './TodoList';

const mapStateToProps = (state) => ({
  task: state.todo.todos,
  Queue: state.todo.todos.Queue,
});

export default connect(mapStateToProps, {})(TodoList);
