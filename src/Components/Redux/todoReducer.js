const initialState = {
  todos: {
    Queue: [
      {
        id: 1,
        title: 'title task',
        message: 'Hi this message 1',
        tab: 'Queue',
        createdDate: 1695987764495,
        endDate: 1695988086331,
        Priority: 'Высокий',
      },
      { id: 2, title: 'title task 2', message: 'Hi this message 2', tab: 'Queue' },
      { id: 3, title: 'title task 3', message: 'Hi this message 3', tab: 'Queue' },
    ],
    Development: [{ id: 1, title: 'title task', message: 'Hi this message 1', tab: 'Development' }],
    Done: [
      { id: 1, title: 'title task', message: 'Hi this message 1', tab: 'Done' },
      { id: 3, title: 'title task 3', message: 'Hi this message 3', tab: 'Done' },
    ],
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          Queue: [...state.todos.Queue, { id: Date.now(), title: action.title, message: action.description }],
        },
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case 'VIEW_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;

export const addTodoReducer = (title, description) => {
  return {
    type: 'ADD_TODO',
    title,
    description,
  };
};
export const viewTodoReducer = (id) => {
  return {
    type: 'VIEW_TODO',
    id,
  };
};
