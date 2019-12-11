import React from "react";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: #272f2f;
`;

const NavBarUser = () => {
  return (
    <span>
      <Image
        src="https://randomuser.me/api/portraits/men/32.jpg"
        roundedCircle
        style={{
          width: 30,
          border: "solid 1px #bdbdbd"
        }}
      />
      {/* <StyledSpan>Jim Lahey</StyledSpan> */}
    </span>
  );
};

export default NavBarUser;
