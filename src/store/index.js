import { createStore } from 'redux';
import articleReducer from '../reducer/articlereducer';

const store = createStore(articleReducer);

export default store;
