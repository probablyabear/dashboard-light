import React from "react";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const TitleText = styled.h3`
  color: #45494a;
  font-weight: 300;
`;

const MainPageTitleRowText = props => {
  return (
    <Col>
      <TitleText>{props.titleText}</TitleText>
    </Col>
  );
};

export default MainPageTitleRowText;
