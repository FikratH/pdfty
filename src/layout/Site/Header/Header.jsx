import React from "react";
import SVGLogo from "../../../components/SVGLogo/SVGLogo";
import NavBar from "../../../components/Site/Header/NavBar/NavBar";
import RoundButton from "../../../components/Site/RoundButton/RoundButton";
import BurgerMenuIcon from "../../../components/Site/Header/BurgerMenuIcon/BurgerMenuIcon";
import BurgerMenuIconMobile from "../../../components/Site/Header/BurgerMenuIcon/BurgerMenuIconMobile";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header
      className="flex justify-center items-center relative"
      style={{ boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)" }}
    >
      <div className="container md:mx-auto gap-4 flex flex-row justify-between items-center py-4 xl:px-[85px] px-5 sm:px-5x">
        <div className="flex gap-[24px]">
          <BurgerMenuIcon />
          <Link to={"/"}>
            <SVGLogo />
          </Link>
        </div>
        <NavBar />
        <div className="gap-2 items-center sm:flex hidden">
          <RoundButton
            text={"Log in"}
            bgColor={"#f8f8f8"}
            textColor={"#070707"}
            linkto={"/"}
          />
          <RoundButton
            text={"Sign up"}
            bgColor={"#FF5F38"}
            textColor={"#fff"}
            linkto={"/"}
          />
        </div>
        <BurgerMenuIconMobile />
      </div>
    </header>
  );
};

export default Header;
