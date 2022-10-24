import React from "react";
import img1 from "../../assets/banner2.jpg";
import img2 from "../../assets/banner3.jpg";

const Features = () => {
  return (
    <div>
      <section className="p-4 lg:p-20 bg-gray-900 text-gray-100">
        <h2 className="text-5xl font-semibold mb-5">Features</h2>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={img1} alt="" className="h-80 bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-800">
              <h3 className="text-3xl font-bold">
                We're reinventing the wheel of tech courses
              </h3>
              <p className="my-6 text-gray-400">
                Explore our courses and be amaized
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img src={img2} alt="" className="h-80 bg-gras-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 bg-slate-800">
              <span className="text-xs uppercase text-gray-400">
                Learn with fun and have fun while learning
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 text-gray-400">
                Your will fell the power and fun once you start taking our
                classes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
