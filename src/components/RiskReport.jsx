import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { report } from "../assets/images";

const RiskReport = ({ fileLink, title, sub1, sub2, img }) => {
  const handleLocalFileDownload = () => {
    const fileUrl = `${
      fileLink || "/AfricaMacroeconomicPerformanceandOutlook.pdf"
    }`; // Change this to the actual file path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // Extract filename from the path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="w-full py-6 bg-[#f4f4f4]  text-secondary flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full py-10   flex items-center h-auto app__container px-5 lg:px-[48px] gap-[30px] lg:gap-[60px]"
      >
        <div className="hidden md:block rounded-md h-[272px] lg:ml-[120px] min-w-[204px] overflow-hidden shadow-2xl">
          <img
            src={img || report}
            alt="Report"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col h-full  justify-between py-1">
          <div className="">
            <div className="text-md font-semibold opacity-0">
              People strategy
            </div>
            <div className="text-3xl font-semibold text-primary-110 my-3">
              {title || "Africa Outlook"}
            </div>
            <div className="font-medium text-lg mb-3 lg:mb-0">
              {sub1 || `2024 Africa's Macroeconomic Performance and Outlook.`}
              <br /> {sub2 || `A publication of African Development Bank.`}
            </div>
          </div>
          <Button
            endIcon={arrowRight}
            size={"medium"}
            onClick={handleLocalFileDownload}
          >
            <div className="text-secondary text-sm font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Download the report
            </div>
          </Button>
        </div>
      </section>{" "}
    </section>
  );
};

export default RiskReport;
