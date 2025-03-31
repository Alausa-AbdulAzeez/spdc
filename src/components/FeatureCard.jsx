import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { arrowRight } from "../assets/icons";

const FeatureCard = ({
  hideButton = false,
  title,
  link,
  content,
  imgUrl,
  date,
  titleStyle,
}) => {
  return (
    <div className="w-full md:w-[48%] xl:w-[32%] h-fit flex flex-col bg-white  overflow-hidden">
      {/* <!-- Card Image --> */}
      <div className="h-[250px] w-full overflow-hidden bg-black">
        <img
          src={imgUrl}
          alt="Card Image"
          class="w-full h-[250px] object-cover hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
        />
      </div>

      {/* <!-- Card Content --> */}
      <div class="flex flex-col justify-between flex-1 py-4">
        {/* <!-- Date --> */}
        {date && <p class="text-sm text-secondary leading-6 ">{date}</p>}

        {/* <!-- Title --> */}
        <Link
          to={link}
          target="_blank"
          class={`text-lg cursor-pointer transition-all ease-in-out duration-200 hover:text-primary-110  h-[56px] font-bold text-secondary mb-2 line-clamp-2 ${titleStyle}`}
        >
          {title}
        </Link>

        {/* <!-- Description --> */}
        <p class="text-sm h-[72px] text-secondary leading-6 line-clamp-4 mb-3 lg:mb-12">
          {content}
        </p>

        {/* <!-- Footer with Button --> */}
        {!hideButton && (
          <Button
            endIcon={arrowRight}
            size={"medium"}
            openInSamePage={false}
            href={link}
          >
            <div className="text-secondary text-sm font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Read more
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
