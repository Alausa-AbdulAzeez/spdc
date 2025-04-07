import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";
import {
  hero1,
  hero10,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
} from "../assets/images";

const images = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const texts = [
    "Architectural Design",
    "Design & Build",
    "Interior Design",
    "Construction",
    "Timeless Luxury Glamour",
    "Elegant Contemporary Stylish",
    "Dramatic Modern Chic",
    "Dark Luxurious Sophisticated",
    "Contemporary Serene Textural",
    "Modern Vibrant Jewel",
  ];
  const isDragging = useRef(false);
  const carouselRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  // Calculate the width of each slide (100% of viewport width)
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle drag end to determine if we should change slides
  const handleDragEnd = (e, info) => {
    isDragging.current = false;
    const threshold = 100; // Minimum drag distance to trigger slide change

    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar nav={"transparent"} />

      {/* Image Carousel Container */}
      <div className="absolute inset-0">
        <motion.div
          ref={carouselRef}
          className="absolute flex h-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => (isDragging.current = true)}
          onDragEnd={handleDragEnd}
          style={{
            width: `${images.length * 100}vw`,
            x: `calc(${-index * 100}vw)`,
          }}
          animate={{ x: `calc(${-index * 100}vw)` }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="relative w-screen h-full shrink-0">
              <img
                src={img}
                alt={`Hero slide ${i + 1}`}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Overlay Content */}
      <div className="h-full lg:h-[70%] w-full flex justify-center absolute pointer-events-none">
        <div className="app__container flex h-full w-full px-9 items-end lg:pb-0 pb-24 justify-between">
          <div className="flex items-center justify-start text-white text-center lg:px-6">
            <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10">
              <div className="flex items-end">
                <a href="#about">
                  <Icon
                    icon="iconamoon:arrow-down-2-thin"
                    className="w-10 h-10 text-white pointer-events-auto cursor-pointer"
                  />
                </a>
              </div>

              {/* Text Animation */}
              <div>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl lg:text-5xl text-left mb-2 lg:mb-5"
                >
                  {texts[index]}
                </motion.div>
                <div className="text-left text-sm tracking-widest font-light">
                  OUR SERVICES
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex space-x-4 pointer-events-auto z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
