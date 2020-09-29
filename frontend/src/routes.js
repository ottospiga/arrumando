import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Newincident from './pages/Newincident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/register" component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/incidents/new" exact component={Newincident} /> */}
            </Switch>
        </BrowserRouter>
    );
}