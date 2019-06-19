import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import MainPageTitleRow from "./TitleRow/MainPageTitleRow";
import SmallFeatureRow from "../MainPageContent/SmallFeatureRow/SmallFeatureRow";
import LargeFeatureRow from "./LargeFeatureRow/LargeFeatureRow";

const PageContentWrapper = styled(Container)`
  background: #f9f8f2;
  border-radius: 20px;
  margin: 0 15px 0 0;
  padding: 40px 25px;
  min-height: 80vh;
`;

const MainPageContent = () => {
  return (
    <PageContentWrapper fluid={true}>
      <MainPageTitleRow titleText="Gene Report" buttonText="View all" />
      <SmallFeatureRow />
      <MainPageTitleRow
        titleText="Motor Gene (27 items)"
        buttonText="Download all"
      />
      <LargeFeatureRow />
    </PageContentWrapper>
  );
};

export default MainPageContent;
