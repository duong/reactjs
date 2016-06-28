import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import UserReducer from './users';


const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer,
	user: UserReducer
});
export default rootReducer;