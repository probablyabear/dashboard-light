import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";

import NavSearch from "./NavSearch";
import NavBarUser from "./NavBarUser";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="mb-3">
          <NavbarBrand href="/">Brand</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto ml-4">
              <NavSearch />
            </Nav>
            <Navbar.Text className="mr-3">
              <i className="far fa-comment" style={{ cursor: "pointer" }} />
            </Navbar.Text>
            <Nav.Link>
              <NavBarUser />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
