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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* End of About Page */}

        {/* Company Page */}
        <Route path="/company" element={<About />} />
        {/* End of Company Page */}

        {/* Services Page */}
        <Route path="/services" element={<Services />} />
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

