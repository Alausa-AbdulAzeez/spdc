import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Careers,
  ContactPage,
  Home,
  Leadership,
  PageNotFound,
  Sustainability,
} from "./pages";
import GeneralLayout from "./layouts/GeneralLayout";
import Solution from "./pages/Solution";
import Insights from "./pages/Insights";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Solutions Page */}
        <Route
          path="solutions/investmentBanking"
          element={
            <GeneralLayout>
              <Solution />
            </GeneralLayout>
          }
        />
        <Route
          path="solutions/investmentManagement"
          element={
            <GeneralLayout>
              <Solution />
            </GeneralLayout>
          }
        />
        <Route
          path="solutions/securitiesTrading"
          element={
            <GeneralLayout>
              <Solution />
            </GeneralLayout>
          }
        />
        {/* End of Solutions Page */}

        {/* Insights page */}
        <Route
          path="insights"
          element={
            <GeneralLayout>
              <Insights />
            </GeneralLayout>
          }
        />
        {/* End of Insights page */}

        {/* Careers Page */}
        <Route
          path="/careers"
          element={
            <GeneralLayout>
              <Careers />
            </GeneralLayout>
          }
        />
        {/* End of careers Page */}

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <GeneralLayout>
              <ContactPage />
            </GeneralLayout>
          }
        />
        {/* End of careers Page */}

        {/* About Page */}
        <Route
          path="/about"
          element={
            <GeneralLayout>
              <About />
            </GeneralLayout>
          }
        />
        {/* End of About Page */}

        {/* About Page/leadership*/}
        <Route
          path="/about/leadership"
          element={
            <GeneralLayout>
              <Leadership />
            </GeneralLayout>
          }
        />
        {/* End of About Page/leadership */}

        {/* About Page/sustainability*/}
        <Route
          path="/about/sustainability"
          element={
            <GeneralLayout>
              <Sustainability />
            </GeneralLayout>
          }
        />
        {/* End of About Page/sustainability */}

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

