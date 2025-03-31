import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavDropdown = ({
  isNavDropdownOpen,
  closeNavDropdown,
  title,
  subsections,
  style,
  setIsNavDropdownOpen,
}) => {
  return (
    <AnimatePresence>
      {isNavDropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed top-[90px] h-[calc(100vh+100px)] inset-0 bg-black bg-opacity-20 z-[1000]"
            onClick={closeNavDropdown}
          ></div>

          {/* Sliding Modal */}
          <motion.div
            className={`${style} bg-white  flex justify-center z-[1000] fixed top-[90px] right-[0px] w-screen bg-transparent`}
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="h-full w-full  p-10 app__container">
              <div className=" flex justify-end">
                <Icon
                  onClick={closeNavDropdown}
                  icon={"si:close-line"}
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
              <div className="flex h-full">
                <SingleColumn
                  title={subsections[0]?.title}
                  style={"pr-6"}
                  link={subsections[0]?.dropdownUrl}
                  content={subsections[0]?.content}
                  subsection={subsections[0]}
                  setIsNavDropdownOpen={setIsNavDropdownOpen}
                />
                <SingleColumn
                  title={subsections[1]?.title}
                  style={"px-6 border-x border-x-secondary"}
                  link={subsections[1]?.dropdownUrl}
                  content={subsections[1]?.content}
                  subsection={subsections[1]}
                  setIsNavDropdownOpen={setIsNavDropdownOpen}
                />
                <SingleColumn
                  title={subsections[2]?.title}
                  style={"px-6"}
                  link={subsections[2]?.dropdownUrl}
                  content={subsections[2]?.content}
                  subsection={subsections[2]}
                  setIsNavDropdownOpen={setIsNavDropdownOpen}
                />

                {/* Extra cloolumn */}
                <div className="flex-1 opacity-0"></div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SingleColumn = ({
  title,
  style,
  link,
  content,
  subsection,
  setIsNavDropdownOpen,
}) => {
  return (
    <div className={`${style} flex-1 h-full `}>
      <div className="text-secondary text-[16px] font-semibold">{title}</div>

      {/* <!-- Title --> */}
      <Link
        onClick={() => setIsNavDropdownOpen((prev) => !prev)}
        state={subsection}
        to={link}
        class={`text-lg mt-5 cursor-pointer transition-all ease-in-out duration-200 hover:text-primary-110  h-[56px] font-bold text-secondary mb-2 line-clamp-2`}
      >
        {content}
      </Link>
    </div>
  );
};

export default NavDropdown;
