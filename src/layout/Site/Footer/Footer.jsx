import React from "react";
import SVGLogoWhite from "../../../components/SVGLogo/SVGLogoWhite";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-var-dark text-white py-[60px] w-full">
      <div className="container md:m-auto xl:px-[85px] px-5 sm:px-5 flex justify-between md:gap-20 gap-5">
        <div className="flex lg:gap-[80px] md:gap-[50px] gap-[50px] flex-wrap">
          <div className="flex flex-col gap-6">
            <SVGLogoWhite />
            <span className="text-var-gray text-sm font-medium">
              ©pdfty.com
            </span>
          </div>
          <div className="flex lg:gap-[80px] md:gap-[50px] gap-[50px] flex-wrap">
            <div className="flex flex-col gap-5">
              <span className="uppercase text-sm text-var-gray font-semibold">
                Navigation
              </span>
              <ul className="list-none text-white text-sm font-medium flex flex-col gap-[14px]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Tools</Link>
                </li>
                <li>
                  <Link to="/">Faq's</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <span className="uppercase text-sm text-var-gray font-semibold">
                Solutions
              </span>
              <ul className="list-none text-white text-sm font-medium flex flex-col gap-[14px]">
                <li>
                  <Link to="/">Business</Link>
                </li>
                <li>
                  <Link to="/">Education</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <span className="uppercase text-sm text-var-gray font-semibold">
                Company
              </span>
              <ul className="list-none text-white text-sm font-medium flex flex-col gap-[14px]">
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Legal & Privacy</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <span className="text-sm text-white font-medium overflow-x-hidden">
            pdfty@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
