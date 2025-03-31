import React, { useEffect, useState } from "react";
import { Disclaimer, Divider, Featured, SubpageHero } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import {
  insights,
  investmentBankingSubsection,
  investmentManagementSubsection,
  navbarData,
  productsAndServicesArray,
  securitiesTradingSubsection,
} from "../utils/data";
import { Icon } from "@iconify/react";

const Insights = () => {
  const itemsPerPage = 6; // Adjust this number based on your design needs
  const navigate = useNavigate();
  const location = useLocation();
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=3681",
    header: "Stay Tuned with Us",
  });

  const pageLocation = location?.pathname?.split("/")[2];

  // Get page from URL query params
  const query = new URLSearchParams(location.search);
  const initialPage = parseInt(query.get("page"), 10) || 1;

  // Pagination state
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  // Adjust visible pages based on screen size
  useEffect(() => {
    const updateVisiblePages = () => {
      setMaxVisiblePages(
        window.innerWidth < 450 ? 1 : window.innerWidth < 768 ? 2 : 5
      );
    };
    updateVisiblePages();
    window.addEventListener("resize", updateVisiblePages);
    return () => window.removeEventListener("resize", updateVisiblePages);
  }, []);

  // Update URL on page change
  const handlePageChange = (pageNumber) => {
    if (
      pageNumber < 1 ||
      pageNumber > Math.ceil(insights.length / itemsPerPage)
    )
      return;

    setCurrentPage(pageNumber); // Update state
    navigate(`?page=${pageNumber}`); // Update URL
  };

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = insights.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(insights.length / itemsPerPage);

  // Generate pagination with ellipses
  const generatePagination = () => {
    const pages = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) pages.push(1, "...");
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages) pages.push("...", totalPages);

    return pages;
  };

  const paginationItems = generatePagination();

  const solutionsData = productsAndServicesArray?.filter(
    (product) => product?.title !== pageConfig?.title
  );

  useEffect(() => {
    console.log("Should scroll");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.state]);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero bgImage={pageConfig?.bgImage} config={pageConfig} />

      {/* Divider */}
      <Divider spacing="mb-[32px]" />

      {/* Insights section */}
      <Featured data={currentItems} title={"Featured Insights"} />

      {/* Divider */}
      <div className="mb-[32px]"></div>

      {/* Pagination */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 mt-8">
          {/* Left Arrow */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`transition-all ease-in-out duration-300 border border-black rounded-full flex items-center justify-center w-[48px] h-[48px] transform z-10 ${
              currentPage === 1
                ? "cursor-not-allowed opacity-55"
                : "cursor-pointer opacity-100"
            }`}
          >
            <Icon
              icon="iconamoon:arrow-left-2-light"
              className="w-6 h-6 text-black"
            />
          </button>

          {paginationItems.map((item, index) =>
            typeof item === "number" ? (
              <button
                key={index}
                onClick={() => handlePageChange(item)}
                className={`transition-all w-[46px] h-[46px]  ease-in-out duration-300 flex items-center justify-center rounded-full border ${
                  currentPage === item
                    ? "bg-black text-white"
                    : "bg-gray-transparent border-neutral-20 text-textColor-85 hover:bg-primary hover:text-white"
                }`}
              >
                {item}
              </button>
            ) : (
              <span
                key={index}
                className="px-4 py-2 text-textColor-60 pointer-events-none"
              >
                ...
              </span>
            )
          )}

          {/* Right Arrow */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`transition-all ease-in-out duration-300 border border-black rounded-full w-[48px] h-[48px] flex items-center justify-center transform z-10 ${
              currentPage === totalPages
                ? "cursor-not-allowed opacity-55"
                : "cursor-pointer opacity-100"
            }`}
          >
            <Icon
              icon="iconamoon:arrow-right-2-light"
              className="w-6 h-6 text-black"
            />
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Insights;
