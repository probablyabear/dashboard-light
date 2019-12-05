import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import SideNavWrapper from "./components/SideNav/SideNavWrapper";
import MainPageContent from "./components/MainPageContent/MainPageContent";

const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <div className="App">
      <NavBar />
      <PageContentWrapper>
        <SideNavWrapper width={width} />
        <MainPageContent />
      </PageContentWrapper>
    </div>
  );
}

export default App;
