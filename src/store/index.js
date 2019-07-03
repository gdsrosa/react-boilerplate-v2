import { createStore, compose } from 'redux';
import { reducer } from 'ducks/App';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, enhancer());

export default store;
