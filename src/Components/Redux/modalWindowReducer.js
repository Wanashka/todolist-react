const initialState = {
  isOpenModal: false, //false
  modeEdit: false,
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
    case 'MODE_EDIT':
      return {
        ...state,
        modeEdit: action.mode,
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
export const modeEdit = (mode) => {
  return {
    type: "MODE_EDIT", mode,
  }
}

