import React from "react";
import NavItem from "../NavItem/NavItem";
import NavItemMultiple from "../NavItemMultiple/NavItemMultiple";
import NavItemMultipleAll from "../NavItemMultiple/NavItemMultipleAll";

const NavBar = () => {
  return (
    <nav className="md:block sm:hidden hidden">
      <ul className="list-none flex xl:gap-8 items-center lg:gap-5 sm:gap-2">
        <NavItem text={"Merge PDF"} linkto={"/"} />
        <NavItem text={"Split PDF"} linkto={"/"} />
        <NavItem text={"Compress PDF"} linkto={"/"} />
        <NavItemMultiple text={"Convert PDF"} linkto={"/"} />
        <NavItemMultipleAll text={"All PDF Tools"} linkto={"/"} />
      </ul>
    </nav>
  );
};

export default NavBar;
