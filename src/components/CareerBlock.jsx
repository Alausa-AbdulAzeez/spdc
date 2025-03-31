import React from "react";

const CareerBlock = ({ color, image, title, subTitle1, inverse, mailTo }) => {
  // Inline style to set the background image

  return (
    <section
      style={{ backgroundColor: color }}
      className="w-full overflow-hidden  text-secondary lg:h-[calc(100vh-90px)] lg:max-h-[500px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex  items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        {!inverse && (
          <div className="relative flex flex-col gap-10 w-full justify-center">
            {/* top - (Title and Sub title) */}
            <div className="flex flex-col justify-center items-start">
              <div className=" font-bold  text-lg sm:text-md text-left md:w-[80%] lg:w-[65%]">
                {title}
              </div>

              <div className="my-5 text-sm md:text-left text-left md:w-[80%] lg:w-[60%]">
                {subTitle1}
              </div>
              {mailTo && (
                <a
                  href="mailto:hr@equiservegroup.com"
                  className="underline text-blue-500"
                >
                  {mailTo}
                </a>
              )}
            </div>

            {/* Hero Image */}
            <div className="max-h-[367px] flex md:absolute -right-[200px] rounded-xl overflow-hidden">
              <div className="flex flex-col flex-[1] items-center md:flex-row flex-wrap gap-5 md:justify-start">
                <img
                  src={image}
                  alt="Image"
                  className="cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg mb-6 lg:mb-0  lg:max-w-[550px]"
                />
              </div>
              {/* <img src={image} alt="" className="lg:h-[500px] w-auto" /> */}
            </div>
          </div>
        )}

        {inverse && (
          <div className="relative flex  flex-col gap-10 w-full justify-center items-end">
            {/* Hero Image */}
            <div className="flex md:absolute -left-[200px] rounded-xl overflow-hidden">
              <div className="flex flex-col flex-[1] items-center md:flex-row flex-wrap gap-5 md:justify-start">
                <img
                  src={image}
                  alt="Image"
                  className="cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg mb-6 lg:mb-0  lg:max-w-[550px]"
                />
              </div>
              {/* <img src={image} alt="" className="lg:h-[500px] w-auto" /> */}
            </div>

            {/* top - (Title and Sub title) */}
            <div className="flex flex-col justify-center items-end">
              <div className=" font-bold  md:w-[80%] lg:w-[80%]  text-lg sm:text-md text-left">
                {title}
              </div>

              <div className="my-5 text-sm  md:w-[80%] lg:w-[80%] text-left">
                {subTitle1}
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default CareerBlock;
