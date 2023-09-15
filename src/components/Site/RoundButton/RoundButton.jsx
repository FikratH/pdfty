import React from "react";
import { Link } from "react-router-dom";

const RoundButton = ({ text, bgColor, textColor, linkto }) => {
  return (
    <Link to={linkto}>
      <button
        style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
        className={` text-center rounded-[32px] font-bold text-sm w-[116px] h-[44px] tracking-wide`}
      >
        {text}
      </button>
    </Link>
  );
};

export default RoundButton;
