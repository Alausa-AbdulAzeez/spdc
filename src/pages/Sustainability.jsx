import React, { useEffect, useState } from "react";
import {
  CareerBlock,
  Contact,
  Disclaimer,
  SubpageHero,
  Values,
} from "../components";
import { sustainability1, sustainability2 } from "../assets/images";

const Sustainability = () => {
  const [pageConfig, setPageConfig] = useState({
    bgImage:
      "https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    header: "Operational and Investment Sustainability",
  });

  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <div className="z-10 relative bg-white overflow-x-hidden">
      {/* Hero section */}
      <SubpageHero
        bgImage={pageConfig?.bgImage}
        config={pageConfig}
        hideCta={true}
      />

      {/* Operational sustainability */}
      <CareerBlock
        color={"#FAF9F4"}
        title={"Operational sustainability"}
        image={sustainability1}
        subTitle1={
          "Equiserve operational sustainability revolves around our commitment to apply high ethical standards transparently in all dealings and we monitor portfolio companies adherence to this principle. We have always strived for innovation and integrity and we are passionate about achieving the best result for ourselves and our portfolio companies."
        }
      />
      {/* Investment sustainability */}
      <CareerBlock
        color={"#F4F7FA"}
        title={"Investment sustainability"}
        image={sustainability2}
        subTitle1={
          "We walk with Shareholders with a mission that is not just about achieving financial returns, but importantly how our investment will impact the society and the community we operate and serve. Equiserve will continue to be a leader in sustainable investing having developed the necessary skills over the years to create sustainable wealth for our Investors."
        }
      />

      {/* Values */}
      <Values />

      {/* Contact */}
      <Contact />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  );
};

export default Sustainability;
