import store from './Store';

const dispatcher = {
	dispatch: (action = { type: null }) => {
		store.dispatch(action);
	}
};

export default dispatcher;
