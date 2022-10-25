import React from "react";
import { useLoaderData } from "react-router-dom";
import ListCatagory from "./ListCatagory";

const Courses = () => {
  const catagories = useLoaderData();
  console.log(catagories);
  return (
    <div className="courses bg-slate-800">
      <h2 className="text-4xl font-semibold text-white py-6 underline">
        Curruculam
      </h2>
      <div className="grid md:grid-cols-4 w-4/5 mx-auto h-screen">
        <div className="course-list border-2 bg-slate-900 flex flex-col justify-center items-start pl-10">
          <h2 className="text-info text-3xl font-semibold">Course-List</h2>
          {catagories.map((catagory) => (
            <ListCatagory key={catagory.id} catagory={catagory}></ListCatagory>
          ))}
        </div>
        <div className="course-details col-span-3 border-2">course details</div>
      </div>
    </div>
  );
};

export default Courses;
