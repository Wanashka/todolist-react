import { Provider } from 'react-redux';
import './App.css';
import store from './Components/Redux/store';
import TodoListContainer from './Components/TodoList/TodoListContainer';
import ModalCreateTaskContainer from './Components/Modal/ModalCreateTask/ModalCreateTaskContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App() {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <TodoListContainer />
      <ModalCreateTaskContainer />
    </Provider>
  );
}

export default App;
