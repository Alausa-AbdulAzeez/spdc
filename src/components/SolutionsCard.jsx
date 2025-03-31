import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { arrowRight, arrowRightYellow } from "../assets/icons";
import { navbarData } from "../utils/data";

const SolutionsCard = ({
  title,
  link,
  content,
  imgUrl,
  header,
  showHeader,
  headerStyle,
  hideArrow,
  subsections,
}) => {
  return (
    <div class="min-w-[250px] lg:min-w-[32%] max-w-[370px] h-fit flex flex-col bg-white  overflow-hidden">
      {/* <!-- Card Image --> */}
      <div className="mx-auto h-[250px] lg:h-[300px] w-[250px] lg:w-[300px] overflow-hidden bg-black rounded-full">
        <img
          src={imgUrl}
          alt="Card Image"
          class="w-full h-[300px] object-cover hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
        />
      </div>

      {/* <!-- Card Content --> */}
      <div class="flex flex-col  flex-1 py-4">
        {/* <!-- header --> */}
        {showHeader && (
          <p class={`${headerStyle} text-sm text-secondary leading-6`}>
            {header}
          </p>
        )}

        {/* <!-- Title --> */}
        <h3 class="text-lg cursor-pointer transition-all ease-in-out duration-200 hover:text-primary-110  h-[30px] font-bold text-secondary  line-clamp-2">
          {title}
        </h3>

        {/* <!-- Description --> */}
        <p class="text-sm h-[180px] lg:h-[120px] xl:h-[92px] text-secondary leading-6 xl:line-clamp-4 mb-8">
          {content}
        </p>

        {/* <!-- Footer with Button --> */}
        {!hideArrow && (
          <Button
            endIcon={arrowRightYellow}
            width="!px-0"
            variant="text"
            size={"medium"}
            href={link}
            linkState={subsections}
          ></Button>
        )}
      </div>
    </div>
  );
};

export default SolutionsCard;
