import React, { useState } from "react";

const OrientationButton = ({ type }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`rounded-md ${
        isClicked
          ? "border-var-primary-orange text-var-primary-orange"
          : "border-var-gray text-var-dark"
      } border-[1px] flex items-center justify-center pt-2 flex-col gap-2 bg-white w-[126px] h-[90px] cursor-pointer`}
      onClick={() => {
        setIsClicked(true);
      }}
    >
      <div
        className={`${
          type === "portrait"
            ? "w-[19px] h-[28px]"
            : "w-[31px] h-[22px] mb-[6px]"
        }  rounded-[4px] border-[1px] ${
          isClicked ? "border-var-primary-orange" : "border-var-gray"
        }`}
      ></div>
      <span className="text-sm font-medium text-center">
        {type === "portrait" ? "Portrait" : "Landscape"}
      </span>
    </div>
  );
};

export default OrientationButton;
