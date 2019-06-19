import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import SideNavWrapper from "./components/SideNav/SideNavWrapper";
import MainPageContent from "./components/MainPageContent/MainPageContent";

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <PageContentWrapper>
        <SideNavWrapper />
        <MainPageContent />
      </PageContentWrapper>
    </div>
  );
}

export default App;
