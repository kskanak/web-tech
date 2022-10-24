import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseTitle from "./CourseTitle";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch("https://web-tech-server-side.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="py-6 bg-gray-800 text-gray-100">
        <div className="container p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Our Curriculams
            </h3>
            <p className="w-4/5 mx-auto text-gray-400">
              An effective curriculum provides teachers, students, school
              leaders and community stakeholders with a measurable plan and
              structure for delivering a quality education. The curriculum
              identifies the learning outcomes, standards and core competencies
              that students must demonstrate before advancing to the next level!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <CourseTitle key={course.id} course={course}></CourseTitle>
            ))}
          </div>
          <div className="course-detailsBtn my-3">
            <Link to="/curriculam">
              <button className="btn btn-success hover:bg-sky-300">
                See Course Details
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseList;
