import React from "react";
import { Link } from "react-router-dom";
import FunctionIcon from "../../../../assets/images/site/home/header-dropdown/function-icon.png";

const DropdownSmall = ({ isHovered }) => {
  return (
    <div
      className={` ${
        isHovered ? "absolute" : "hidden"
      } overflow-hidden flex gap-12 min-w-[400px] bg-white pl-5 pt-5 pb-6 pr-10 z-10 rounded-b top-[48px] left-0`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase text-var-gray">
          Convert To PDF
        </p>
        <ul className="flex flex-col gap-[14px]">
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/image-to-pdf"}>JPG to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Word to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Powerpoint to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Excel to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>HTML to PDF</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase text-var-gray">
          Convert To PDF
        </p>
        <ul className="flex flex-col gap-[14px]">
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>JPG to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Word to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Powerpoint to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>Excel to PDF</Link>
          </li>
          <li className="flex gap-2 text-sm font-medium text-var-dark">
            <img
              src={FunctionIcon}
              alt=""
              className="max-w-[18px] max-h-[18px]"
            />
            <Link to={"/"}>HTML to PDF</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownSmall;
