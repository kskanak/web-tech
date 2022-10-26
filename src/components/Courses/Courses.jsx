import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import ListCatagory from "./ListCatagory";
import { FaSmile } from "react-icons/fa";

const Courses = () => {
  const catagories = useLoaderData();
  const [id, setId] = useState("");
  const [courses, setCourses] = useState([]);

  const handleClickDetails = (id) => {
    setId(id);
  };
  useEffect(() => {
    fetch("https://web-tech-server-side.vercel.app/catagorydetails") //    http://localhost:5000/catagorydetails
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);
  const courseDetails = courses.find((c) => c.id === id);
  console.log(courseDetails);
  return (
    <div className="courses bg-slate-800 py-10">
      <h2 className="text-4xl font-semibold text-white py-6 underline">
        Curruculam
      </h2>
      <div className="curricula-body-container md:grid md:grid-cols-4 px-10 md:px-16 ">
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
        <div className="course-details col-span-3 border-2 flex justify-center items-center py-10 px-5 md:px-0">
          {courseDetails ? (
            <CourseDetails courseDetails={courseDetails}></CourseDetails>
          ) : (
            <div className="text-white flex-col md:flex items-center">
              Click the course to see details infomation{" "}
              <span className="emoji flex justify-center">
                <FaSmile className="m-2 text-pink-500" />
                <FaSmile className="m-2 text-pink-500" />
                <FaSmile className="m-2 text-pink-500" />
                <FaSmile className="m-2 text-pink-500" />
                <FaSmile className="m-2 text-pink-500" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
