import React from "react";
import { Link } from "react-router-dom";

const ListCatagory = ({ catagory, handleClickDetails }) => {
  const { id, img, title } = catagory;
  console.log(title);
  return (
    <div>
      <ul className=" steps-vertical list-none">
        <li className="step-info text-blue-300 text-lg font-bold  list-none ease-linear duration-150 hover:text-blue-500 hover:scale-y-125 my-2">
          <button className="btn btn-outline btn-accent w-96 mx-auto md:w-64 block hover:bg-emerald-600 hover:text-red-500">
            {" "}
            {title}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCatagory;
