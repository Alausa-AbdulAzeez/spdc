import React from "react";
import { Footer, Navbar } from "../components";

const GeneralLayout = ({ isNavTransparent, children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar nav={isNavTransparent && "transparent"} />
      <main className="overflow-auto h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
