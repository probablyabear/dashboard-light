import React from "react";
import Row from "react-bootstrap/Row";

import SmallFeatureRowItem from "./SmallFeatureRowItem";

const SmallFeatureRow = props => {
  return (
    <Row>
      <SmallFeatureRowItem statTitle="Motor genes" statValue="27" green />
      <SmallFeatureRowItem
        statTitle="Ancestral sources"
        statValue="17"
        orange
      />
      <SmallFeatureRowItem statTitle="Health risks" statValue="107" pink />
      <SmallFeatureRowItem
        statTitle="Psychological traits"
        statValue="6"
        blue
      />
    </Row>
  );
};

export default SmallFeatureRow;
