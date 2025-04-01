import React from "react";
import {
  About,
  Carousel,
  Contact,
  Disclaimer,
  Divider,
  Featured,
  Footer,
  Hero,
  ImageCarousel,
  InfoBlock,
  Lifestyle,
  ProjectsCarousel,
  RiskReport,
  ServicesCarousel,
  Solutions,
  Team,
  Values,
} from "../components";

const Home = () => {
  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Projects section */}
      <ProjectsCarousel />

      {/* Services section */}
      <Carousel
        sectionBackground="bg-[#f7f5f5]"
        aspectRatio="aspect-[3/4]"
        showTextBeforeHover={true}
        items={[
          {
            id: 1,
            title: "Woodstock Road",
            description: "Interior Design",
            image:
              "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
          },
          {
            id: 2,
            title: "Wavendon Avenue",
            description: "Construction",
            image:
              "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
          },
          {
            id: 3,
            title: "Chelsea Suite",
            description: "Architectural Design",
            image:
              "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/03/bedroom-CS-2048x1363.jpg",
          },
          {
            id: 4,
            title: "Park View Residence",
            description: "Interior Design",
            image:
              "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/81_WOODSTOCK_ROAD_33-2048x1365.jpg",
          },
          {
            id: 5,
            title: "Modern Apartment",
            description: "Construction",
            image:
              "https://zulufish.wpenginepowered.com/wp-content/uploads/2024/02/20220721-WavendonAv-252-2048x1332.jpg",
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
