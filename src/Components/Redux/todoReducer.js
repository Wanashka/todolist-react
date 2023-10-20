const initialState = {
    todos: [
      {
        id: 1696621259313,
        title: 'Сделать коммит',
        message: 'Проиндексировать, закоммитить и запушить)',
        tab: 'Queue',
        dateCompletionTask: 1923297120000,
        Priority: 'Высокий',
      },
      {
        id: 1697708024503,
        title: 'Сделать правки',
        message: 'Исправить размер модальных окон в мобильном разрешении',
        tab: 'Development',
        dateCompletionTask: 1694523600000,
        Priority: 'Низкий',
      },
      {
        id: 1697799327351,
        title: 'Сверстать страницу',
        message: 'Сверстать страницу, сделать адаптивную страницу todo',
        tab: 'Done',
        dateCompletionTask: 1701334800000,
        Priority: 'Средний',
      },
    ],
    searchTerm: '',
  }
;

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
          Priority: action.priority,
        },],
      };

    case 'DROP_TODO':
      const draggedTodo = state.todos.find((item) => item.id === Number(action.id)); // id нам нужно передавать реальный id в объекте
      const remainingTodos = state.todos.filter((item) => item.id !== Number(action.id));
      const stepDrop = () => {
        if (state.todos.indexOf(draggedTodo) > action.overTask) {
          return (1)
        } else {
          return (0)
        }
      }

      return {
        ...state,
        todos: [...remainingTodos.slice(0, action.overTask + stepDrop()),
          draggedTodo.item = {...draggedTodo, tab: action.tab},
          ...remainingTodos.slice(action.overTask + stepDrop())],
      };

    case 'EDIT_TODO':
      const arrayEditFunc = () => {
        return state.todos.map((item) => {
          if (item.id === action.id) {
            return {
              ...item, title: action.title,
              message: action.description,
              dateCompletionTask: action.dateCompletionTask,
              Priority: action.priority
            }
          }
          return item;
        })
      }

      return {
        ...state,
        todos: arrayEditFunc(),
      }

    case 'REMOVE_TODO':
      return {
        ...state, todos: state.todos.filter((item) => item.id !== action.id),
      };

    case 'SEARCH_TODO':
      return {
        ...state,
        searchTerm: action.searchWord,
      };

    default:
      return state;
  }
};

export default todoReducer;

export const addTodoReducer = (title, description, dateCompletionTask, priority) => {
  return {
    type: 'ADD_TODO', title, description, dateCompletionTask, priority
  };
};

export const removeTodoReducer = (id) => {
  return {
    type: 'REMOVE_TODO', id,
  }
}

export const dropTodoReducer = (tab, id, overTask) => {
  return {
    type: 'DROP_TODO', tab, id, overTask,
  };
};

export const editTodoReducer = (id, title, description, dateCompletionTask, priority) => {
  return {
    type: 'EDIT_TODO', id, title, description, dateCompletionTask, priority,
  }
}

export const searchTodoReducer = (searchWord) => {
  return {
    type: 'SEARCH_TODO', searchWord,
  }
}

