import React from "react";
import { addCircle } from "../assets/icons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FAQCard = ({
  selectedItem,
  id,
  handleToggleSection,
  hasSubSections,
  subsidiary,
  icon,
  subsections,
  title,
  containerStyle,
  toggleMenu,
  toggleMenuOnClick,
}) => {
  return (
    <div
      className={`cursor-pointer border-b-[1px] ${containerStyle} border-neutral-20 min-h-[60px]  w-full  flex flex-col justify-center`}
    >
      <div
        className={`${
          selectedItem?.id === id && "mb-1"
        } flex justify-between gap-1 items-center  transition-all ease-in-out duration-300`}
      >
        <div className="font-normal gap-3 items-center text-md  text-secondary flex mt-0">
          <Icon icon={icon} className="w-5 h-5" /> <span>{title}</span>
        </div>

        {hasSubSections && (
          <div
            className="min-w-[56px] h-[56px]  flex items-center justify-center"
            onClick={() => handleToggleSection(subsidiary)}
          >
            <img
              src={addCircle}
              alt="Dropdown"
              className={`transition-all ease-in-out w-[20px] h-[20px] !duration-[3000] cursor-pointer ${
                selectedItem?.id === id ? "rotate-45" : ""
              }`}
            />
          </div>
        )}
      </div>
      <div
        className={` text-secondary b_18_14-25-400  ease-in-out ${
          selectedItem?.id === id ? "h-auto opacity-100" : "h-0 opacity-0"
        }  duration-300 transition-all overflow-hidden `}
      >
        {subsections?.map((subsection, index) => {
          return (
            <Link
              to={subsection?.dropdownUrl}
              key={index}
              onClick={() => {
                if (!toggleMenuOnClick) {
                  return;
                } else {
                  toggleMenu();
                }
              }}
              state={subsection}
              target={subsection?.sameSiteUrl ? "_self" : "_blank"}
              className={`text-[#515861] hover:bg-[#e7e19d] h-[40px] flex items-center pl-8  `}
            >
              {subsection?.title}{" "}
              {!subsection?.sameSiteUrl && (
                <span>
                  <Icon icon={"lets-icons:external"} className="ml-2" />{" "}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FAQCard;
