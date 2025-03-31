import React, { useRef, useState, useEffect } from "react";
import SolutionsCard from "./SolutionsCard";
import { insights, productsAndServicesArray } from "../utils/data";
import { Icon } from "@iconify/react";

const ImageCarousel = ({ data, showHeader, headerStyle, hideArrow }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll button state
  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Scroll to the left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Update button states on mount and when resizing
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full hide-scrollbar">
      <div className="w-full flex gap-3 justify-end my-5 items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`flex border-[2px] disabled:cursor-not-allowed rounded-full border-transparent transition-all ease-in-out duration-200 hover:border-primary items-center justify-center w-[48px] h-[48px] transform  z-10 ${
            !canScrollLeft ? "" : "bg-transparent"
          }`}
        >
          <Icon
            icon={`iconamoon:arrow-left-2-light`}
            className={`w-10 h-10 ${
              !canScrollLeft ? "text-primary" : "text-primary"
            }`}
          />
        </button>
        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`w-[48px] border-[2px] disabled:cursor-not-allowed rounded-full border-transparent transition-all ease-in-out duration-200 hover:border-primary h-[48px] flex items-center justify-center transform   z-10 ${
            !canScrollRight ? "" : "bg-transparent"
          }`}
        >
          <Icon
            icon={`iconamoon:arrow-right-2-light`}
            className={`w-10 h-10 ${
              !canScrollRight ? " text-primary" : "text-primary"
            }`}
          />
        </button>
      </div>

      {/* Image Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar"
        onScroll={updateScrollButtons} // Update buttons on scroll
      >
        {data?.map((insight) => {
          const { content, header, id, imgUrl, link, title, subsections } =
            insight;
          return (
            <SolutionsCard
              content={content}
              key={id}
              imgUrl={imgUrl}
              link={link}
              title={title}
              header={header}
              headerStyle={headerStyle}
              showHeader={showHeader}
              hideArrow={hideArrow}
              subsections={subsections}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
