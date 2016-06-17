import React from 'react';
import ReactDOM from 'react-dom';
//import css
//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//https://github.com/reactjs/react-redux/blob/master/docs/api.md
//<Provider store>Makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping the root component in <Provider>.
import { Provider } from 'react-redux';
import store, { history } from './stores/configureStore';
import routes from './routes';
console.log('a');
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}  routes={routes} />
	</Provider>,
	document.getElementById('root')
);
