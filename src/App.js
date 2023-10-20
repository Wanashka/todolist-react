import {Provider} from 'react-redux';
import './App.css';
import store from './Components/Redux/store';
import TodoListContainer from './Components/TodoList/TodoListContainer';
import HeaderContainer from './Components/Header/HeaderContainer';

function App() {
  return (
    <Provider store={store}>
      <HeaderContainer/>
      <TodoListContainer/>
    </Provider>
  );
}

export default App;
