import React from "react";
import Image from "react-bootstrap/Image";

const NavBarUser = () => {
  return (
    <span>
      <Image
        className="mr-2"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        roundedCircle
        style={{
          width: 30,
          border: "solid 1px #bdbdbd"
        }}
      />
      <span>User Name</span>
    </span>
  );
};

export default NavBarUser;
