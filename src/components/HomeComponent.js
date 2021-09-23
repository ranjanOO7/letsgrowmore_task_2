import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((user) => {
                console.log(user);
                this.setState = {
                    data: user.data,
                };
            });
    }

    render() {
        return <div>Hello Again !!!</div>;
    }
}

export default Home;
