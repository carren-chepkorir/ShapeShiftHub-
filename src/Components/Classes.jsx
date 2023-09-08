import React from 'react'
import Card1 from "../assets/active.jpg"
import Card2 from "../assets/cycling.jpg"
import Card3 from "../assets/yoga.jpg"

function Classes() {
  return (
    <div class="flex justify-center items-center text-center">
      <div>
        <h1 class="text-2xl font-bold mb-2 border-b-2 border-black inline-block">
          Our Classes
        </h1>
        <p class="text-2xl p-4">
          Whether you want to loose weight, tone up, gain muscle or improve
          strength, we provide a wide range of classes to help you achieve your
          goals in a friendly and airy environment.
        </p>
        <div class="flex justify-between m-16 space-x-16 ">
          <div>
            <img src={Card3} alt="classimage" />
            <p>Yoga Pilates</p>
          </div>
          <div>
            <img src={Card2} alt="classimage" />
            <p>Cycle Training</p>
          </div>
          <div>
            <img src={Card1} alt="classimage" />
            <p>Cardio Fitness</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes
