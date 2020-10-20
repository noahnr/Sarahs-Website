import React, { Component } from "react";
import "./style.css";
import Title from "../Title"

class Header extends Component {
    render() {
        return (
           <div class="jumbotron">
            <Title> Welcome to PityPicnic!</Title>
           </div>
        );
    }
}

export default Header;