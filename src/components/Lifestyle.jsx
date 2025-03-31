import React from "react";
import { heroImg, lifestyle } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight, arrowRightWhite } from "../assets/icons";

const Lifestyle = () => {
  // Inline style to set the background image

  const bgImage =
    "https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="w-full bg-[#00bee0] hero__gradient text-secondary h-auto md:h-[calc(100vh-90px)] md:max-h-[620px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-4 md:gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-left">
              Life at Equiserve
            </div>

            <div className="md:w-[60%] lg:w-full my-5 font-bold text-[16px] sm:text-[20px]  md:text-left text-left w-full ">
              We believe in building brighter futures — <br /> providing trusted
              advice and solutions, and building healthier <br /> and more
              sustainable outcomes for our clients, <br /> colleagues and
              communities.
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          <div className="group w-fit bg-black py-3 px-6 rounded-md flex items-center relative cursor-pointer">
            {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
            <a href={"#"} className="flex">
              <div className="text-white text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
                Learn more about us
              </div>
              <div className="w-fit overflow-hidden flex items-center">
                <img
                  src={arrowRightWhite}
                  alt="Arrow right"
                  className="hover-slide-in-top transition-all ease-linear"
                />
              </div>
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:absolute right-0 lg:right-0 xl:right-20 rounded-xl overflow-hidden">
            <img src={lifestyle} alt="" className="h-[450px] w-auto" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Lifestyle;
