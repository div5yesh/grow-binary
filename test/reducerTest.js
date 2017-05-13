import { assert } from 'chai';

import dispatcher from '../src/components/Dispatcher';
import store from '../src/components/Store';

describe('test reducer', function() {

	it('initial store state', function() {
		let initialState = {
			GameObject: []
		};

		assert.equal(store.getState().GameObject.length, initialState.GameObject.length, "invalid initial store state");
	});

	it('no action', function() {
		let initialState = store.getState();
		dispatcher.dispatch();
		assert.equal(store.getState(), initialState, "empty action must not change store");
	});
});
