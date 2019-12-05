import React, { Component, Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import SideNavItem from "./SideNavItem";
import SideNavSectionTitle from "./SideNavSectionTitle";
import { motion } from "framer-motion";

const WrapperDiv = styled(motion.div)`
  padding: 0 15px;
  width: 260px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: #ffffff;
`;

const Expander = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  color: #b0b8b9;
  cursor: pointer;
  margin-top: 20px;
`;

const variants = {
  open: { width: "260px" },
  closed: { width: "50px" }
};

class SideNavWrapper extends Component {
  state = {
    isOpen: true
  };

  toggleSideBar = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <WrapperDiv
        className="sideBar"
        animate={this.state.isOpen ? "open" : "closed"}
        variants={variants}
      >
        {this.state.isOpen ? (
          <Fragment>
            <SideNavSectionTitle
              titleText="Tasks"
              toggleSideBar={this.toggleSideBar}
            />
            <SideNavItem
              navIcon="fas fa-thumbtack"
              navItemText="My Tasks"
              destination="/"
            />
            <SideNavItem
              navIcon="fas fa-tasks"
              navItemText="Other Tasks"
              destination="/"
            />
            <SideNavItem
              navIcon="fas fa-calendar-day"
              navItemText="Scheduled"
              destination="/"
              lastInSection={true}
            />
            <SideNavSectionTitle
              titleText="Workflow"
              toggleSideBar={this.toggleSideBar}
            />
            <SideNavItem
              navIcon="fas fa-users"
              navItemText="My Team"
              destination="/"
            />
            <SideNavItem
              navIcon="fas fa-project-diagram"
              navItemText="My Projects"
              destination="/"
            />
            <SideNavItem
              navIcon="fas fa-folder"
              navItemText="My Documents"
              destination="/"
            />
          </Fragment>
        ) : (
          <Expander>
            <i className="fas fa-bars" onClick={this.toggleSideBar}></i>
          </Expander>
        )}
      </WrapperDiv>
    );
  }
}

export default SideNavWrapper;
