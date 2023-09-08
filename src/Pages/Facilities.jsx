import React from "react";
import facility1 from "../assets/gymfacility1.webp";
import facility2 from "../assets/lappool.webp";
import imageArea1 from "../assets/Area 1.png";
import imageArea2 from "../assets/Area2.jpg";
import imageArea3 from "../assets/Area3.png";
import imageArea4 from "../assets/Area4.webp";
import imageArea5 from "../assets/Area5.webp";
import imageArea6 from "../assets/Area6.png";
import imageArea7 from "../assets/Area7.png";
import imageArea8 from "../assets/Area8.webp";
import imageArea9 from "../assets/Area9.jpg";
import imageArea10 from "../assets/Area10.png";
import imageArea11 from "../assets/Area11.png";
import imageArea12 from "../assets/yoga.jpg";

const Facilities = () => {
  return (
    <div className="h-screen mx-5 mt-5">
      <div className=" flex flex-col flex-wrap justify-center items-center bg-[#4f9598] h-1/2 ">
        <h1 className="font-poppins text-6xl text-white font-bold">
          The Facilities
        </h1>
        <p className="text-white mx-auto mt-5 ">
          ShapeShiftHub offers a diverse range of top-notch gym facilities.
          <br /> With modern equipment, group fitness classes, and serene
          wellness areas,
          <br /> our website caters to all fitness levels. From beginners to
          seasoned athletes, <br />
          ShapeShiftHub provides the ideal environment to meet your fitness
          goals.
        </p>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-wrap flex-1 justify-center border-b border-customPink">
          <h1 className="font-bold text-black text-4xl mt-5">Training Floor</h1>
          <p>
            ShapeShiftHub's work floor facility is a dynamic space tailored to
            boost productivity. Equipped with ergonomic workstations, high-speed
            internet, and a serene ambiance, it's an ideal environment for
            focused work. Whether you're a remote worker, freelancer, or
            entrepreneur, our work floor offers the perfect setting for
            achieving your professional goals.
          </p>
        </div>
        <div className="flex-1 flex flex-wrap">
          <img src={facility1} className=" h-[400px] w-full" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="flex-1 flex flex-wrap">
          <img src={facility2} className=" h-[400px] w-full" />
        </div>
        <div className="flex flex-wrap flex-1 justify-center border-b border-customPink">
          <h1 className="font-bold text-black text-4xl mt-5">LapPool</h1>
          <p>
            ShapeShiftHub's lap pool facility offers a serene oasis for swimmers
            of all levels. With crystal-clear waters and a spacious layout, it's
            ideal for both leisurely laps and intense training sessions. Whether
            you're a beginner looking to improve your stroke or a seasoned
            swimmer, our lap pool provides a perfect aquatic experience.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap  justify-center items-center mt-5 bg-[#e4e4e4] h-50">
        <div className=" flex flex-wrap flex-col  ">
          <h1 className="text-2xl font-bold mt-5 text-center">Members Area</h1>
          <p className="mx-auto mt-5">
            ShapeShiftHub's work floor facility is a dynamic space tailored to
            <br />
            boost productivity. Equipped with ergonomic workstations, high-speed
            <br />
            internet, and a serene ambiance, it's an ideal environment for
            focused work.
            <br /> Whether you're a remote worker, freelancer, or entrepreneur,
            our work
            <br /> floor offers the perfect setting for achieving your
            professional goals.
          </p>
          <button className="mx-auto mt-5 text-white bg-[#2f7c80]  py-4 px-10 rounded-full ">
            Join Now
          </button>
        </div>
        <div className="flex flex-wrap flex-col mt-[50px]">
          <div className="flex flex-wrap space-x-5 ">
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea1}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea2}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea3}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea4}
            />
          </div>
          <div className="flex flex-wrap space-x-5 mt-5">
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea8}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea5}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea6}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out "
              src={imageArea7}
            />
          </div>
          <div className="flex flex-wrap space-x-5 mt-5">
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea9}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea10}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea11}
            />
            <img
              className="h-[200px] w-[300px] rounded-lg  transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src={imageArea12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
