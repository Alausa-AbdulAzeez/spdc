import React from "react";
import { dna } from "../assets/images";
import { Link } from "react-router-dom";
import { socialMedia } from "../utils/data";
import { Icon } from "@iconify/react";

const CustomInfoBlock = ({
  img,
  title,
  content,
  floatingContent,
  content2,
}) => {
  // Inline style to set the background image

  return (
    <section
      className="w-full overflow-hidden bg-primary hero__gradient text-secondary lg:h-[calc(100vh-90px)] lg:max-h-[500px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="relative w-full flex  items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-left">
              {title}
            </div>

            <div className="my-5 font-bold text-[16px] sm:text-[20px]  md:text-left text-left md:w-[80%] ">
              {content}
            </div>
            <div className="font-bold text-[16px] sm:text-[20px]  md:text-left text-left md:w-[80%] ">
              {content2}
            </div>
          </div>

          {/* Hero Image */}
          {img && (
            <div className="flex md:absolute -right-[300px] rounded-xl overflow-hidden">
              <img src={dna} alt="" className="lg:h-[500px] w-auto" />
            </div>
          )}
        </div>

        {floatingContent && (
          <div className="hidden absolute md:flex items-center gap-5 top-10 lg:top-14 right-10 lg:right-20">
            {socialMedia?.map(({ src, link }, index) => {
              return (
                <Link
                  to={link}
                  className="flex justify-center items-center bg-[#e3e2e29b] p-2  rounded-md"
                  key={index}
                  target="_blank"
                >
                  <Icon icon={src} className="h-8 w-8" />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </section>
  );
};

export default CustomInfoBlock;
