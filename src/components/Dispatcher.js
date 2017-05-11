import store from './Store';

const dispatcher = {
	dispatch: (action = {}) => {
		store.dispatch(action);
	}
};
