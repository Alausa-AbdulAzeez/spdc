import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";

const images = [
  "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
  "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
  "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/03/bedroom-CS-2048x1363.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Nav */}
      <Navbar nav={"transparent"} />

      {/* Image Container with Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Hero"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full text-white opacity-60"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent p-2 rounded-full text-white opacity-60"
      >
        <ChevronRight />
      </button> */}

      {/* Content on top of the image */}
      <div className="h-full lg:h-[70%] w-full flex justify-center absolute">
        <div className="app__container flex h-full w-full px-9 items-end lg:pb-0 pb-24 justify-between">
          <div className="flex items-center justify-start text-white text-center lg:px-6">
            {/* Icon */}
            <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10">
              <div className="flex items-end">
                <Icon
                  icon={"iconamoon:arrow-down-2-thin"}
                  className="w-10 h-10 text-white"
                />
              </div>

              {/* Property */}
              <div className="">
                <div className="text-3xl lg:text-5xl text-left mb-2 lg:mb-5">
                  Interior Design
                </div>
                <div className="text-left text-sm tracking-widest font-light">
                  OUR SERVICES
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex space-x-4">
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
