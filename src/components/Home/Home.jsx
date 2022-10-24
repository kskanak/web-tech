import React from "react";
import Hero from "../Home/Hero";
import CourseList from "./CourseList";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <CourseList></CourseList>
    </div>
  );
};

export default Home;
