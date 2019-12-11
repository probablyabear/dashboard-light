import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const MainPageButton = styled(Button)`
  font-size: 0.9em;
  color: #45494a;
  border-radius: 20px;
  background: transparent;
  border: solid 1px #d4d2cc;
  transition: background 0.2s;
  padding: 10px 15px;
  :hover {
    background: #d8d6cc;
    color: #45494a;
    border: solid 1px #d4d2cc;
  }
`;

const MainPageContentButton = props => {
  return (
    <Col>
      <MainPageButton className="float-right">
        {props.buttonText}
      </MainPageButton>
    </Col>
  );
};

export default MainPageContentButton;
