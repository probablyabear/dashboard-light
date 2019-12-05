import React from "react";
import styled from "styled-components";

const SideNavSectionTitleText = styled.div`
  color: #b0b8b9;
  padding-left: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .collapse-icon {
    cursor: pointer;
  }
`;

const SideNavSectionTitle = props => {
  return (
    <SideNavSectionTitleText>
      {props.titleText}
      <i
        className="fas fa-caret-left fa-2x collapse-icon"
        onClick={props.toggleSideBar}
      />
    </SideNavSectionTitleText>
  );
};

export default SideNavSectionTitle;
