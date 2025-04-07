import React, { useEffect, useState, useRef } from "react";
import { Footer, Navbar, SubpageHero } from "../components";
import { ceo, essense, essesce2 } from "../assets/images";

const About = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage2: essense,
    bgImage: essesce2,
    header: "About Us",
  });

  // Refs for each section
  const ourStoryRef = useRef(null);
  const ourVisionRef = useRef(null);
  const ourEssenceRef = useRef(null);
  const ourTeamRef = useRef(null);
  const timelineRef = useRef(null);
  const ourValuesRef = useRef(null);

  // Active section tracker
  const [activeSection, setActiveSection] = useState("our-story");
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll to top on initial load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef, sectionId) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

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
      <Navbar nav={"transparent"} />

      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Section Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow">
        <div className="app__container px-5 lg:px-[48px]">
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-8 py-4 w-full justify-start">
              <button
                onClick={() => scrollToSection(ourStoryRef, "our-story")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-story"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Our Story
              </button>

              <button
                onClick={() => scrollToSection(ourEssenceRef, "our-essence")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-essence"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Our Essence
              </button>

              <button
                onClick={() => scrollToSection(timelineRef, "timeline")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "timeline"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Timeline
              </button>

              <button
                onClick={() => scrollToSection(ourTeamRef, "our-team")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-team"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="app__container px-5 lg:px-[48px] py-16">
        {/* Our Story Section */}
        <section ref={ourStoryRef} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>

            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                SMARTS Products Nigeria Plc (Listed on the Nigerian Stock
                Exchange) is a leading provider of customized real estate,
                warehousing and storage, transportation, global logistics, and
                supply chain solutions. We help businesses navigate the
                complexities of the business world and position them to unlock
                their value. We provide creative logistics solutions with
                warehousing, distribution, e-commerce fulfillment, storage, and
                transportation services. Our vision for excellence is driven by
                our S.M.A.R.T Way.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                SPDC Plc was founded in 1966 as Associated Press Limited ("AP"),
                an American-based independent new organization, and commenced
                business immediately, after over 20 years of successful business
                operation, in 1987 SMURFIT now SMURFITKappa is a FTSE 100
                company and one of the leading providers of paper-based
                packaging, acquired the company and the name was changed to
                Smurfit Print Nigeria Limited and was subsequently listed on the
                Nigerian Stock Exchange now NGX.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                SMURFITKappa partially exited the Company between 1995 – 2005, a
                group of local investors acquired majority shares of the Company
                in 2005 and birthed Smarts Products Nigeria Plc. Refocusing the
                business on commercial warehousing. The Company is now
                transforming into a full-fledged real estate and logistics firm,
                aiming to be a regional leader.
              </p>
              <p className="italic mb-6 text-gray-700 leading-relaxed">
                Our key business focus areas include{" "}
                <strong>
                  {" "}
                  Logistics, Hospitality, Real Estate Development, Digital
                  Warehousing, Facility Management, and Finance.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Title */}
        <div
          ref={ourEssenceRef}
          className="my-36 uppercase tracking-widest w-full font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[46px] sm:leading-[48px] lg:leading-[56px] text-center"
        >
          Our Essence
        </div>
        {/* Our Vision Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our vision is to be a globally responsible organization,
                delivering the best value for our clients and offering superior
                returns to our shareholders dynamically and sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Service Value */}
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-blue-800">
                  Service
                </h3>
                <div className="w-16 h-1 bg-blue-800 mx-auto mb-4"></div>
                <p className="text-gray-700">
                  We are committed to exceptional service in all our
                  interactions.
                </p>
              </div>
            </div>

            {/* Master Value */}
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-green-700">
                  Master
                </h3>
                <div className="w-16 h-1 bg-green-700 mx-auto mb-4"></div>
                <p className="text-gray-700">
                  We strive for mastery in our expertise and professional
                  growth.
                </p>
              </div>
            </div>

            {/* Articulate Value */}
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-purple-700">
                  Articulate
                </h3>
                <div className="w-16 h-1 bg-purple-700 mx-auto mb-4"></div>
                <p className="text-gray-700">
                  We communicate with clarity and precision in all our dealings.
                </p>
              </div>
            </div>

            {/* Radical Value */}
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-red-700">
                  Radical
                </h3>
                <div className="w-16 h-1 bg-red-700 mx-auto mb-4"></div>
                <p className="text-gray-700">
                  We embrace innovative thinking and transformative approaches.
                </p>
              </div>
            </div>

            {/* Trust Value */}
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-amber-700">
                  Trust
                </h3>
                <div className="w-16 h-1 bg-amber-700 mx-auto mb-4"></div>
                <p className="text-gray-700">
                  We build relationships based on reliability and mutual
                  respect.
                </p>
              </div>
            </div>
          </div>

          {/* S.M.A.R.T Acronym Highlight */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Our S.M.A.R.T Values</h3>
            <div className="inline-flex items-center bg-gray-100 rounded-full px-8 py-4">
              <span className="text-blue-800 font-bold text-xl">S</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-green-700 font-bold text-xl">M</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-purple-700 font-bold text-xl">A</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-red-700 font-bold text-xl">R</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-amber-700 font-bold text-xl">T</span>
            </div>
          </div>
        </section>

        {/* Parallax Image Section */}
        <div
          className="my-36 rounded-3xl relative h-[500px] overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage: `url(${pageConfig.bgImage2})`,
            filter: `grayscale(100%)`,
          }}
        ></div>

        <section ref={timelineRef} className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Timeline</h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1966 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right pl-16 sm:pl-20 md:pl-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-1">1966</h3>
                  <p className="text-gray-700">
                    Founded as Associated Press Limited ("AP")
                  </p>
                </div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
              </div>

              {/* 1970 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 order-1 hidden md:block"></div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-8 pl-16 sm:pl-20 order-3">
                  <h3 className="text-xl font-bold mb-1">1970</h3>
                  <p className="text-gray-700">
                    Listed on the Nigerian Stock Exchange
                  </p>
                </div>
              </div>

              {/* 1987 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right pl-16 sm:pl-20 md:pl-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-1">1987</h3>
                  <p className="text-gray-700">
                    Acquired by SMURFIT Kappa, a FTSE 100 company
                  </p>
                </div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
              </div>

              {/* 1988 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 order-1 hidden md:block"></div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-8 pl-16 sm:pl-20 order-3">
                  <h3 className="text-xl font-bold mb-1">1988</h3>
                  <p className="text-gray-700">
                    Change of Name to SMURFIT Nigeria Plc
                  </p>
                </div>
              </div>

              {/* 1995-2005 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right pl-16 sm:pl-20 md:pl-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-1">1995 – 2005</h3>
                  <p className="text-gray-700">
                    Partial Divestment of SMURFIT Kappa
                  </p>
                </div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
              </div>

              {/* 2005 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-8 order-1 hidden md:block"></div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-8 pl-16 sm:pl-20 order-3">
                  <h3 className="text-xl font-bold mb-1">2005</h3>
                  <p className="text-gray-700">
                    Change of Name to Smart Products Nigeria Plc
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex flex-col md:w-1/2 md:pr-8 md:text-right pl-16 sm:pl-20 md:pl-0 order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-1">2022</h3>
                  <p className="text-gray-700">
                    Company was acquired by Globevest Capital Partners
                  </p>
                </div>
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                  <div className="bg-blue-800 w-5 h-5 rounded-full z-10 shadow-md"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        <section ref={ourTeamRef} className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-200 min-w-[300px] h-auto rounded-lg order-last lg:order-first overflow-hidden">
              <img src={ceo} alt="ceo" className="grayscale" />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed  font-semibold text-2xl">
                Olanrewaju Ogunlana
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                CEO/Executive Director
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Olanrewaju is a very experienced investment banker and capital
                market professional. He holds a BSc (Hons) degree in Economics
                from Bowen University, Iwo (2008) and has over 13 years of
                working experience spanning Investment Banking, Pension Fund
                Administration, Insurance, Risk Management, and Securities
                Dealing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                He is currently the CEO of SMARTS Products Plc, prior to joining
                SMARTS Products, he was the Group Head of Business Development
                at Afrinvest (West Africa) Limited. He was also a Senior
                Associate at Afrinvest Capital Limited, leading deal
                origination, execution and sales. Before joining Afrinvest, he
                was an Assistant Manager and Corporate Finance Team lead at AT&A
                Capital Limited. He was previously the Investment Banking Team
                Lead at MorganCapital’s Investment Banking Group and Chief Risk
                Officer at MorganCapital Securities Limited, where he anchored
                fundraising activities of the Investment Banking group and
                spearheaded enterprise risk management and reduction in business
                risks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In the past 12 years, he has participated in fundraising
                programs that assisted State Governments and corporations in
                raising over N400bn. He has also assisted numerous private
                sector organizations in accessing funds from the Capital Market.
                He has very strong contacts with many African-focused & emerging
                markets investors/fund managers
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
