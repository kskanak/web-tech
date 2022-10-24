import React from "react";
import Hero from "../Home/Hero";
import CourseList from "./CourseList";
import Features from "./Features";
import Partners from "./Partners";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <CourseList></CourseList>
      <Partners></Partners>
    </div>
  );
};

export default Home;
