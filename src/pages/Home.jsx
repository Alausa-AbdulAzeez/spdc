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
import {
  services1,
  services2,
  services3,
  services4,
  services5,
  services6,
  smartTowers,
  victoriaCourt,
} from "../assets/images";

const Home = ({
  activeSection,
  setActiveSection,
  ourEssenceRef,
  ourStoryRef,
  ourTeamRef,
  timelineRef,
  scrollToSection,
}) => {
  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <Hero
        ourStoryRef={ourStoryRef}
        ourEssenceRef={ourEssenceRef}
        ourTeamRef={ourTeamRef}
        timelineRef={timelineRef}
        scrollToSection={scrollToSection}
      />

      {/* About section */}
      <About />

      {/* Projects section */}
      <Carousel
        showTextBeforeHover={true}
        items={[
          {
            id: 1,
            title: "Victoria Court",
            subtitle: "Ilupeju",
            image: victoriaCourt,
          },
          {
            id: 2,
            title: "Smart Towers",
            subtitle: "Ikoyi",
            image: smartTowers,
          },
        ]}
      />

      <section className="flex justify-center">
        {/* Main container */}
        <section
          id="hero"
          className="py-10 lg:px-28 w-full app__container px-5 flex items-center justify-center"
        >
          {/* Summary */}
          <div className="text-center mb-[100px] w-[80%] leading-loose font-light text-xl">
            Providing market leadership in real-estate development, commercial
            warehousing & logistics, construction.
          </div>
        </section>
      </section>

      {/* Services section */}
      <Carousel
        sectionBackground="bg-[#f7f5f5]"
        aspectRatio="aspect-[3/4]"
        showTextBeforeHover={true}
        title="Our Services"
        items={[
          {
            id: 1,
            title: "Real Estate Development",
            description: "",
            image: services1,
          },
          {
            id: 2,
            title: "Digital Warehousing",
            description: "",
            image: services2,
          },
          {
            id: 3,
            title: "Facility Management",
            description: "",
            image: services3,
          },
          {
            id: 4,
            title: "Finance",
            description: "",
            image: services4,
          },
          {
            id: 5,
            title: "Logistics",
            description: "",
            image: services5,
          },
          {
            id: 6,
            title: "Hospitality",
            description: "",
            image: services6,
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
