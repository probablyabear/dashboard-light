import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import MainPageTitleRow from "./TitleRow/MainPageTitleRow";
import SmallFeatureRow from "../MainPageContent/SmallFeatureRow/SmallFeatureRow";

const PageContentWrapper = styled(Container)`
  background: #f9f8f2;
  border-radius: 20px;
  margin: 0 15px 0 0;
  padding: 40px 25px;
`;

const MainPageContent = () => {
  return (
    <PageContentWrapper fluid={true}>
      <MainPageTitleRow titleText="Gene Report" buttonText="View All" />
      <SmallFeatureRow />
    </PageContentWrapper>
  );
};

export default MainPageContent;
