import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Species from "./components/Species";
import "./index.css";

// import Router from "./Router";
import * as serviceWorker from "./serviceWorker";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Menu} />
                    <Route path="/" component={Home} exact />
                    <Route path="/species" component={Species} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;

ReactDOM.render(<Router />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
