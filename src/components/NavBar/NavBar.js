import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import NavSearch from "./NavSearch";
import NavBarUser from "./NavBarUser";

const NavToggle = styled(Navbar.Toggle)`
  border: none;
`;

const CollapseContentWrapper = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;

  p {
    margin-bottom: 0;
  }
`;

export default class NavBar extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar
          expand="true"
          style={{ padding: ".5rem", marginBottom: "1.5rem" }}
        >
          <Navbar.Brand href="#home">React Dashboard</Navbar.Brand>
          <NavToggle aria-controls="basic-navbar-nav">
            <NavBarUser />
          </NavToggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <CollapseContentWrapper>
              <NavSearch />
            </CollapseContentWrapper>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
