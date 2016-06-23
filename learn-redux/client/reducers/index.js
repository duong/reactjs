import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import tests from './comments';

const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer,
	tests
});
export default rootReducer;