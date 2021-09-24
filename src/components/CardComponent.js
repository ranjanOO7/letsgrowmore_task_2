import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

const CardComponent = ({ data }) => {
    return (
        <Card>
            <CardImg alt={data.first_name} src={data.avatar}></CardImg>
            <CardBody>
                <CardTitle>
                    <span>{data.first_name}</span>
                    <span>{data.last_name}</span>
                </CardTitle>
                <CardText>{data.email}</CardText>
            </CardBody>
        </Card>
    );
};

export default CardComponent;
