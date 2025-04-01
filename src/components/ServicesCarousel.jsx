import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ServicesCarousel = () => {
  // Sample services data - replace with your actual services
  const services = [
    {
      id: 1,
      title: "Interior Design",
      description: "Creating beautiful, functional living spaces",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
    },
    {
      id: 2,
      title: "Construction",
      description: "Building your vision from the ground up",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
    },
    {
      id: 3,
      title: "Architectural Design",
      description: "Innovative solutions for modern living",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/03/bedroom-CS-2048x1363.jpg",
    },
    {
      id: 4,
      title: "Project Management",
      description: "Seamless coordination from concept to completion",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
    },
    {
      id: 5,
      title: "Renovation",
      description: "Transforming existing spaces into something extraordinary",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);

  // Handle window resize to calculate items per view
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
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

  // Calculate item width including gap
  const containerPadding = 64; // Padding on container
  const totalGapWidth = gap * (itemsPerView - 1);
  const itemWidth =
    (windowWidth - containerPadding - totalGapWidth) / itemsPerView;

  // Calculate total width
  const totalWidth = services.length * itemWidth + (services.length - 1) * gap;

  // Max index to prevent scrolling past the end
  const maxIndex = Math.max(0, services.length - itemsPerView);

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

  // Navigate to specific service
  const goToService = (index) => {
    setActiveIndex(Math.min(Math.max(0, index), maxIndex));
  };

  return (
    <div className="w-full py-12 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>

        {/* Carousel container */}
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              left: -(totalWidth - windowWidth + containerPadding),
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
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="relative rounded-lg overflow-hidden flex-shrink-0 shadow-lg group"
                style={{ width: `${itemWidth}px` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Service image - taller aspect ratio for vertical images */}
                <div className="aspect-[3/4]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service details - visible by default */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-medium">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mt-2">{service.description}</p>

                  {/* Learn more button that appears on hover */}
                  <motion.button
                    className="mt-4 px-4 py-2 bg-white text-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToService(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-black w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
