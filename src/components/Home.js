import React, { Component } from "react";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to Spiders & Tarantulas!</h1>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Learn about the spiders!</h5>
                        <p className="card-text">
                            Learn about the common spiders in North Carolina and{" "}
                            <b>how to keep them</b>. Check it out!
                        </p>
                        <a href="./species" className="btn btn-primary">
                            View
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
