import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseFee from "./CourseFee";

const CheckoutPages = () => {
  const premiumDetails = useLoaderData();
  const { id, img, title, points } = premiumDetails;

  return (
    <div className="bg-slate-800">
      <p className="text-4xl text-bold underline text-emerald-600 pt-10">
        {title}
      </p>
      <div className="md:grid grid-cols-2 mx-auto bg-slate-800 px-10 md:px-16 py-12">
        {/* left */}
        <div className="left-side md:mt-12">
          {points.map((item) => (
            <ul className=" steps-vertical ">
              <li className="step-info text-accent text-sm md:text-lg font-bold  list-disc ease-linear duration-150 hover:text-sky-700 hover:scale-y-110 mb-5">
                {item}
              </li>
            </ul>
          ))}
        </div>
        {/* right side */}
        <div className="right-side">
          <div className="md:p-4 shadow-md bg-gray-900 text-gray-100 w-4/5 mx-auto md:my-16 rounded-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={img}
                  alt=""
                  className="block object-fit w-full rounded-md h-72 bg-gray-500"
                />
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold text-violet-400 pb-6 md:pb-0">
                    {title}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseFee></CourseFee>
    </div>
  );
};

export default CheckoutPages;
