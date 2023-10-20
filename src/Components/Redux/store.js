import {combineReducers, legacy_createStore as createStore} from 'redux';
import todoReducer from './todoReducer';
import modalWindowReducer from './modalWindowReducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

let reducers = combineReducers({
  todo: todoReducer,
  modalCreateTask: modalWindowReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)

export const persistor = persistStore(store);
export default store;

