import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = ({ courseDetails }) => {
  const { id, img, title, about, points } = courseDetails;
  console.log(courseDetails);
  const options = {
    orientation: "portrait",
    height: "100vh",
    width: "100%",
  };
  return (
    <div>
      <p className="text-3xl text-emerald-500 text-bold underline">{title}</p>
      <div className="pdf-btn text-right my-5 pr-8">
        <Pdf targetRef={ref} filename="div-blue.pdf" options={options}>
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn btn-sm btn-accent">
              Generate pdf
            </button>
          )}
        </Pdf>
      </div>
      <div className="details md:grid grid-cols-2 md:px-3" ref={ref}>
        <div className="div">
          <div className="max-w-lg p-2 md:p-4 shadow-md bg-gray-900 text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
              <div className="flex items-center">
                <a className="mb-0 capitalize dark:text-gray-100">Web-Tech</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={img}
                  alt=""
                  className="block md:object-cover object-fit w-fit rounded-md h-72 bg-gray-500"
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
        <div className="div">
          <div className="left-side md:mt-12 my-8 md:my-0">
            {points.map((item) => (
              <ul className=" steps-vertical ">
                <li className="step-info text-accent text-sm  px-4 font-bold  list-none text-left ease-linear duration-150 hover:text-sky-700 hover:scale-y-110 mb-5">
                  {item}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
