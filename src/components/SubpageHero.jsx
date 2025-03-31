import React from "react";
import { heroImg, heroImg2, heroImg3 } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight, arrowRightWhite } from "../assets/icons";

const SubpageHero = ({ bgImage, config, hideCta }) => {
  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className={`relative w-full overflow-hidden h-[100vh]  text-secondary  lg:h-[100vh] lg:max-h-[620px] flex justify-center z-10`}
      style={headerStyle}
    >
      {/* Backdrop */}
      <div className="absolute top-0 h-[100%] inset-0 bg-black bg-opacity-30 "></div>

      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="text-white relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-5 font-bold text-[20px]  md:text-left text-left w-full ">
              {config?.title}
            </div>

            <div className="w-[70%] font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[46px] sm:leading-[48px] lg:leading-[56px] text-left">
              {config?.header}
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          {!hideCta && (
            <div className="group w-fit bg-primary py-3 px-6 rounded-md flex items-center relative cursor-pointer">
              {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
              <div className="text-black text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
                Contact us
              </div>
              <div className="w-fit overflow-hidden flex items-center">
                <img
                  src={arrowRight}
                  alt="Arrow right"
                  className="hover-slide-in-top transition-all ease-linear"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default SubpageHero;
