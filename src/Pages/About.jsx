import React from "react";
import AboutImage from "../assets/about-image.jpg"
import Classes from "../Components/Classes";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <div class="flex p-4">
        <div class="w-1/2">
          <img src={AboutImage} alt="aboutimage" class="w-full h-auto" />
        </div>

        <div class="w-1/2 px-8">
          <h1 class="font-bold text-2xl mb-4 ">
            From the moment you walk through the door you know ShapeShiftHub is
            a unique place
          </h1>
          <p class="mb-4 ">
            When we created ShapesShift Hub, we knew we wanted to be more than
            just a simple gym. Having worked in traditional gyms in the past, we
            knew we needed to create a concept that would provide our members
            with the most effective tools for success.
          </p>
          <p>
            This meant we needed to offer a wide range of classes both for
            children and adults. This also meant we needed to provide a learning
            environment run by experienced and successful coaches. However, our
            most important goal was to create a welcoming atmosphere and
            community in which everyone feels a sense of belonging.
          </p>

          <div className="flex justify-between mt-6">
            <div class="w-1/3">
              <p>Environment</p>
              <p className="font-bold">Clean and Airy</p>
            </div>
            <div class="w-1/3">
              <p>Classes</p>
              <p className="font-bold">Daily</p>
            </div>
            <div class="w-1/3">
              <p>Price</p>
              <p className="font-bold">Affordable</p>
            </div>
          </div>
        </div>
      </div>
      <Classes />
      <Footer />
      
    </>
  );
   
};

export default About;
