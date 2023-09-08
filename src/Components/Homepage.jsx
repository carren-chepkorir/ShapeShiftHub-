import React from "react";
// import gymBackgroundImage from "../assets/background.png";
import gymBackgroundImage from "../assets/hero_image.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="">
      <div
        className=" flex flex-wrap bg-cover bg-center h-screen mx-4 mt-5 bg-opacity-70"
        style={{ backgroundImage: `url(${gymBackgroundImage})` }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#fff] text-center ">
        <h2 className="text-4xl font-bold ">
          {" "}
          Your Path to a Healthier You Starts Here
        </h2>
        <p className="text-lg mt-3 ">
          Welcome to our fitness haven, where we're dedicated to helping you
          unleash your inner champion. At ShapeShift, we believe that fitness is
          more than just a routine; it's a lifestyle that empowers and
          transforms.
        </p>
        <Link to="/contact">
          <button className="rounded-full 100 border border-white mt-10 py-2 px-4 ">
            Take a Tour
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
