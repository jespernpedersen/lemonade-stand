import { createStore } from 'redux';
import { standReducer } from "./../reducers";

const store = createStore(standReducer);

export default store;