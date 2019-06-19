import React from "react";
import Row from "react-bootstrap/Row";

import LargeFeatureRowTable from "./LargeFeatureRowTable";
import LargeFeatureChart from "./LargeFeatureChart";

const DATA = [
  {
    id: 1,
    metric: "Caffeine sensitivity",
    measurement: 75
  },
  {
    id: 2,
    metric: "Carbohydrate sensitivity",
    measurement: 32
  },
  {
    id: 3,
    metric: "Saturated fat sensitivity",
    measurement: 97
  },
  {
    id: 4,
    metric: "Carbohydrate intake",
    measurement: 29
  }
];

const LargeFeatureRow = props => {
  return (
    <Row>
      <LargeFeatureRowTable tableTitle="Basal Metabolism" tableData={DATA} />
      <LargeFeatureChart chartTitle="Caffeine sensitivity" />
    </Row>
  );
};

export default LargeFeatureRow;
