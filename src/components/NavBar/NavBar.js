import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import NavSearch from "./NavSearch";
import NavBarUser from "./NavBarUser";

export default class NavBar extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar
          expand="lg"
          style={{ padding: ".5rem", marginBottom: "1.5rem" }}
        >
          <Navbar.Brand href="#home">React Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
            <NavSearch />
            <NavBarUser />
          </Navbar.Collapse>
        </Navbar>
        {/* <Navbar className="mb-3">
          <Navbar.Brand href="/" className="mr-auto">
            Brand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavSearch />
            <Navbar.Text className="mr-auto">
            <i className="far fa-comment" style={{ cursor: "pointer" }} />
          </Navbar.Text>
            <Nav.Link>
              <NavBarUser />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar> */}
      </Container>
    );
  }
}
