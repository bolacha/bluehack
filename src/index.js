import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    , document.getElementById('root'));
