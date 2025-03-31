import React from "react";
import { dna } from "../assets/images";

const InfoBlock = () => {
  // Inline style to set the background image

  return (
    <section
      className="w-full hero__gradient overflow-hidden  text-secondary lg:h-[calc(100vh-90px)] lg:max-h-[500px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex  items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-left">
              Our DNA
            </div>

            <div className="my-5 font-bold text-[16px] sm:text-[20px]  md:text-left text-left md:w-[80%] lg:w-full">
              We act with integrity, a client-focused mindset, and an{" "}
              <br className="hidden lg:block " />
              entrepreneurial drive, and embrace diversity and inclusive growth.{" "}
              <br /> This is our DNA and on this fulcrum, we build our global
              business.
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex md:absolute -right-[300px] rounded-xl overflow-hidden">
            <img src={dna} alt="" className="lg:h-[500px] w-auto" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default InfoBlock;
