import React, { Component } from "react";
import ReactDOM from "react-dom";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import Router from "../index";

const data = require("../data/species.json");

var presentSpecies;

class Species extends Component {
    render() {
        return (
            <div
                className="container-fluid mb-2"
                style={{
                    position: "absolute",
                    height: "calc(100% - 72px)",
                    bottom: "8px"
                }}
            >
                <div
                    id="outer-grid"
                    className="h-100"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridTemplateRows: "repeat(5, 1fr)"
                    }}
                >
                    {/* Row 1 */}
                    <div
                        className="border h-100"
                        style={{
                            display: "grid",
                            gridTemplateRows: "1fr 0 1fr"
                        }}
                    >
                        <div id="common-name" className="cell">
                            <h6 className="cell-name">Common Name: </h6>
                            <div className="cell-content">
                                <select
                                    id="common-name-selector"
                                    className="form-control"
                                    defaultValue=""
                                    ref={input => (this.menu = input)}
                                >
                                    {setInterval(() => {
                                        presentSpecies = this.menu
                                            ? this.menu.value
                                            : undefined;
                                        ReactDOM.render(
                                            <Router />,
                                            document.getElementById("root")
                                        );
                                    }, 500)}
                                    <option value="">
                                        Select by Common Name
                                    </option>
                                    {data.data.species.map(option => {
                                        return (
                                            <option
                                                value={option.index}
                                                key={option.id}
                                            >
                                                {option.common_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div id="latin-name" className="cell">
                            <h6 className="cell-name">Latin Name: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies]
                                          .latin_name
                                    : ""}
                            </div>
                        </div>
                    </div>
                    <div
                        className="border h-100"
                        style={{
                            display: "grid",
                            gridTemplateRows: "1fr 0 1fr 0 1fr"
                        }}
                    >
                        <div id="venom-status" className="cell">
                            <h6 className="cell-name">Venom Status: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies].venom
                                    : ""}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div id="web-type" className="cell">
                            <h6 className="cell-name">Web Type: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies].web
                                    : ""}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div id="time-period" className="cell">
                            <h6 className="cell-name">Time Period: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies].time
                                    : ""}
                            </div>
                        </div>
                    </div>
                    <div
                        className="border h-100"
                        style={{
                            display: "grid",
                            gridTemplateRows: "1fr 0 1fr"
                        }}
                    >
                        <div id="classification" className="cell h-100">
                            <h6 className="cell-name">Classification: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies]
                                          .classification
                                    : ""}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div id="predators" className="cell h-100">
                            <h6 className="cell-name">Predators: </h6>
                            <div className="cell-content">
                                {presentSpecies
                                    ? data.data.species[presentSpecies]
                                          .predators
                                    : ""}
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div id="description" className="cell border h-100">
                        <h6 className="cell-name">Description: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].description
                                : ""}
                        </div>
                    </div>
                    <div
                        id="gallery"
                        className="cell border h-100"
                        style={{
                            gridArea: "2 / 2 / 4 / 4"
                        }}
                    >
                        <div className="cell-content">
                            <div
                                id="gallery-carousel"
                                className="carousel slide"
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%"
                                }}
                                data-ride="carousel"
                                data-interval="false"
                            >
                                <ol className="carousel-indicators">
                                    {presentSpecies
                                        ? data.data.species[
                                              presentSpecies
                                          ].gallery.map((image, index) => {
                                              return (
                                                  <li
                                                      data-target="#gallery-carousel"
                                                      data-slide-to={index}
                                                      className={
                                                          index === 0
                                                              ? " active"
                                                              : ""
                                                      }
                                                      key={"si" + index}
                                                  />
                                              );
                                          })
                                        : ""}
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="1"
                                    />
                                    <li
                                        data-target="#carouselExampleIndicators"
                                        data-slide-to="2"
                                    />
                                </ol>
                                <div className="carousel-inner">
                                    {presentSpecies
                                        ? data.data.species[
                                              presentSpecies
                                          ].gallery.map((image, index) => {
                                              return (
                                                  <div
                                                      className={
                                                          "carousel-item" +
                                                          (index === 0
                                                              ? " active"
                                                              : "")
                                                      }
                                                      key={"si" + index}
                                                  >
                                                      <img
                                                          className="d-block w-100"
                                                          src={image}
                                                          style={{
                                                              maxHeight: "100%",
                                                              maxWidth: "100%"
                                                          }}
                                                          alt="Spider Gallery"
                                                      />
                                                  </div>
                                              );
                                          })
                                        : ""}
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#gallery-carousel"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" />
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#gallery-carousel"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span className="carousel-control-next-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Row 3 */}
                    <div id="conservation-status" className="cell border h-100">
                        <h6 className="cell-name">Conservation Status: </h6>
                        <div className="cell-content">
                            {presentSpecies ? (
                                <div className="text-center">
                                    <b>
                                        {
                                            data.data.species[presentSpecies]
                                                .conservation.name
                                        }
                                    </b>
                                    <br />
                                    <img
                                        src={require("../data/images/conservation_status/" +
                                            data.data.species[presentSpecies]
                                                .conservation.icon +
                                            ".png")}
                                        style={{ width: "100%" }}
                                        alt="Conservation Status Icon"
                                    />
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {/* Row 4 */}
                    <div id="what-to-feed" className="cell border h-100">
                        <h6 className="cell-name">What to Feed: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].feed
                                : ""}
                        </div>
                    </div>
                    <div id="distribution" className="cell border h-100">
                        <h6 className="cell-name">distribution: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].distribution
                                : ""}
                        </div>
                        <div />
                    </div>
                    <div
                        className="cell border h-100"
                        style={{ gridArea: "4 / 3 / 6 / 4" }}
                    >
                        <h6 className="cell-name">Missing 5: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].missing5
                                : ""}
                        </div>
                    </div>
                    {/* Row 5 */}
                    <div id="habitat" className="cell border h-100">
                        <h6 className="cell-name">Habitat: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].habitat
                                : ""}
                        </div>
                        <div />
                    </div>
                    <div id="how-to-keep-them" className="cell border h-100">
                        <h6 className="cell-name">How to Keep Them: </h6>
                        <div className="cell-content">
                            {presentSpecies
                                ? data.data.species[presentSpecies].keeping
                                : ""}
                        </div>
                        <div />
                    </div>
                </div>
                <style>
                    {
                        "\
                        #outer-grid > div {\
                            padding: 2px;\
                        }\
                        \
                        .cell-name {\
                            font-size: 14px;\
                            margin-bottom: 2px;\
                        }\
                        .cell-content {\
                            padding: 2px 2px 0 2px;\
                            font-size: 12px;\
                        }\
                    "
                    }
                </style>
            </div>
        );
    }
}

export default Species;
