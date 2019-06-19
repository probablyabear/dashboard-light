import React from "react";
import Row from "react-bootstrap/Row";

import MainPageContentButton from "../MainPageContentButton";
import MainPageTitleRowText from "./MainPageTitleRowText";

const MainPageTitleRow = props => {
  return (
    <Row style={{ marginBottom: "15px" }}>
      <MainPageTitleRowText titleText={props.titleText} />
      <MainPageContentButton buttonText={props.buttonText} />
    </Row>
  );
};

export default MainPageTitleRow;
