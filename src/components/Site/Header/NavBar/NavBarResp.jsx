import React from "react";
import NavItemResp from "../NavItem/NavItemResp";
import NavItemMultipleResp from "../NavItemMultiple/NavItemMultipleResp";
import NavItemMultipleAllResp from "../NavItemMultiple/NavItemMultipleAllResp";
import RoundButton from "../../RoundButton/RoundButton";
const NavBarResp = () => {
  return (
    <div className="flex flex-col gap-10 absolute left-0 top-[56px] sm:top-[76px] min-[480px]:min-w-[290px] min-w-[100vw] min-h-[760px] pl-5 pr-4 py-10 bg-white z-10 text-black">
      <ul className="flex flex-col gap-11 text-var-dark">
        <li>
          <NavItemResp text="Merge PDF" linkto={"/"} />
        </li>
        <li>
          <NavItemResp text="Split PDF" linkto={"/"} />
        </li>
        <li>
          <NavItemResp text="Compress PDF" linkto={"/"} />
        </li>
        <li>
          <NavItemMultipleResp linkto={"/"} text={"Convert PDF"} />
        </li>
        <li>
          <NavItemMultipleAllResp linkto={"/"} text={"All PDF Tools"} />
        </li>
      </ul>
      <div className="flex flex-wrap gap-2 sm:hidden">
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
    </div>
  );
};

export default NavBarResp;
