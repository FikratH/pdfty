import React from "react";
import { Link } from "react-router-dom";
const FunctionCard = ({ linkto, image, title, description }) => {
  return (
    <Link>
      <div className="px-5 pt-5 pb-9 flex flex-col gap-[10px] border border-[#e7e7ed] rounded-2xl bg-white">
        <img src={image} alt="card-image" className="w-11 h-11 mb-[14px]" />
        <h3 className="text-lg font-semibold text-var-dark">{title}</h3>
        <span className="text-sm/[130%] text-var-gray">{description}</span>
      </div>
    </Link>
  );
};

export default FunctionCard;
