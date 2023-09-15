import React, { useState } from "react";
import { Link } from "react-router-dom";
import FunctionIcon from "../../../../assets/images/site/home/header-dropdown/function-icon.png";
import DropdownSmall from "../DropdownSmall/DropdownSmall";
import DropdownLarge from "../DropdownLarge/DropdownLarge";

const NavItemMultiple = ({ text, linkto }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <li
        className={`font-semibold relative lg:text-sm md:text-xs text-center ${
          isHovered ? "text-var-primary-orange" : "text-var-dark"
        } after:bg-transparent after:h-[50px] after:w-full after:absolute after:top-0 after:left-0`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={linkto} className="flex items-center uppercase">
          <span className="lg:mr-2 md:mr-0 text-center">{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className={`${isHovered ? "rotate-180" : ""}`}
          >
            <path
              d="M5 6L9.33013 0.75H0.669873L5 6Z"
              fill={`${isHovered ? "#ff5f38" : "#070707"}`}
            />
          </svg>
        </Link>
        {text.includes("Convert") ? (
          <DropdownSmall isHovered={isHovered} setIsHovered={setIsHovered} />
        ) : (
          <DropdownLarge isHovered={isHovered} setIsHovered={setIsHovered} />
        )}
      </li>
    </>
  );
};

export default NavItemMultiple;
