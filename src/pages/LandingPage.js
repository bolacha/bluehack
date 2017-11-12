import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from '../components/AppBar';
import TabsBar from '../components/TabsBar';

export default class LandingPage extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <AppBar />
                <TabsBar />
            </div>
        );
    }
}
