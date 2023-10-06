const initialState = {
  isOpenModal: false, //false
};

const modalWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_CREATE_TASK':
      return {
        ...state,
        isOpenModal: true,
      };
    case 'CLOSE_MODAL_CREATE_TASK':
      return {
        ...state,
        isOpenModal: false,
      };
    default:
      return state;
  }
};

export default modalWindowReducer;

export const openModalCreateTask = () => {
  return {
    type: 'OPEN_MODAL_CREATE_TASK',
  };
};
export const closeModalCreateTask = () => {
  return {
    type: 'CLOSE_MODAL_CREATE_TASK',
  };
};
