import React, { Component } from "react";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";

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
                        <div id="common-name">abc</div>
                        <hr className="m-0" />
                        <div id="latin-name">abc</div>
                    </div>
                    <div
                        className="border h-100"
                        style={{
                            display: "grid",
                            gridTemplateRows: "1fr 0 1fr 0 1fr"
                        }}
                    >
                        <div id="">abc</div>
                        <hr className="m-0" />
                        <div id="">abc</div>
                        <hr className="m-0" />
                        <div id="">abc</div>
                    </div>
                    <div id="endangered-status" className="border h-100">
                        abc
                    </div>
                    {/* Row 2 */}
                    <div id="description" className="border h-100">
                        abc
                    </div>
                    <div
                        id="Images"
                        className="border h-100"
                        style={{
                            gridArea: "2 / 2 / 4 / 4"
                        }}
                    >
                        abc
                    </div>
                    {/* Row 3 */}
                    <div id="" className="border h-100">
                        abc
                    </div>
                    {/* Row 4 */}
                    <div id="diet" className="border h-100">
                        abc
                    </div>
                    <div
                        id=""
                        className="border h-100"
                        style={{ gridArea: "4 / 2 / 6 / 3" }}
                    >
                        abc
                    </div>
                    <div
                        id=""
                        className="border h-100"
                        style={{ gridArea: "4 / 3 / 6 / 4" }}
                    >
                        abc
                    </div>
                    {/* Row 5 */}
                    <div id="habitat" className="border h-100">
                        abc
                    </div>
                </div>
                <style>
                    {
                        "\
                        #outer-grid div {\
                            padding: 4px;\
                        }\
                    "
                    }
                </style>
            </div>
        );
    }
}

export default Species;
