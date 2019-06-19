import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SideNavItem from "./SideNavItem";
import SideNavSectionTitle from "./SideNavSectionTitle";

const WrapperDiv = styled.div`
  padding: 10px;
  margin: 50px 0 0 40px;
  width: 260px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: #ffffff;
  transition: width 0.2s;

  &.collapsed {
    width: 20px;
    margin-left: 15px;
  }
`;

class SideNavWrapper extends Component {
  state = {
    isOpen: true
  };

  componentDidMount() {
    if (window.innerWidth < 992) {
      this.setState({
        isOpen: false
      });
    }
  }

  toggleSideBar = event => {
    console.log("collapse clicked");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <WrapperDiv
        className={this.state.isOpen ? "sideBar" : "sideBar collapsed"}
      >
        {!this.state.isOpen ? (
          <i
            className="fas fa-caret-right"
            onClick={this.toggleSideBar}
            style={{ cursor: "pointer", color: "#B0B8B9" }}
          />
        ) : (
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
        )}
      </WrapperDiv>
    );
  }
}

export default SideNavWrapper;
