import React from "react";

const CourseDetails = ({ courseDetails }) => {
  const { id, img, title, about, details, list } = courseDetails;
  console.log(courseDetails);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-400">{title}</h3>
            </a>
            <p className="leading-snug text-gray-400">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
