import React, { Component } from "react";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Menu extends Component {
    render() {
        return (
            <nav id="menu" className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    Spiders & Tarantulas
                </a>
            </nav>
        );
    }
}

export default Menu;
