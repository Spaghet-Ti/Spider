import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Species from "./components/Species";

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Menu} />
                    <Route path="/" component={Home} exact />
                    <Route path="/species" component={Species} exact />
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;
