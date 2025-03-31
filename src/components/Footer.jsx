import React from "react";
import { copyrightSign, equiserveLogo } from "../assets/icons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { footerLinks, socialMedia } from "../utils/data";

const Footer = () => {
  return (
    <section
      id="footer"
      className="overflow-y-auto w-full bg-black  sticky z-[1] flex justify-center px-6 md:px-10 lg:px-[80px] bottom-0 left-0 h-fit "
    >
      <footer className="py-[40px]  w-full  app__container  text-[#c5c4c4]">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col max-lg:gap-1 ">
          <div className="flex flex-col items-start">
            <a href="/" className="bg-white px-2 py-4 rounded-lg ">
              <img src={equiserveLogo} alt="logo" className="h-[15px]" />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Invest in Africa's future. Partner with EQUISERVE for sustainable
              finance solutions.
            </p>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              <span className="font-extrabold">Address:</span> 24 Old Bond
              Street Mayfair, London W1S 4AP United Kingdom
            </p>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              <span className="font-extrabold">Phone Number: </span> +44 (0) 330
              13 317 04
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia?.map(({ src, link }, index) => {
                return (
                  <Link
                    to={link}
                    className="flex justify-center items-center   rounded-full"
                    key={index}
                    target="_blank"
                  >
                    <Icon icon={src} className="h-8 w-8" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap max-md:justify-start">
            {footerLinks?.map((section, index) => {
              return (
                <div key={index}>
                  <h4 className="text-white">{section?.title}</h4>
                  <ul>
                    {section?.links?.map((link, index) => {
                      return (
                        <li
                          key={index}
                          className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                        >
                          <a href={link?.link}>{link?.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-12 lg:mt-24  max-sm:flex-col max-sm:items-center">
          <div className="flex  flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copyright"
              width={20}
              height={20}
              className="rounded-full m-0"
            />{" "}
            <p>Copyright. All rights reserved.</p>
          </div>
          {/* <p className="font-montserrat cursor-pointer max-md:mt-[20px]">
          Terms & Conditions
        </p> */}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
