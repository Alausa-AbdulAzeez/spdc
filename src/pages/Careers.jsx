import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";

const Careers = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "Come Join Us",
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
        title={"Benefits at Equiserve"}
        image={
          "https://images.pexels.com/photos/5981782/pexels-photo-5981782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        subTitle1={
          "At Equiserve, we believe in nurturing our employees' growth and well-being. Our benefits package includes competitive salaries, comprehensive health plans, professional development opportunities, and a supportive work environment that fosters both personal and career advancement."
        }
      />

      {/* Job Openings */}
      <CareerBlock
        color={"#F4F7FA"}
        image={
          "https://images.pexels.com/photos/8127309/pexels-photo-8127309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        title={
          "Join our team and help us shape the future of sustainable investments."
        }
        subTitle1={
          "OOPS!! No opening at the moment circle back later or you can check out our graduate opportunities in the subsequent section."
        }
        inverse={true}
      />

      {/* Benefits at Equiserve */}
      <CareerBlock
        color={"#FAF9F4"}
        title={
          "Kickstart your career with Equiserve's graduate programs.Benefits at Equiserve"
        }
        image={
          "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        subTitle1={
          "We are keen to hear from graduates seeking opportunities in Investment Banking. Applicants can send CVs to"
        }
        mailTo={"hr@equiservegroup.com"}
      />

      {/* Values */}
      <Values />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Careers;
