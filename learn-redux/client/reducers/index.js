import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer,
	test: 'test2',
});
export default rootReducer;