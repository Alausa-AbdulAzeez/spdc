import React from "react";
import FeatureCard from "./FeatureCard";
import { execs, insights } from "../utils/data";
import ImageCarousel from "./ImageCarousel";

const Team = () => {
  return (
    <section className="flex justify-center mt-[32px]">
      {/* Main container */}
      <section id="hero" className="w-full app__container px-5 lg:px-[48px]">
        {/* Title */}
        <div className="font-bold text-[20px] mb-10">Meet our Team</div>

        {/* Image Carousel */}
        <ImageCarousel
          data={execs}
          headerStyle={"font-semibold !text-primary-110"}
          hideArrow={true}
          showHeader={true}
        />
      </section>
    </section>
  );
};

export default Team;
