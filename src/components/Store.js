import { createStore } from 'redux';
import Reducer from './Reducer';
import ActionHandler from './ActionHandler';

let initialState = {
	GameObject: []
};

const store = createStore(Reducer, initialState);
store.subscribe(ActionHandler);

export default store;
