import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-8 font-sans serif background-gray">
      <ul className="flex flex-wrap justify-end flex-row space-x-6 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/customerlogin">CustomerLogin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
