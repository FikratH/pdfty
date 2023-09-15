import React, { useState } from "react";
import BurgerMenuIconClosed from "../../../../assets/images/common/burger-menu-icon.svg";
import BurgerMenuIconOpened from "../../../../assets/images/common/burger-menu-opened-icon.svg";
import NavBarResp from "../NavBar/NavBarResp";

const BurgerMenuIconMobile = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <img
        src={isClicked ? BurgerMenuIconOpened : BurgerMenuIconClosed}
        className="sm:hidden block"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      {isClicked ? <NavBarResp /> : ""}
    </>
  );
};

export default BurgerMenuIconMobile;
