import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  CustomInfoBlock,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { aimMissionVision, execs } from "../utils/data";

const Leadership = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "The Dream Team",
  });

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Benefits at Equiserve */}
      <CareerBlock
        color={"#FAF9F4"}
        title={
          "The experience and multi-talented team with diverse cultural backgrounds have been a major contribution to the success of Equiserve."
        }
        image={
          "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
        }
        subTitle1={
          "The vast majority of members are Investment bankers with experience in Corporate Finance, Mergers and Acquisitions and Wealth Management with a deeper African financial industry experience."
        }
      />

      {/* Execs */}
      <div className="w-full flex flex-col items-center py-12 gap-10">
        {" "}
        {execs?.map((insight, index) => {
          const {
            content,
            header,
            id,
            imgUrl,
            link,
            title,
            details2,
            details3,
            subsections,
          } = insight;
          return (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "md:flex-row-reverse"
                  : "md:flex-row gap-8 bg-[#FAF9F4]"
              } h-fit py-10 flex-col  flex bg-white  overflow-hidden w-full app__container px-5  lg:px-[48px]`}
            >
              {/* <!-- Card Image --> */}
              <div className="mx-auto h-[250px] lg:h-[300px] w-[250px] lg:w-[300px] overflow-hidden bg-black rounded-full">
                <img
                  src={imgUrl}
                  alt="Card Image"
                  class="w-full h-[300px] object-cover hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
                />
              </div>

              {/* <!-- Card Content --> */}
              <div class="flex flex-col  flex-1 py-4 justify-center">
                {/* <!-- header --> */}

                <p
                  class={`
              text-sm  font-semibold !text-primary-110 leading-6`}
                >
                  {header}
                </p>

                {/* <!-- Title --> */}
                <h3 class="text-lg cursor-pointer transition-all ease-in-out duration-200 hover:text-primary-110  h-[30px] font-bold text-secondary  line-clamp-2">
                  {title}
                </h3>

                {/* <!-- Description --> */}
                <p class="text-sm font-semibold   leading-6 w-full lg:w-[90%] ">
                  {content}
                </p>
                <p class="text-sm my-5 leading-6 w-full lg:w-[90%] ">
                  {details2}
                </p>
                <p class="text-sm italic leading-6 w-full lg:w-[90%] ">
                  {details3}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Leadership;
