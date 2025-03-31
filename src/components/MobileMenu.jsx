import React, { useState } from "react";
import { Link } from "react-router-dom";
import { equiserveLogo, headerLogo } from "../assets/images";
import {
  leftSideMenuLinks,
  miniNavbarData,
  rightSideMenuLinks,
  subsidiaries,
} from "../utils/data";
import FAQCard from "./FAQCard";
import { addCircle, searchNormal } from "../assets/icons";
import { Icon } from "@iconify/react";

const MobileMenu = ({
  isOpen,
  toggleMenu,
  navbarData,
  subsidiariesList,
  handleInputChange,
}) => {
  // Selected Subsidiary
  const [selectedItem, setSelectedItem] = useState(null);

  // Selected Sub-Subsidiary
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  // Function to handle the expansion and contraction of a section
  const handleToggleSection = (item) => {
    if (item?.id === selectedItem?.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };
  // End of unction to handle the expansion and contraction of a section

  // Function to handle the expansion and contraction of a sub section
  const handleToggleSubSection = (item) => {
    if (item?.id === selectedSubItem?.id) {
      setSelectedSubItem(null);
    } else {
      setSelectedSubItem(item);
    }
  };
  // End of unction to handle the expansion and contraction of a sub  section

  return (
    <div
      className={`fixed w-screen h-screen overflow-y-hidden bg-white z-[999] transform backdrop-blur-none ${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } transition-transform duration-300 ease-in-out w-full`}
    >
      {/* MID SECTION (LINKS) */}
      <div className="p-8  bg-white  w-full h-full overflow-auto ">
        <div className="flex justify-between  items-center mb-12">
          <img src={headerLogo} alt="Logo" className="w-auto h-[80px]" />

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className={`cursor-pointer text-black  hover:opacity-50  w-7 h-[18px] flex flex-col justify-between`}
          >
            <div
              className={`h-[2px] rotate-45 translate-y-2.5 w-7 bg-current rounded transition-all duration-300 `}
            ></div>
            <div
              className={`h-[2px] opacity-0 w-7 bg-current rounded transition-all duration-300 `}
            ></div>
            <div
              className={`h-[2px] -rotate-45 -translate-y-2.5 text-black w-7 bg-current rounded transition-all duration-300 `}
            ></div>
          </button>
        </div>

        <div className="flex flex-col gap-20 items-start justify-start">
          {/* LHS */}
          <div className="flex gap-8 flex-col justify-start items-start">
            {/* Title */}
            <div className="text-sm font-semibold tracking-widest text-gray-500">
              WHO WE ARE
            </div>
            <div className="flex flex-col gap-6">
              {leftSideMenuLinks?.map((item) => {
                return (
                  <div className="font-medium w-fit uppercase hover:text-slate-600 cursor-pointer tracking-widest">
                    {item?.label}
                  </div>
                );
              })}
            </div>

            {/* Links */}
          </div>
          {/* RHS */}
          <div className="flex flex-col gap-8 justify-start items-start">
            {/* Title */}
            <div className="uppercase text-sm font-semibold tracking-widest text-gray-500">
              Our Business Areas
            </div>
            <div className="flex flex-col gap-6">
              {rightSideMenuLinks?.map((item) => {
                return (
                  <div className="w-fit uppercase font-medium hover:text-slate-600 cursor-pointer tracking-widest">
                    {item?.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
