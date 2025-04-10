import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Careers,
  ContactPage,
  Home,
  Leadership,
  PageNotFound,
  Services,
  Sustainability,
} from "./pages";
import GeneralLayout from "./layouts/GeneralLayout";
import Solution from "./pages/Solution";
import Insights from "./pages/Insights";
import { Contact } from "./components";
import { useRef, useState } from "react";

const App = () => {
  // Refs for each section
  const ourStoryRef = useRef(null);
  const ourVisionRef = useRef(null);
  const ourEssenceRef = useRef(null);
  const ourTeamRef = useRef(null);
  const timelineRef = useRef(null);
  const ourValuesRef = useRef(null);

  // Active section tracker
  const [activeSection, setActiveSection] = useState("our-story");

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef, sectionId) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <About
              activeSection={activeSection}
              ourEssenceRef={ourEssenceRef}
              ourStoryRef={ourStoryRef}
              ourTeamRef={ourTeamRef}
              setActiveSection={setActiveSection}
              timelineRef={timelineRef}
            />
          }
        />
        {/* End of About Page */}

        {/* Company Page */}
        <Route
          path="/company"
          element={
            <About
              activeSection={activeSection}
              ourEssenceRef={ourEssenceRef}
              ourStoryRef={ourStoryRef}
              ourTeamRef={ourTeamRef}
              setActiveSection={setActiveSection}
              timelineRef={timelineRef}
              scrollToSection={scrollToSection}
            />
          }
        />
        {/* End of Company Page */}

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <Services
              activeSection={activeSection}
              ourEssenceRef={ourEssenceRef}
              ourStoryRef={ourStoryRef}
              ourTeamRef={ourTeamRef}
              setActiveSection={setActiveSection}
              timelineRef={timelineRef}
              scrollToSection={scrollToSection}
            />
          }
        />
        {/* End of Services Page */}

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* End of Contact Page */}

        {/* Undocumented routes */}
        <Route
          path="*"
          element={
            <GeneralLayout>
              <PageNotFound />
            </GeneralLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

