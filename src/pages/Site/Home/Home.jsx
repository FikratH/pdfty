import React from "react";
import FunctionCard from "../../../components/Site/Home/FunctionCard/FunctionCard";
import MergeIcon from "../../../assets/images/site/home/card-icons/icon-merge-svg.svg";
import WebsiteIcon from "../../../assets/images/common/pdfty-icon.ico";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PDFTY</title>
        <link rel="shortcut icon" href={WebsiteIcon} type="image/x-icon" />
      </Helmet>
      <main className="bg-var-light relative overflow-hidden bg-home-gradient bg-no-repeat">
        <div className="container pt-[72px] pb-[120px] mx-auto xl:px-[85px] px-5 sm:px-5 flex flex-col justify-center items-center z-10 gap-[60px]">
          <div className="flex flex-col text-center items-center gap-6">
            <h1 className="text-[40px] font-bold">
              Every tool you need to work with PDFs in one place{" "}
            </h1>
            <p className="max-w-[800px] text-lg/[150%] text-var-gray">
              Every tool you need to use PDFs, at your fingertips. All are 100%
              FREE and easy to use! Merge, split, compress, convert, rotate,
              unlock and watermark PDFs with just a few clicks.
            </p>
          </div>
          <div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full gap-5">
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
            <FunctionCard
              linkto={"/"}
              image={MergeIcon}
              title={"Merge PDF"}
              description={
                "Combine PDFs in the order you want with the easiest PDF merger available"
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
