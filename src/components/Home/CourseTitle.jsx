import React from "react";

const CourseTitle = ({ course }) => {
  const { id, img, title } = course;

  return (
    <div>
      <div className="md:flex md:space-x-6 mx-auto w-4/5">
        <img
          alt=""
          className=" h-auto w-96 mb-4 bg-center rounded-lg bg-gray-500 ease-linear duration-200 hover:translate-x-3 hover:md:scale-110 hover:ease-linear"
          src={img}
        />
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-400">Web Technology</p>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
