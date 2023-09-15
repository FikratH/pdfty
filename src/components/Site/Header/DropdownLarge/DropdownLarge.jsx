import React from "react";
import { Link } from "react-router-dom";
import FunctionIcon from "../../../../assets/images/site/home/header-dropdown/function-icon.png";

const DropdownLarge = ({ isHovered, setIsHovered }) => {
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      className={`${
        isHovered ? "absolute" : "hidden"
      } flex 2xl:justify-center flex-wrap md:justify-center gap-12 w-screen bg-white pl-6 pt-5 pb-6 pr-10 z-10 rounded-b top-[76px] left-0`}
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

export default DropdownLarge;
