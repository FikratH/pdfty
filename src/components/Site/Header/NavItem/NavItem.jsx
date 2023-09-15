import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ text, linkto }) => {
  return (
    <li className="font-semibold lg:text-sm md:text-xs uppercase text-center text-var-dark hover:text-var-primary-orange ">
      <Link to={linkto}>{text}</Link>
    </li>
  );
};

export default NavItem;
