import React, { useEffect, useState } from "react";
import {
  leftSideMenuLinks,
  navbarData,
  rightSideMenuLinks,
  subsidiaries,
} from "../utils/data";
import { Link, NavLink } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { analytics } from "../assets/icons";
import NavDropdown from "./NavDropdown";

const Navbar = ({
  nav,
  scrollToSection,
  ourStoryRef,
  ourEssenceRef,
  timelineRef,
  ourTeamRef,
}) => {
  // Selected Subsidiary
  const [selectedItem, setSelectedItem] = useState(null);

  // Subsidiary list
  const [subsidiariesList, setSubsidiariesList] = useState(subsidiaries);

  // Search menu visibility state
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

  // Navdar dropdown visibility state
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  // Selected navbar dropdown
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  //   Handles mobile screen nav visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleWidth = 1024;

  // Navbar visibility state
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  //    Function that handles mobile screen visibility toggle on windows resize
  const handleResize = () => {
    // Toggle state based on the screen width
    if (window.innerWidth >= toggleWidth) setIsMobileMenuOpen(false);
  };

  // Function to handle the expansion and contraction of a section
  const handleToggleSection = (item) => {
    if (item?.id === selectedItem?.id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };
  // End of unction to handle the expansion and contraction of a section

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle search menu
  const handleMenuClick = () => {
    // Set profile visibility state to true
    setIsSearchMenuOpen((prev) => !prev);
  };
  // End of function to toggle search menu

  // Function to handle input change
  const handleInputChange = (e) => {
    const filteredSub = subsidiaries?.filter((subsidiary) =>
      subsidiary?.title.toLowerCase()?.includes(e?.target?.value?.toLowerCase())
    );

    setSubsidiariesList(filteredSub);
  };
  // End of function to handle input change

  // Close search menu menu
  const closeSearchMenu = (e, type, action, item) => {
    // Prevent event bubbling
    e.stopPropagation();

    // Set search menu visibility state to true
    setIsSearchMenuOpen(false);

    // For smaller screens
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      if (type === "subSection") {
        if (item?.id === "RealEstate") {
          action(ourStoryRef, "our-story");
        }
        if (item?.id === "LogisticsWarehousingFulfillment") {
          action(ourEssenceRef, "our-essence");
        }
        if (item?.id === "Hospitality") {
          action(ourTeamRef, "our-essence");
        }
        if (item?.id === "FinancialServices") {
          action(timelineRef, "timeline");
        }
      }
    }, 200);
  };
  // End of function to close search menu

  // Close nav dropdown
  const closeNavDropdown = (e) => {
    // Prevent event bubbling
    e.stopPropagation();

    // Set search menu visibility state to true
    setIsNavDropdownOpen(false);
  };
  // End of function to close nav dropdown

  // Function to handle dropdown Item click
  const handleDropdownItemClick = (id) => {
    // Toggle nav dropdown
    // If the clicked item is the currently active item, close  the
    // navdropdown, else leave it open

    if (selectedNavItem?.id === id) {
      setIsNavDropdownOpen((prev) => !prev);
    } else {
      if (!isNavDropdownOpen) {
        setIsNavDropdownOpen(true);
      }
    }

    const clickedNavDropdown = navbarData?.find(
      (navbarDatum) => navbarDatum?.id === id
    );
    setSelectedNavItem(clickedNavDropdown);
  };
  // End of function to handle dropdown Item click

  //   Useffect to exit mobile screen mode
  useEffect(() => {
    // Initial check on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      // Scrolling down - hide navbar
      setIsNavbarVisible(false);
    } else {
      // Scrolling up - show navbar
      setIsNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`absolute top-0 z-[100] h-[70px] lg:h-[90px] w-full flex items-center justify-center  transition-transform duration-300 ease-in-out  ${
          nav === "transparent" ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="h-full app__container w-full bg-transparent px-5 lg:px-[48px] lg:pr-[100px] flex items-center justify-between">
          {/* LHS (LOGO) */}
          <div className="flex  items-center gap-10">
            {/* LHS (LOGO) */}
            <Link to={"/"}>
              <img
                src={headerLogo}
                alt="Logo"
                className="w-auto h-[70px] lg:h-[90px]"
              />
            </Link>
          </div>

          {/* RHS */}
          <div className="hidden lg:flex gap-5">
            {/* MIDDLE  */}
            <div className="hidden lg:flex gap-[32px] text-white ">
              {navbarData?.map(({ id, title, url, type, subsections }) => {
                if (type === "link") {
                  return (
                    <NavLink to={url} key={id}>
                      {({ isActive }) => (
                        <NavbarLinkItem
                          title={title}
                          url={url}
                          key={id}
                          isActive={isActive}
                        />
                      )}
                    </NavLink>
                  );
                } else if (type === "navDropdown") {
                  return (
                    <NavLink
                      key={id}
                      to={url}
                      onClick={(e) => e.preventDefault()}
                    >
                      {({ isActive }) => (
                        <NavbarLinkItem
                          title={title}
                          url={url}
                          key={id}
                          isActive={isActive}
                          handleClick={() => handleDropdownItemClick(id)}
                        />
                      )}
                    </NavLink>
                  );
                } else if (type === "newLink") {
                  return (
                    <NavLink
                      to={url}
                      key={id}
                      onClick={() => setIsNavDropdownOpen(false)}
                    >
                      {({ isActive }) => (
                        <NavbarLinkItem
                          title={title}
                          url={url}
                          key={id}
                          isActive={isActive}
                        />
                      )}
                    </NavLink>
                  );
                }
              })}
            </div>

            <div className="relative">
              <div
                className={`z-[2000] p-3 ${
                  isNavbarVisible ? "bg-transparent" : "bg-white"
                } fixed top-6 right-12`}
              >
                {/* Hamburger Menu Icon */}
                <button
                  onClick={handleMenuClick}
                  className={`cursor-pointer ${
                    isNavbarVisible ? "text-white" : "text-black"
                  } hover:opacity-50  w-7 h-[18px] flex flex-col justify-between`}
                >
                  <div
                    className={`h-[2px] w-7 bg-current rounded transition-all duration-300 ${
                      isSearchMenuOpen
                        ? "rotate-45 translate-y-2.5 text-black"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-7 bg-current rounded transition-all duration-300 ${
                      isSearchMenuOpen ? "opacity-0 text-black" : ""
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-7 bg-current rounded transition-all duration-300 ${
                      isSearchMenuOpen
                        ? "-rotate-45 -translate-y-2.5 text-black"
                        : ""
                    }`}
                  ></div>
                </button>
              </div>

              <SearchMenu
                closeSearchMenu={(e) => closeSearchMenu(e)}
                isSearchMenuOpen={isSearchMenuOpen}
              >
                <div className="pl-20 bg-white flex pt-20 gap-20 items-start justify-start w-full h-screen">
                  {/* LHS */}
                  <div className="flex gap-8 flex-col justify-start items-start">
                    {/* Title */}
                    <div className="text-sm font-semibold tracking-widest text-gray-500">
                      WHO WE ARE
                    </div>
                    <div className="flex flex-col gap-6">
                      {leftSideMenuLinks?.map((item) => {
                        return (
                          <Link
                            to={item?.link}
                            onClick={(e) => closeSearchMenu(e)}
                            className="font-medium w-fit uppercase hover:text-slate-600 cursor-pointer tracking-widest"
                          >
                            {item?.label}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Links */}
                  </div>
                  {/* RHS */}
                  <div className="flex flex-col gap-8 justify-start items-start">
                    {/* Title */}
                    <div className="uppercase text-sm font-semibold tracking-widest text-gray-500">
                      Our Business Areas
                    </div>
                    <div className="flex flex-col gap-6">
                      {rightSideMenuLinks?.map((item) => {
                        return (
                          <Link
                            to={item?.link}
                            onClick={(e) =>
                              closeSearchMenu(
                                e,
                                "subSection",
                                scrollToSection,
                                item
                              )
                            }
                            className="font-medium w-fit uppercase hover:text-slate-600 cursor-pointer tracking-widest"
                          >
                            {item?.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SearchMenu>
            </div>
          </div>
          {/* Nav Dropdown */}
          <NavDropdown
            isNavDropdownOpen={isNavDropdownOpen}
            closeNavDropdown={closeNavDropdown}
            style={"h-[280px]"}
            title={selectedNavItem?.id}
            subsections={selectedNavItem?.subsections}
            setIsNavDropdownOpen={setIsNavDropdownOpen}
          />

          {/* HAMBURGER MENU */}
          <img
            src={analytics}
            alt="menu"
            className="lg:hidden cursor-pointer rotate-90 h-[30px]"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleInputChange={handleInputChange}
        subsidiariesList={subsidiariesList}
        toggleMenu={closeSearchMenu}
        scrollToSection={scrollToSection}
        navbarData={navbarData}
      />
    </>
  );
};

export default Navbar;

// Navbar link item
const NavbarLinkItem = ({ title, url, isActive, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${
        isActive ? "text-neutral-300" : "text-white text-[16px] font-semibold"
      } hover:opacity-50  w-fit cursor-pointer flex items-center relative text-left transition-all duration-200 ease-linear group`}
    >
      <div className={`${isActive ? "font-semibold" : "font-semibold"} `}>
        {title}
      </div>
    </div>
  );
};

const SearchMenu = ({ isSearchMenuOpen, closeSearchMenu, children }) => {
  return (
    <AnimatePresence>
      {isSearchMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed h-[calc(100vh+100px)] inset-0 bg-black bg-opacity-20 z-[1000]"
            onClick={closeSearchMenu}
          ></div>

          {/* Sliding Modal */}
          <motion.div
            className="z-[1000] fixed top-0 right-0 h-screen w-[75%]  bg-transparent"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="h-full w-full">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
