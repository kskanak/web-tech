import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import ListCatagory from "./ListCatagory";

const Courses = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  const handleClickDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="courses bg-slate-800">
      <h2 className="text-4xl font-semibold text-white py-6 underline">
        Curruculam
      </h2>
      <div className="curricula-body-container md:grid md:grid-cols-4 md:w-4/5 mx-auto md:h-screen ">
        <div className="course-list-container border-2 bg-slate-900 flex flex-col justify-center items-center w-full mt-5 mb-10 md:mb-0 md:mt-0 py-10">
          <h2 className="text-success text-3xl font-semibold flex justify-center mb-5">
            Course-List
          </h2>
          <div className="catagory-list">
            {catagories.map((catagory) => (
              <ListCatagory
                key={catagory.id}
                catagory={catagory}
                handleClickDetails={handleClickDetails}
              ></ListCatagory>
            ))}
          </div>
        </div>
        <div className="course-details col-span-3 border-2">
          <CourseDetails></CourseDetails>
        </div>
      </div>
    </div>
  );
};

export default Courses;
