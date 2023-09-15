import React, { useState } from "react";
import BurgerMenuIconClosed from "../../../../assets/images/common/burger-menu-icon.svg";
import BurgerMenuIconOpened from "../../../../assets/images/common/burger-menu-opened-icon.svg";
import NavBarResp from "../NavBar/NavBarResp";

const BurgerMenuIcon = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <img
        src={isClicked ? BurgerMenuIconOpened : BurgerMenuIconClosed}
        className="md:hidden sm:block hidden"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      {isClicked ? <NavBarResp /> : ""}
    </>
  );
};

export default BurgerMenuIcon;
