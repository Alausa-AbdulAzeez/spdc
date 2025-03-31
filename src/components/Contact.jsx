import React from "react";
import { contact, heroImg, lifestyle } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight, arrowRightWhite } from "../assets/icons";

const Contact = () => {
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
      className="w-full bg-[#00bee0] hero__gradient text-white h-auto lg:h-[calc(100vh-90px)] lg:max-h-[620px] flex justify-center z-10 overflow-hidden"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full text-secondary flex items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[40px] sm:leading-[48px] lg:leading-[56px] text-left">
              Let's talk
            </div>

            <div className="my-5 text-[16px] sm:text-[20px] font-bold md:text-left text-left w-full ">
              Do you want to have a chat on investment opportunities in Africa?
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          <div className="group w-fit bg-secondary py-3 px-6 rounded-md flex items-center relative cursor-pointer">
            {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
            <a href={"/contact"} className="flex">
              <div className="text-white text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
                Get in touch
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
          <div className="flex justify-center lg:absolute -top-[50px] -right-20 rounded-xl overflow-hidden">
            <img src={contact} alt="" className="" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
