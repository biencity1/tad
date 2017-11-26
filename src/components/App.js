import React, { Component } from 'react';

import { MainPage, NotFound } from 'components';
import { Route, Switch } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;

