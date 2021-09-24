import React, { Component } from "react";
import CardComponent from "./CardComponent";
// import { } from "reactstrap";

class CardDetail extends Component {
    constructor() {
        super();

        this.state = {
            // data: this.props.data,
        };
    }

    render() {
        // console.log(this.props.dataSet[0].id);

        const MakeCard = this.props.dataSet.map((data) => {
            return <CardComponent data={data} key={data.id} />;
        });

        return <div className="main">{MakeCard}</div>;
    }
}

export default CardDetail;
