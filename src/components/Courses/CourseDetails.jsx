import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = ({ courseDetails }) => {
  const { id, img, title, about, details, list } = courseDetails;
  console.log(courseDetails);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md bg-gray-900 text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Web-Tech
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <p className="leading-snug text-gray-400">{about}</p>
          </div>
          <Link to={`/checkOutPage/${id}`}>
            <button className="btn btn-outline btn-accent my-10">
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
