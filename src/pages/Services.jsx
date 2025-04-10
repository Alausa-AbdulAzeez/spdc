import React, { useEffect, useState, useRef } from "react";
import { Footer, Navbar, SubpageHero } from "../components";
import {
  ceo,
  essense,
  essesce2,
  services1,
  services2,
  services3,
  services6,
  servicesHero,
} from "../assets/images";

const Services = ({
  activeSection,
  setActiveSection,
  ourEssenceRef,
  ourStoryRef,
  ourTeamRef,
  timelineRef,
  scrollToSection,
}) => {
  const [pageConfig, setPageConfig] = useState({
    bgImage2: essense,
    bgImage: servicesHero,
    header: "Our Serices",
  });

  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Check which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for better UX

      // Check each section's position
      if (
        ourTeamRef.current &&
        scrollPosition >= ourTeamRef.current.offsetTop
      ) {
        setActiveSection("our-team");
      } else if (
        timelineRef.current &&
        scrollPosition >= timelineRef.current.offsetTop
      ) {
        setActiveSection("timeline");
      } else if (
        ourEssenceRef.current &&
        scrollPosition >= ourEssenceRef.current.offsetTop
      ) {
        setActiveSection("our-essence");
      } else if (
        ourStoryRef.current &&
        scrollPosition >= ourStoryRef.current.offsetTop
      ) {
        setActiveSection("our-story");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-10 relative bg-white">
      {/* Main navbar */}
      <Navbar
        nav={"transparent"}
        ourStoryRef={ourStoryRef}
        ourEssenceRef={ourEssenceRef}
        ourTeamRef={ourTeamRef}
        timelineRef={timelineRef}
        scrollToSection={scrollToSection}
      />

      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Section Navigation */}
      <div className="w-full sticky top-0 z-20 bg-white flex justify-center shadow">
        <div className="app__container w-full">
          <div className="w-full">
            <div className="flex space-x-8 py-4 w-full md:justify-center justify-start overflow-x-auto">
              <button
                onClick={() => scrollToSection(ourStoryRef, "our-story")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-story"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Real Estate Development
              </button>

              <button
                onClick={() => scrollToSection(ourEssenceRef, "our-essence")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-essence"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Logistics & Warehousing
              </button>

              <button
                onClick={() => scrollToSection(timelineRef, "timeline")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "timeline"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Real Estate Advisory, Financing & Credit
              </button>

              <button
                onClick={() => scrollToSection(ourTeamRef, "our-team")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-team"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Hospitality
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-full flex justify-center px-5 lg:px-[48px] ">
        <div className="app__container px-5 lg:px-[48px] py-16">
          {/* Real Estate Development Section */}
          <section
            ref={ourStoryRef}
            className="mb-24"
            id="#realEstateDevelopment"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-3xl font-bold mb-8">
                Real Estate Development
              </h2>

              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SMARTS Products Plc. through SPDC Real Estate Investment
                  Company (“REICo”) is a Real Estate Investment Scheme set up as
                  a company to hold income-generating real estate assets as
                  regulated by SEC. Investors in this company will be regular
                  shareholders and will be able to exercise shareholders’ rights
                  to the fullest as stipulated by SEC and ISA rules.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SPDC (“REICo”) is committed to continuously investing and
                  financing real estate developments at various stages in
                  partnership with investors and institutions. Our investment
                  portfolio will cut across commercial & residential, real
                  estate assets, hospitality developments, and site and service
                  plots. We will also develop and/or invest in luxury
                  accommodation, entertainment centers, retail outlets and
                  co-working spaces.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SMURFITKappa partially exited the Company between 1995 – 2005,
                  a group of local investors acquired majority shares of the
                  Company in 2005 and birthed Smarts Products Nigeria Plc.
                  Refocusing the business on commercial warehousing. The Company
                  is now transforming into a full-fledged real estate and
                  logistics firm, aiming to be a regional leader.
                </p>
                <p className="italic mb-6 text-gray-700 leading-relaxed">
                  SPDC REICo will raise funds by way of debt and equity from the
                  Capital Market by way of issuing debts or securities which can
                  be subscribed to by potential qualified Investors.
                </p>
              </div>
            </div>
          </section>

          {/* Parallax Image Section */}
          <div
            className="my-20 lg:my-36 rounded-3xl relative h-[500px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${services1})`,
              filter: `grayscale(100%)`,
            }}
          ></div>

          {/* Logistics & Warehousing Section */}
          <section ref={ourEssenceRef} className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-3xl font-bold mb-8">
                Logistics & Warehousing
              </h2>

              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SMART Products Plc will be transformed into a full-fledged
                  fulfillment, storage, and logistics company that helps
                  e-commerce and other companies store and move products for
                  sale. Which is also known as Third Party Logistics 3PL.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our location maintains a geographic advantage for companies
                  looking to quickly distribute locally produced & imported
                  goods from multiple locations throughout Nigeria into the
                  largest market in Nigeria.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are uniquely positioned to be the leading provider of 3PL
                  services in Lagos and intend on expanding throughout Nigeria.
                  We are working with blue chip companies such as African
                  Commodities Exchange, Lagos Commodities Exchange and Global
                  Corporate Logistics as anchor tenants and/or partner.
                </p>
              </div>
            </div>
          </section>

          {/* Parallax Image Section */}
          <div
            className="my-20 lg:my-36 rounded-3xl relative h-[500px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${services2})`,
              filter: `grayscale(100%)`,
            }}
          ></div>

          <section ref={timelineRef} className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-3xl font-bold mb-8">
                Real Estate Advisory, Financing, Credit
              </h2>

              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our proposed foray into financing, credit and real estate
                  advisory is necessitated by the huge market opportunity in the
                  sector evidenced by huge stranded real estate asset scattered
                  across the land scape due to unavailability of capital.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In order to achieve this, we have acquired Eain Credit Limited
                  – a bespoke real estate advisory and credit firm. Eain credit
                  is licensed by Lagos State Government to carry out the
                  business of credit. The new entity will be named SPDC Finance,
                  it will provide funding strictly for real estate activities
                  and provide mortgage advisory services to clients.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  It is also tailored to promote lifestyle and economic
                  development, our financial services are designed to meet
                  personal and business needs of our consumers across all income
                  levels.
                </p>
              </div>
            </div>
          </section>

          {/* Parallax Image Section */}
          <div
            className="my-20 lg:my-36 rounded-3xl relative h-[500px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${services3})`,
              filter: `grayscale(100%)`,
            }}
          ></div>

          <section ref={ourTeamRef} className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <h2 className="text-3xl font-bold mb-8">Hospitality</h2>

              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SMARTS Products Plc. partake and own direct stakes in
                  hospitality-focused business and assets, such as Hotels,
                  Short-let Apartments, Resorts, Travel and Tours, etc.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our overall objective is to create affordable lifestyle
                  experiences for our hospitality clients by developing
                  top-notch living experiences.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are currently developing premium luxury serviced apartments
                  in our center to blends retail, family fun, e-commerce,
                  entertainment, food and drinks, co-working, and luxury
                  accommodation.
                </p>
              </div>
            </div>
          </section>
          {/* Parallax Image Section */}
          <div
            className="my-20 lg:my-36 rounded-3xl relative h-[500px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
              backgroundImage: `url(${services6})`,
              filter: `grayscale(100%)`,
            }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
