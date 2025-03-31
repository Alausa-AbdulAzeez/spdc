import React from "react";
import FeatureCard from "./FeatureCard";
import { insights } from "../utils/data";

const Featured = ({ data, title }) => {
  return (
    <section className="flex justify-center">
      {/* Main container */}
      <section id="hero" className="w-full app__container px-5  lg:px-[48px]">
        {/* Title */}
        <div className="font-bold text-[20px] mb-10">
          {title || "Featured Insights"}
        </div>

        {/* Feature items container */}
        <div className="w-full flex gap-5 gap-y-10 flex-wrap justify-center">
          {(data || insights)?.map((insight) => {
            const { content, date, id, imgUrl, link, title } = insight;
            return (
              <FeatureCard
                content={content}
                key={id}
                date={date}
                imgUrl={imgUrl}
                link={link}
                title={title}
              />
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Featured;
