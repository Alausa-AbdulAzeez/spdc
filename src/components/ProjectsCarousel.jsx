import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectsCarousel = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Woodstock Road",
      subtitle: "Interior Design",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
    },
    {
      id: 2,
      title: "Wavendon Avenue",
      subtitle: "Construction",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
    },
    {
      id: 3,
      title: "Chelsea Suite",
      subtitle: "Architectural Design",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/03/bedroom-CS-2048x1363.jpg",
    },
    {
      id: 4,
      title: "Park View Residence",
      subtitle: "Interior Design",
      image:
        "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
    },
    {
      id: 5,
      title: "Modern Apartment",
      subtitle: "Construction",
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
  const totalWidth = projects.length * itemWidth + (projects.length - 1) * gap;

  // Max index to prevent scrolling past the end
  const maxIndex = Math.max(0, projects.length - itemsPerView);

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

  // Navigate to specific project
  const goToProject = (index) => {
    setActiveIndex(Math.min(Math.max(0, index), maxIndex));
  };

  return (
    <div className="w-full pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Our Projects</h2>

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
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative rounded-lg overflow-hidden flex-shrink-0 group"
                style={{ width: `${itemWidth}px` }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project image */}
                <div className="aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project details overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-medium">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mt-2">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToProject(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-black w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
