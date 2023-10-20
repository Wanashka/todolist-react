import {connect} from 'react-redux';
import {ModalCreateTask} from './ModalCreateTask';
import {closeModalCreateTask, modeEdit} from '../../Redux/modalWindowReducer';
import {addTodoReducer, editTodoReducer} from '../../Redux/todoReducer';

const mapStateToProps = (state) => ({
  isOpen: state.modalCreateTask.isOpenModal,
  ifModeEdit: state.modalCreateTask.modeEdit,
});

export default connect(mapStateToProps, {
  closeModalCreateTask,
  addTodoReducer,
  editTodoReducer,
  modeEdit
})(ModalCreateTask);
