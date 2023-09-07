import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import CustomerLogin from "./Pages/CustomerLogin";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div>
          <Navbar />
          <Header subtitle="SHAPESHIFTHUB" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/customerlogin" element={<CustomerLogin />}></Route>
            <Route path="/contact" element={<Contact />}></Route>v
          </Routes>
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
