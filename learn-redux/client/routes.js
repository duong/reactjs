import React from 'react';
import {render} from 'react-dom';
//import css
import css from './styles/style.styl';

import PhotoGrid from './components/PhotoGrid';

import App from './pages/App';
import HomeIndex from './pages/HomeIndex';
import SinglePhoto from './pages/SinglePhoto';
//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeIndex}></IndexRoute>
        <Route path="/view/:id" component={SinglePhoto}></Route>
    </Route>
);
