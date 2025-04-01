import React from "react";
import {
  About,
  Contact,
  Disclaimer,
  Divider,
  Featured,
  Hero,
  ImageCarousel,
  InfoBlock,
  Lifestyle,
  RiskReport,
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

      {/* Insights section */}
      <Featured />

      {/* Divider */}
      {/* <Divider spacing="my-[32px]" /> */}

      {/* Solutions Section */}
      {/* <Solutions /> */}

      {/* Report */}
      {/* <RiskReport /> */}

      {/* Lifestyle */}
      {/* <Lifestyle /> */}

      {/* Team */}
      {/* <Team /> */}

      {/* InfoBlock */}
      {/* <InfoBlock /> */}

      {/* Values */}
      {/* <Values /> */}

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
