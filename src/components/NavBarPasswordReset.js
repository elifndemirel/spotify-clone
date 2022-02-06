import React, { Component } from "react";
import SpotifyLogo from "../assets/Spotify_Logo_CMYK_White.png";
import { Navbar, NavbarBrand } from "reactstrap";

export default class NavBar extends Component {
  changeColorOver(e) {
    e.target.style.color = "#1ed760";
  }

  changeColorLeave(e) {
    e.target.style.color = "#fff";
  }

  changeColorGrayLeave(e) {
    e.target.style.color = "#d9dadc";
  }

  render() {
    return (
      <div>
        <Navbar
          dark
          expand="lg"
          full
          light
          style={{ backgroundColor: "black" }}
        >
          <NavbarBrand href="/" className="pt-2 pb-2 ps-lg-5 ps-sm-5 ps-md-4">
            <img src={SpotifyLogo} style={{ width: "130px" }} />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
