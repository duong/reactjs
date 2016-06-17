//createStore(reducer, [initialState], [enhancer])
////http://redux.js.org/docs/api/createStore.html
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory} from 'react-router';
import promise from 'redux-promise';


//import the root reducer
//Actions describe the fact that something happened, but don’t specify how the application’s state changes in response. This is the job of a reducer.
import rootReducer from '../reducers/index';
import comments from '../data/comments';
import posts from '../data/posts';

//create an object for the default data
const defaultState = {
	posts,
	comments,
	postsList: {posts: {}}
}

const enhancers = compose(
	applyMiddleware(promise),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('../reducers/', () => {
		const nextRootReducer = require('../reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}
export default store;