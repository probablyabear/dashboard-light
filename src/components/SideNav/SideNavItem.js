import React from "react";
import styled from "styled-components";

const SideNavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  padding: 10px 30px;
  border-radius: 25px;
  margin: 3px 0;
  :hover {
    background: #f9f8f2;
  }
`;

const NavAnchor = styled.a`
  text-decoration: none !important;
  margin-bottom: ${props => (props.lastInSection ? "40px" : "0")};
`;

const NavIcon = styled.i`
  margin-right: 20px;
  color: #272e2e;
`;

const NavText = styled.p`
  margin: 0;
  color: #272e2e;
  text-decoration: none;
`;

const SideNavItem = props => {
  return (
    <NavAnchor href={props.destination} lastInSection={props.lastInSection}>
      <SideNavItemWrapper>
        <NavIcon className={props.navIcon} />
        <NavText>{props.navItemText}</NavText>
      </SideNavItemWrapper>
    </NavAnchor>
  );
};

export default SideNavItem;
