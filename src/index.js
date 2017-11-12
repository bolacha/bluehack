import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LandingPage from './pages/LandingPage';

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
    , document.getElementById('root'));
