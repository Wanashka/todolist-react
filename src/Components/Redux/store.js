import { combineReducers, legacy_createStore as createStore } from 'redux';
import todoReducer from './todoReducer';

let reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers);

export default store;
