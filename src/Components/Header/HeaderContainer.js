import {Header} from './Header';
import {connect} from 'react-redux';
import {openModalCreateTask} from '../Redux/modalWindowReducer';
import {searchTodoReducer} from '../Redux/todoReducer';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {openModalCreateTask, searchTodoReducer})(Header);
