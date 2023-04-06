import React from "react";


const HomeContainer = () => {
  return (
    <section id="home" className="grid gap-2 justify-center text-center w-full my-8">
      <div className="flex-1 flex flex-col items-start justify-center gap-4 mx-auto">
        <div className="flex items-center justify-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
          <p className="text-lg text-blue-500 font-semibold ">
            Blockchain enabled E-commerce
          </p>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold text-headingColor tracking-wide">
          The next generation of {" "}
        </p>
          <span className="text-blue-600 text-[3rem] lg:text-[5.2rem] font-bold tracking-wider">
            E-Commerce
          </span>
        <p className="text-base text-textColor text-center md:w-[80%]">
          Blockchain is well-known for its security features that provide the
          e-commerce sector with extra layers of security.
        </p>
      </div>

    </section>
  );
};

export default HomeContainer;
