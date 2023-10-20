import {Provider} from 'react-redux';
import './App.css';
import store, {persistor} from './Components/Redux/store';
import TodoListContainer from './Components/TodoList/TodoListContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import {PersistGate} from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HeaderContainer/>
        <TodoListContainer/>
      < /PersistGate>
    </Provider>
  );
}

export default App;
