import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Analise from './pages/Analise';
// import Sobre from './pages/Sobre';
import Ajudar from './pages/Ajudar';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/analise" component={Analise} />
                {/* <Route path="/sobre" exact component={Sobre} /> */}
                <Route path="/ajudar" exact component={Ajudar} />
            </Switch>
        </BrowserRouter>
    );
}