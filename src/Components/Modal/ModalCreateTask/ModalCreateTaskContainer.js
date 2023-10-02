import { connect } from 'react-redux';
import { ModalCreateTask } from './ModalCreateTask';
import { closeModalCreateTask } from '../../Redux/modalWindowReducer';
import { addTodoReducer } from '../../Redux/todoReducer';

const mapStateToProps = (state) => ({
  isOpen: state.modalCreateTask.isOpenModal,
});

export default connect(mapStateToProps, { closeModalCreateTask, addTodoReducer })(ModalCreateTask);
