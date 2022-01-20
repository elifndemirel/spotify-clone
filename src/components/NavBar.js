import React, { Component } from "react";
import SpotifyLogo from "../assets/Spotify_Logo_CMYK_White.png";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

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
          <NavbarToggler
            onClick={this.toggleNavbar}
            style={{ border: "none" }}
          />
          <Collapse navbar isOpen={!this.state.collapsed}>
            <Nav className="ms-auto" navbar>
              <NavItem className="pe-3">
                <NavLink
                  href="/premium/"
                  style={{ color: "#fff", fontWeight: "bold" }}
                  onMouseOver={this.changeColorOver}
                  onMouseLeave={this.changeColorLeave}
                >
                  Premium
                </NavLink>
              </NavItem>
              <NavItem className="pe-3">
                <NavLink
                  href="/support/"
                  style={{ color: "#fff", fontWeight: "bold" }}
                  onMouseOver={this.changeColorOver}
                  onMouseLeave={this.changeColorLeave}
                >
                  Destek
                </NavLink>
              </NavItem>
              <NavItem className="pe-3">
                <NavLink
                  href="/download/"
                  style={{ color: "#fff", fontWeight: "bold" }}
                  onMouseOver={this.changeColorOver}
                  onMouseLeave={this.changeColorLeave}
                >
                  İndir
                </NavLink>
              </NavItem>
              <NavItem className="pe-3">
                <NavLink style={{ color: "#fff" }}>|</NavLink>
              </NavItem>
              <NavItem className="pe-3">
                <NavLink
                  href="/signup/"
                  style={{ color: "#d9dadc", fontWeight: "bold" }}
                  onMouseOver={this.changeColorOver}
                  onMouseLeave={this.changeColorGrayLeave}
                >
                  Kaydol
                </NavLink>
              </NavItem>
              <NavItem className="pe-5">
                <NavLink
                  href="/login/"
                  style={{ color: "#d9dadc", fontWeight: "bold" }}
                  onMouseOver={this.changeColorOver}
                  onMouseLeave={this.changeColorGrayLeave}
                >
                  Oturum aç
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
