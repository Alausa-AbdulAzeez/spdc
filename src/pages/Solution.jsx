import React, { useEffect, useState } from "react";
import {
  Contact,
  CustomInfoBlock,
  Disclaimer,
  Divider,
  Featured,
  Hero,
  ImageCarousel,
  InfoBlock,
  Lifestyle,
  RiskReport,
  Solutions,
  SubpageHero,
  Team,
  Values,
} from "../components";
import { useLocation } from "react-router-dom";
import {
  insights,
  investmentBankingSubsection,
  investmentManagementSubsection,
  navbarData,
  productsAndServicesArray,
  securitiesTradingSubsection,
} from "../utils/data";

const Solution = () => {
  const location = useLocation();
  const [pageConfig, setPageConfig] = useState(null);

  const pageLocation = location?.pathname?.split("/")[2];

  const solutionsData = productsAndServicesArray?.filter(
    (product) => product?.title !== pageConfig?.title
  );

  useEffect(() => {
    console.log("Should scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });

    switch (pageLocation) {
      case "investmentBanking":
        setPageConfig(investmentBankingSubsection);
        break;
      case "securitiesTrading":
        setPageConfig(securitiesTradingSubsection);
        break;
      case "investmentManagement":
        setPageConfig(investmentManagementSubsection);
        break;

      default:
        break;
    }
  }, [location.state]);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero bgImage={pageConfig?.bgImage} config={pageConfig} />

      <Divider />

      {/* InfoBlock */}
      <CustomInfoBlock
        title={pageConfig?.title}
        content={pageConfig?.content}
        floatingContent={true}
      />

      {/* Report */}
      <RiskReport
        title={pageConfig?.riskReportTitle}
        sub1={pageConfig?.riskReportSub1}
      />

      {/* Divider */}
      <Divider spacing="mb-[32px]" />

      {/* Solutions Section */}
      <Solutions data={solutionsData} title={pageConfig?.solutionsTitle} />

      {/* Divider */}
      <Divider spacing="mb-[32px]" />

      {/* Insights section */}
      <Featured data={insights?.slice(3)} title={"Related Insights"} />

      {/* Divider */}
      <Divider spacing="my-12" />

      {/* Values */}
      <Values />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Solution;
