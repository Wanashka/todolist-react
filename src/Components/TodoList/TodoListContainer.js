import {connect} from 'react-redux';
import {TodoList} from './TodoList';
import {dropTodoReducer} from '../Redux/todoReducer';

const mapStateToProps = (state) => ({
    task: state.todo.todos,
});

export default connect(mapStateToProps, {dropTodoReducer})(TodoList);
