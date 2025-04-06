import React, { useEffect, useState, useRef } from "react";
import { Footer, Navbar, SubpageHero } from "../components";

const About = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/24847334/pexels-photo-24847334/free-photo-of-cranes-between-skyscrapers-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260",
    header: "About Us",
  });

  // Refs for each section
  const ourStoryRef = useRef(null);
  const ourVisionRef = useRef(null);
  const ourTeamRef = useRef(null);
  const ourValuesRef = useRef(null);
  const parallaxRef = useRef(null);

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

      // Update scrollY for parallax effect
      setScrollY(window.scrollY);

      // Check each section's position
      if (
        ourValuesRef.current &&
        scrollPosition >= ourValuesRef.current.offsetTop
      ) {
        setActiveSection("our-values");
      } else if (
        ourTeamRef.current &&
        scrollPosition >= ourTeamRef.current.offsetTop
      ) {
        setActiveSection("our-team");
      } else if (
        ourVisionRef.current &&
        scrollPosition >= ourVisionRef.current.offsetTop
      ) {
        setActiveSection("our-Vision");
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
            <div className="flex space-x-8 py-4 w-full justify-center">
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
                onClick={() => scrollToSection(ourVisionRef, "our-Vision")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-Vision"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Our Vision
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

              <button
                onClick={() => scrollToSection(ourValuesRef, "our-values")}
                className={`whitespace-nowrap px-4 py-2 font-medium transition-all duration-200 ${
                  activeSection === "our-values"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Our Values
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
        <div className="my-36 uppercase tracking-widest w-full font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[46px] sm:leading-[48px] lg:leading-[56px] text-center">
          Our Essence
        </div>
        {/* Our Vision Section */}
        <section ref={ourVisionRef} className="mb-24">
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
        <section ref={ourValuesRef}>
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
        <section
          ref={parallaxRef}
          className="relative h-96 w-full overflow-hidden my-24"
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/8134762/pexels-photo-8134762.jpeg?auto=compress&cs=tinysrgb&w=1260)`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Excellence in Action
                </h2>
                <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                  We're committed to delivering exceptional results through
                  innovative solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section ref={ourTeamRef} className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg p-6 text-center"
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-xl mb-2">Team Member {item}</h3>
                <p className="text-gray-600 mb-4">Position</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
