const About = () => {
  return (
    <section className="flex justify-center" id="about">
      {/* Main container */}
      <section id="hero" className="py-28 lg:px-28 w-full app__container px-5">
        {/* Summary */}
        <div className="text-justify mb-[100px] w-full md:w-[90%] uppercase text-2xl leading-loose tracking-widest">
          <strong>SMARTS Products Nigeria Plc</strong> (Listed on the Nigerian
          Stock Exchange) is a leading provider of customized real estate,
          warehousing and storage, transportation, global logistics, and supply
          chain solutions.
        </div>
        {/* More */}
        <div className="flex">
          <div className="flex-1 opacity-0 text-justify hidden md:flex">
            We help businesses navigate the complexities of the business world
            and position them to unlock their value. We provide creative
            logistics solutions with warehousing, distribution, e-commerce
            fulfillment, storage, and transportation services. Our S.M.A.R.T Way
            drives our vision for excellence.
          </div>
          <div className="flex-1 ">
            <div className="text-lg font-light italic text-justify">
              {" "}
              We help businesses navigate the complexities of the business world
              and position them to unlock their value. We provide creative
              logistics solutions with warehousing, distribution, e-commerce
              fulfillment, storage, and transportation services. Our S.M.A.R.T
              Way drives our vision for excellence.
            </div>

            <div className="uppercase text-gray-600 text-sm tracking-widest font-semibold mt-5">
              ABOUT US
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
