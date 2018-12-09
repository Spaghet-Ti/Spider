import React, { Component } from "react";
import { jQuery as $ } from "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to Spider!</h1>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Learn about the spiders!</h5>
                        <p className="card-text">
                            The are many common species of spiders, check it
                            out!
                        </p>
                        <a href="/species" className="btn btn-primary">
                            View
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
