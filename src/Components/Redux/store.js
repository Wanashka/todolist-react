import { combineReducers, legacy_createStore as createStore } from 'redux';
import todoReducer from './todoReducer';
import modalWindowReducer from './modalWindowReducer';

let reducers = combineReducers({
  todo: todoReducer,
  modalCreateTask: modalWindowReducer,
});

const store = createStore(reducers);

export default store;
