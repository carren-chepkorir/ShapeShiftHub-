import React from "react";
import training from "../assets/Area 1.png";
import gymBackground from "../assets/Area8.webp";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Training = () => {
  return (
    <div>
      <div
        className=" flex flex-wrap bg-cover bg-center h-[70vh] mx-4 mt-5 bg-opacity-70"
        style={{ backgroundImage: `url(${gymBackground})` }}
      ></div>
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
        <p className="text-white text-8xl font-bold p-4 absolute bottom-10 left-0 w-full text-center">
          TRAINING
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-5">
        <p className="text-2xl ">
          Our certified personal trainers create the perfect programs to help
          you reach your goals, designed 100% around you.
        </p>
        <div className="flex flex-row flex-wrap space-x-4 mt-10 mx-10">
          <div className="flex-1">
            <img src={training} />
          </div>
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-bold text-[#fe6a16]">
              It is Time To Go
            </h1>
            <p>
              Welcome to our comprehensive training page, where fitness meets
              dedication. Our expert trainers craft personalized workouts for
              your goals.
            </p>
            <p>
              Join our vibrant fitness community today. Whether you're a newbie
              or pro, we're here to help you achieve your fitness aspirations.
            </p>
            <p>
              Discover a variety of classes, from high-intensity HIIT to calming
              yoga. Elevate your fitness journey with our state-of-the-art
              equipment.
            </p>
            <Link to="/CustomerLogin">
              <button className="justify-center items-center mt-5 text-white bg-[#fe6a16]  py-4 px-10 rounded-full ">
                Sign Up for Personal Training
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row mx-10 mt-[150px] space-x-12 bg-gray-300 h-[40vh]">
        <div className="mt-5">
          <p class="">&copy; 2023 ShapesShiftHub. All rights reserved.</p>
        </div>
        <div className="flex flex-col flex-wrap mt-5">
          <p className="underline">Hours of Operation</p>
          <p>Monday - Friday - 5:00 a.m - 11:00 p.m</p>
          <p>Saturday & Sunday - 7:00 a.m - 7:00 p.m</p>
        </div>
        <div className="flex flex-wrap  flex-col space-y-5 mt-5 ">
          <div className="flex-row flex flex-wrap space-x-8">
            <FaFacebook size={50} />
            <FaTwitter size={50} />
            <FaTiktok size={50} />
            <FaWhatsapp size={50} />
            <FaInstagram size={50} />
          </div>
          <div>
            <p>Find us in our Social Media Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
