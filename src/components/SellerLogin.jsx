import React from "react";

const SellerLogin = () => {
  const register = () => {
    alert("You have successfully register !!")
  };
  return (
    <section className="bg-primary flex justify-center ">
      <div className="flex flex-col gap-5 items-center py-20 h-auto px-10">
        <div className="w-full  h-auto font-normal text-lg p-4 text-center tracking-wide leading-7">
          You need just 3 things to become a Seller, your basic details & GSTIN,
          Pick-up address, and 1 unique product to sell. Yes! this is all that
          you require to register as a seller on Block-Bazaar.
        </div>
        <div className="w-full px-10">
          <form className="flex flex-col gap-4">
            <h1 className="text-xl font-bold leading-tight tracking-wider text-gray-900 md:text-2xl my-2 text-center">
              Please login to your account
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border sm:text-sm rounded-lg  bg-primary focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 bg-primary text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="text-center pt-1 pb-1">
              <button
                type="submit"
                className="w-full text-primary bg-headingColor hover:bg-blue-500
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800 hover:text-white"
              >
                Register
              </button>
            </div>

            <div>
              <a className="text-gray-500 text-center" href="#!">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center my-4 lg:py-0 w-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-wider text-gray-900 md:text-2xl dark:text-white">
              Start Selling !
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email2"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 :placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/* <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What are you looking to sell?
                  </label>
                  <div
                    className="flex items-center justify-around text-white
                  text-sm "
                  >
                    <button classNameName="border p-2 h-16 rounded-md">
                      All categories
                    </button>
                    <button classNameName="border p-2 h-16 rounded-md">
                      Only Books
                      <p>(PAN is mandatory)</p>
                    </button>
                  </div>
                </div> */}
              <div>
                <label
                  htmlFor="gstin"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Enter GSTIN
                </label>
                <input
                  type="text"
                  name="gstin"
                  id="gstin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Address
                </label>
                <textarea
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full text-headingColor bg-primary hover:bg-blue-500
                  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800 hover:text-white"
                onClick={register}
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerLogin;
