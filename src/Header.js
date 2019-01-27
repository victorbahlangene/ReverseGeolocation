// ./src/Header.js
import React, { Component } from "react";
//import logo from './opencage-white.svg';
import logo from "../src/ciuen.png";
import "./Header.css";
//import logo from "../src/ciuen.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Capstone <b>Geocoder</b> APP
        </p>
      </header>
    );
  }
}

export default Header;
