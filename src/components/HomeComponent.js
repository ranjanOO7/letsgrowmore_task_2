import React, { Component } from "react";
import CardDetail from "./CardDetailComponent";
import { Nav, NavItem, NavbarBrand, Navbar } from "reactstrap";
import { baseURL } from "../shared/baseURL";
// import Loader from "./loader/loader.js";

class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            isLoaded: false,
            isClicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.getDetails = this.getDetails.bind(this);
    }

    componentDidMount() {
        fetch(baseURL)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((user) => {
                // console.log(user.data);
                this.setState({
                    ...this.state,
                    data: user.data,
                    isLoaded: true,
                });
            });
    }

    handleClick() {
        this.setState({ isClicked: true });
    }

    getDetails() {
        if (this.state.isClicked) {
            if (this.state.isLoaded)
                return <CardDetail dataSet={this.state.data} />;
            // else return <Loader />;
        } else return <div></div>;
    }

    render() {
        // console.log(this.state.data);

        return (
            <div>
                <Navbar>
                    <NavbarBrand className="title">ZIPPY</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <button onClick={this.handleClick}>
                                GET USERS
                            </button>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="card-container">{this.getDetails()}</div>
            </div>
        );
    }
}

export default Home;
