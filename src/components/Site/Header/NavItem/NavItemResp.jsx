import React from "react";
import { Link } from "react-router-dom";

const NavItemResp = ({ text, linkto }) => {
  return (
    <li className="font-semibold text-sm uppercase text-var-dark hover:text-var-primary-orange ">
      <Link to={linkto}>{text}</Link>
    </li>
  );
};

export default NavItemResp;
