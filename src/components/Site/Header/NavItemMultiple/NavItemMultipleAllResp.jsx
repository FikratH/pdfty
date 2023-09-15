import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownLargeResp from "../DropdownLarge/DropdownLargeResp";

const NavItemMultipleAllResp = ({ linkto, text }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <li
      className={`font-semibold text-sm relative after:bg-transparent`}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <Link to={linkto} className="flex items-center uppercase">
        <span
          className={`mr-2 text-center ${
            isClicked ? "text-var-primary-orange" : "text-var-dark"
          }`}
        >
          {text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`${isClicked ? "rotate-180" : ""}`}
        >
          <path
            d="M5 6L9.33013 0.75H0.669873L5 6Z"
            fill={`${isClicked ? "#ff5f38" : "#070707"}`}
          />
        </svg>
      </Link>
      {isClicked ? <DropdownLargeResp /> : ""}
    </li>
  );
};

export default NavItemMultipleAllResp;
