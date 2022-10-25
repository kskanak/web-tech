import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img from "../../assets/heroSection-banner.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";

const HomeSlider = () => {
  return (
    <AwesomeSlider className="text-white">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <img src={img} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </AwesomeSlider>
  );
};

export default HomeSlider;
