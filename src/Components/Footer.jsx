import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-white py-6 pl-10">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4 ">Explore</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/classes">Classes</a>
                </li>
                <li>
                  <a href="/trainers">Trainers</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4">About Us</h3>
              <ul>
                <li>
                  <a href="/about">Our Story</a>
                </li>
                <li>
                  <a href="/mission">Our Mission</a>
                </li>
                <li>
                  <a href="/team">Our Team</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-4">Connect</h3>
              <ul>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div class="mb-6 flex-wrap">
              <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
              <ul>
                <li>
                  <a href="#" class="flex items-center">
                    <i class="fab fa-facebook mr-2"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center">
                    <i class="fab fa-twitter mr-2"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center">
                    <i class="fab fa-instagram mr-2"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-600" />
          <p class="text-center text-sm">
            &copy; 2023 ShapesShiftHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
