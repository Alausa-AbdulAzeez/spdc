import React from "react";
import FeatureCard from "./FeatureCard";
import { insights, productsAndServicesArray } from "../utils/data";
import ImageCarousel from "./ImageCarousel";

const Solutions = ({ data, title }) => {
  return (
    <section className="flex justify-center">
      {/* Main container */}
      <section id="hero" className="w-full app__container  px-5 lg:px-[48px]">
        {/* Title */}
        <div className="font-bold text-[20px] mb-10">
          {title || "Explore our solutions"}
        </div>

        {/* Image Carousel */}
        <ImageCarousel data={data || productsAndServicesArray} />
      </section>
    </section>
  );
};

export default Solutions;
