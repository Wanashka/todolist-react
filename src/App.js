import { Provider } from 'react-redux';
import './App.css';
import store from './Components/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="header">
          <div className="header-logo">TODO</div>
        </div>

        <div className="todo-task">
          <div className="Tab-Queue">
            <div className="Queue">Queue</div>
            <span>Task</span>
            <span>Task</span>
            <span>Task</span>
          </div>

          <div className="Tab-Development">
            <div className="Development">Development</div>
            <span>Task</span>
            <span>Task</span>
            <span>Task</span>
            <span>Task</span>
            <span>Task</span>
          </div>

          <div className="Tab-Done">
            <div className="Done">Done</div>
            <span>Task</span>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
