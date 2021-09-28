import React, { Component } from "react";

class loader extends Component {
    render() {
        return (
            <div>
                <div className="word">Loading...</div>
                <div className="overlay"></div>
            </div>
        );
    }
}

export default loader;
