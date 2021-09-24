import React, { Component } from "react";
import CardComponent from "./CardComponent";

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
            return (
                <div key={data.id}>
                    <CardComponent data={data} key={data.id} />
                </div>
            );
        });

        return <div>{MakeCard}</div>;
    }
}

export default CardDetail;
