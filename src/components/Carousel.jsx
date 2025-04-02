import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// This implementation can be used for either ProjectsCarousel or ServicesCarousel
// Just change the data array and the aspect ratio as needed

const Carousel = ({
  items,
  titleLink,
  titleLinkText = "VIEW ALL",
  title = "OUR PROJECTS",
  aspectRatio = "aspect-video", // Use "aspect-[3/4]" for Services
  showTextBeforeHover = false, // Set to true for Services
  sectionBackground = "bg-white", // Use "bg-gray-50" for Services
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Handle window resize to calculate dimensions
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate items per view and item width based on screen size
  const getItemsConfig = () => {
    // For mobile
    if (windowWidth < 640) {
      return { itemsPerView: 1, gap: 16 };
    }
    // For tablet
    else if (windowWidth < 1024) {
      return { itemsPerView: 2, gap: 24 };
    }
    // For desktop
    else {
      return { itemsPerView: 3, gap: 32 };
    }
  };

  const { itemsPerView, gap } = getItemsConfig();

  // Calculate item width based on container width
  const totalGapWidth = gap * (itemsPerView - 1);
  const itemWidth = (containerWidth - totalGapWidth) / itemsPerView;

  // Calculate total carousel width
  const totalWidth = items.length * itemWidth + (items.length - 1) * gap;

  // Max index to prevent scrolling past the end
  const maxIndex =
    items.length <= itemsPerView ? 0 : items.length - itemsPerView;

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current && activeIndex < maxIndex) {
        setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
      } else if (!isDragging.current && activeIndex >= maxIndex) {
        setActiveIndex(0); // Loop back to beginning
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, maxIndex]);

  // Handle drag end
  const handleDragEnd = (e, info) => {
    isDragging.current = false;
    const threshold = itemWidth / 3;

    if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (info.offset.x < -threshold && activeIndex < maxIndex) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  // Navigate to specific item
  const goToItem = (index) => {
    setActiveIndex(Math.min(Math.max(0, index), maxIndex));
  };

  return (
    <div className={`w-full py-12 overflow-hidden ${sectionBackground}`}>
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="uppercase text-sm tracking-widest  font-semibold mb-8">
            {title}
          </h2>
          <Link
            to={titleLink}
            className="hover:underline underline-offset-2 text-[12px] tracking-widest text-gray-400  mb-8 font-bold"
          >
            {titleLinkText}
          </Link>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -Math.max(0, totalWidth - containerWidth),
              right: 0,
            }}
            dragElastic={0.1}
            onDragStart={() => (isDragging.current = true)}
            onDragEnd={handleDragEnd}
            style={{
              gap: `${gap}px`,
            }}
            animate={{
              x: -activeIndex * (itemWidth + gap),
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
            }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="relative rounded-lg overflow-hidden flex-shrink-0 group shadow-md"
                style={{ width: `${itemWidth}px` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Item image */}
                <div className={aspectRatio}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item details overlay */}
                <div
                  className={`absolute inset-0 ${
                    showTextBeforeHover
                      ? "bg-gradient-to-t from-black via-black/50 to-transparent"
                      : "bg-black bg-opacity-40"
                  } flex flex-col justify-end p-6 ${
                    showTextBeforeHover
                      ? ""
                      : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  }`}
                >
                  <h3 className="text-white text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 mt-2">
                    {showTextBeforeHover ? item.description : item.subtitle}
                  </p>

                  {/* Optional "Learn More" button for Services */}
                  {showTextBeforeHover && (
                    <motion.button
                      className="mt-4 px-4 py-2 bg-primary text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      Learn More
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToItem(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-black w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
