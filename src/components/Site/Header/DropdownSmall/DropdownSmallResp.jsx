import React from "react";
import { Link } from "react-router-dom";
import FunctionIcon from "../../../../assets/images/site/home/header-dropdown/function-icon.png";

const DropdownSmallResp = () => {
  return (
    <div className="flex flex-wrap mt-5 py-5 border-y-[1.5px] min-[480px]:pr-[70px] pr-5 border-solid border-[#efeeee] gap-[46px]">
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

export default DropdownSmallResp;
