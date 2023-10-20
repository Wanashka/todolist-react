import {connect} from 'react-redux';
import {TodoList} from './TodoList';
import {dropTodoReducer, removeTodoReducer} from '../Redux/todoReducer';
import {openModalCreateTask, modeEdit} from '../Redux/modalWindowReducer';

const mapStateToProps = (state) => ({
  task: state.todo.todos,
  searchWord: state.todo.searchTerm,
});

export default connect(mapStateToProps, {
  dropTodoReducer,
  removeTodoReducer,
  openModalCreateTask,
  modeEdit
})(TodoList);
