import React from "react";

const scmDapp = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-blue-600 text-[3rem] lg:text-[5rem] font-bold">
          SCM
          <span className="text-[2.5rem] lg:text-[4.5rem] font-bold text-headingColor tracking-wide">
            DAPP
          </span>
        </p>
        <div className="flex items-center justify-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
          <p className="text-lg text-blue-500 font-semibold ">
            Welcome to Block-Bazaar Supply Chain DAPP.
          </p>
        </div>
        <p className="text-lg text-textColor text-center md:w-[80%] pt-3 tracking-wide">
          It is a Decentralized E2E Logistics Application that stores the
          whereabouts of product at every freight hub on the Blockchain. At
          consumer end, customers can simply scan the QR CODE or enter ID of
          products and get complete information about the provenance of that
          product hence empowering consumers to only purchase authentic and
          quality products.
        </p>
        <div className="flex gap-96 mt-10">
          <button
            type="button"
            className="bg-gradient-to-br from-blue-400 to-blue-600  px-6 py-2 rounded-lg
            transition-all ease-in-out duration-100 w-full md:w-auto hover:shadow-lg text-white"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-gradient-to-br from-blue-400 to-blue-600  px-4 py-2 rounded-lg
            transition-all ease-in-out duration-100 w-full md:w-auto hover:shadow-lg text-white"
          >
            Signup
          </button>
        </div>
      </div>
    </section>
  );
};

export default scmDapp;
