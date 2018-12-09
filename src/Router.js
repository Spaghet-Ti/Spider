import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Species from "./components/Species";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ height: "100vh" }}>
                    <Route path="/" component={Menu} />
                    <Route path="/" component={Home} exact />
                    <Route path="/species" component={Species} exact />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
