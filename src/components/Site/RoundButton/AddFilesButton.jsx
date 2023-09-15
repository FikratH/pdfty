import React from "react";

const AddFilesButton = ({ bgColor, textColor, handleFileChange }) => {
  return (
    <div
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
      className={` text-center rounded-[32px] font-semibold text-sm md:w-[116px] md:h-[44px] w-[46px] h-[46px]  tracking-wide flex items-center justify-center`}
    >
      <label
        htmlFor="add-files"
        className="cursor-pointer flex justify-center items-center gap-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 4.16666V15.8333"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16797 10H15.8346"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="md:block hidden">Add files</span>
      </label>
      <input
        type="file"
        id="add-files"
        accept="image/*"
        hidden
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AddFilesButton;
