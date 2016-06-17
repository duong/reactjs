import React from 'react';
import {render} from 'react-dom';
//import css
import css from './styles/style.styl';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import App from './pages/App';
import Home from './pages/HomeIndex';
//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/home" component={PhotoGrid}></Route>
        <Route path="/view/:postId" component={Single}></Route>
    </Route>
);
