const initialState = {
  todos: [{
    id: 1696621259313,
    title: 'ИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИванИван',
    message: 'Hi this message 1',
    tab: 'Queue',
    createdDate: 1695987764495,
    dateCompletionTask: 1923297120000,
    Priority: 'Высокий',
  }, {id: 1, title: 'Сергей', message: 'Hi this message 2', tab: 'Queue'}, {
    id: 2,
    title: 'Михаил',
    message: 'Hi this message 3',
    tab: 'Queue'
  },

    {id: 3, title: 'Виктор', message: 'Hi this message 1', tab: 'Development'},

    {id: 4, title: 'Андрей', message: 'Hi this message 1', tab: 'Done'},
    {
      id: 5,
      title: 'title',
      message: 'Hi this message 3',
      tab: 'Done'
    },],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          title: action.title,
          message: action.description,
          tab: 'Queue',
          dateCompletionTask: action.dateCompletionTask,
        },],
      };

    case 'DROP_TODO':
      const draggedTodo = state.todos.find((item) => item.id === Number(action.id)); // id нам нужно передавать реальный id в объекте
      const remainingTodos = state.todos.filter((item) => item.id !== Number(action.id));

      return {
        ...state,
        todos: [...remainingTodos.slice(0, action.overTask), draggedTodo.item = {
          ...draggedTodo,
          tab: action.tab
        }, ...remainingTodos.slice(action.overTask),],
      }

    case 'REMOVE_TODO':
      return {
        ...state, todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;

export const addTodoReducer = (title, description, dateCompletionTask) => {
  return {
    type: 'ADD_TODO', title, description, dateCompletionTask,
  };
};

export const dropTodoReducer = (tab, id, overTask) => {
  return {
    type: 'DROP_TODO', tab, id, overTask,
  };
};
