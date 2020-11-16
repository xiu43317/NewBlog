import { createStore } from 'redux';
import todoReducer from '../reducer/todolists';

const store = createStore(todoReducer);

export default store;
