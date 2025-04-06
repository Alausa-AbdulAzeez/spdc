const SubpageHero = ({ bgImage, config }) => {
  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className={`relative w-full overflow-hidden h-[100vh]  text-secondary  lg:h-[100vh] lg:max-h-[620px] flex justify-center z-10`}
      style={headerStyle}
    >
      {/* Backdrop */}
      <div className="absolute top-0 h-[100%] inset-0 bg-black bg-opacity-30 "></div>

      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-5 lg:px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="text-white relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className=" bg-black mb-5 text-center uppercase tracking-widest font-bold text-[20px] w-full ">
              {config?.title}
            </div>

            <div className="uppercase tracking-widest w-full font-bold  text-[36px] sm:text-[42px] xl:text-[50px] leading-[46px] sm:leading-[48px] lg:leading-[56px] text-center">
              {config?.header}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SubpageHero;
