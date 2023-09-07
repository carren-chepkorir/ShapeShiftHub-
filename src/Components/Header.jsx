import React from "react";
import gym1 from "../assets/Gym.png";

const Header = ({ subtitle }) => {
  return (
    <div>
      <div className="flex flex-wrap flex-row space-x-2 mx-4">
        <img className="h-[50px] w-[50px]" src={gym1} alt="Gym image" />
        <h1 className="text-2xl font-bold">{subtitle}</h1>
      </div>
    </div>
  );
};

export default Header;
