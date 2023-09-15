import React, { useState } from "react";
import AddFilesButton from "../../../components/Site/RoundButton/AddFilesButton";
import OrientationButton from "../../../components/Site/Convertation/OrientationButton/OrientationButton";
import OrientationButtons from "../../../components/Site/Convertation/OrientationButton/OrientationButtons";
import axios from "axios";
import { saveAs } from "file-saver";

const ConvertImageToPDF = () => {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("init");

  const handleFileChange = (e) => {
    console.log(e.target.files);
    if (e.target.files) {
      setStatus("init");
      setFiles([...files.concat([...e.target.files])]);
      // const formData = new FormData();
      // formData.append("file", files[0]);
      // axios
      //   .post("http://89.223.120.149:8000/api/action/JpgToPdf", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then((res) => console.log(res));
    }
  };
  const handleConvert = () => {
    console.log(files);
    [...files].forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);
      setStatus("loading");
      axios
        .post("http://89.223.120.149:8000/api/action/JpgToPdf", formData, {
          responseType: "blob",
        })
        .then((res) => {
          console.log(res.data);
          const blob = new Blob([res.data], {
            type: "application/pdf",
          });
          saveAs(blob, `${file.name}.pdf`);
        })
        .then(() => {
          setStatus("completed");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <main
      className="min-h-[750px]"
      style={{
        background:
          "linear-gradient(7deg, #CBFAFF 0%, rgba(203, 250, 255, 0.00) 60%)",
      }}
    >
      <div className="container pt-[72px] pb-[120px] mx-auto xl:px-[85px] px-5 sm:px-5 min-h-[700px] flex justify-between">
        {status == "loading" ? (
          <span>LOADING!!</span>
        ) : (
          <div className="flex flex-wrap gap-[60px]">
            {[...files].map((file, index) => {
              return <span key={index}>{file.name}</span>;
            })}
          </div>
        )}
        <div className="flex md:gap-10 gap-3">
          <div className="mt-10">
            <AddFilesButton
              handleFileChange={handleFileChange}
              bgColor={"#FF5F38"}
              textColor={"#fff"}
            />
          </div>
          <div
            className="flex flex-col rounded-[20px] bg-white py-5 px-6 justify-between "
            style={{ boxShadow: "0px 4px 44px 0px rgba(147, 146, 158, 0.17)" }}
          >
            <div className="flex flex-col gap-5 bg-white">
              <h2 className="text-[26px] font-bold text-var-dark">
                Image to PDF options
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <span className="text-var-dark font-semibold text-base/[150%]">
                    Select the page orientation
                  </span>
                  <OrientationButtons />
                </div>
              </div>
            </div>
            <button
              className="w-full bg-var-primary-orange text-white flex gap-2 rounded-xl px-11 py-[26px] text-center items-center justify-center"
              onClick={handleConvert}
            >
              Convert to PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_79_2972)">
                  <path
                    d="M10.0013 18.3333C14.6037 18.3333 18.3346 14.6024 18.3346 10C18.3346 5.39763 14.6037 1.66667 10.0013 1.66667C5.39893 1.66667 1.66797 5.39763 1.66797 10C1.66797 14.6024 5.39893 18.3333 10.0013 18.3333Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66797 10H13.3346"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 13.3333L13.3333 10L10 6.66667"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_79_2972">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConvertImageToPDF;
