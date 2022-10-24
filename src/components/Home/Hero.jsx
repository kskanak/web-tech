import React from "react";
import banner from "../../assets/heroSection-banner.jpg";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome to <span className="text-violet-400">Web Tech</span>{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Your Web Technology learning Partner
              <br />
              Trust us to provide you the best curriculam..
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg">
            <img
              src={banner}
              alt="banner"
              c
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
