import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  CustomInfoBlock,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { aimMissionVision } from "../utils/data";

const About = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/24847334/pexels-photo-24847334/free-photo-of-cranes-between-skyscrapers-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260",
    header: "About Us",
  });

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Benefits at Equiserve */}
      <CareerBlock
        color={"#FAF9F4"}
        title={
          "EQUISERVE is a global company focusing on transforming Africa and contributing to the sustainable development of African economies."
        }
        image={
          "https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1920&dpr=2"
        }
        subTitle1={
          "We act with integrity, a client-focused mindset, and an entrepreneurial drive, and embrace diversity and inclusive growth. This is our DNA and on this fulcrum, we build our global business."
        }
      />

      {/* InfoBlock */}
      <CustomInfoBlock
        title={"Why Equiserve"}
        content={
          "We are a highly energetic, hands-on firm with a strong track record and passion for working with ambitious founders, entrepreneurs and management teams to realize the potential of their businesses."
        }
        content2={
          "Our success is built on our extensive networks in the UK’s early stage and mid-market business community, our experience of operating seamlessly across public and private markets, and our ability to access capital from a deep and broad pool of high-quality investors."
        }
      />

      {/* Job Openings */}
      {/* <CareerBlock
        color={"#F4F7FA"}
        image={
          "https://images.pexels.com/photos/8127309/pexels-photo-8127309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        title={
          "Join our team and help us shape the future of sustainable investments."
        }
        subTitle1={
          "OOPS!! No opening at the moment cirle back later or you can check out our graduate opportunities in the subsequent section."
        }
        inverse={true}
      /> */}

      {/* Values */}
      <Values
        title={"Our Aim, Mission, and Vision"}
        content={
          "At Equiserve, we are committed to empowering businesses with the financial expertise and strategic solutions they need to grow, innovate, and succeed. Our approach is built on trust, excellence, and a deep understanding of capital, corporate, and investment banking."
        }
        data={aimMissionVision}
      />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default About;
