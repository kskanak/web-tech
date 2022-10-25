import React from "react";

const ListCatagory = ({ catagory }) => {
  const { id, img, title } = catagory;
  console.log(title);
  return (
    <div>
      <ul className=" steps-vertical list-none">
        <li className="step-info text-green-500 text-lg font-bold my-5 list-disc">
          {title}
        </li>
      </ul>
    </div>
  );
};

export default ListCatagory;
