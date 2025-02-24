import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Hospital Name and Logo */}
        <div className="flex items-center">
          <img
            src="https://media-hosting.imagekit.io//15a1fc4a4ef6463a/WhatsApp%20Image%202025-02-24%20at%2022.51.48_3d04d85e.jpg?Expires=1835025748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xgegTioo8i~h9Ni9uRi-v-huGCzq~-VC6M8DocS0PegFXUkpMo0m9-bKqmQcgulJTcMSPFcS9hIrE5PvKvcVgITBNRq037QUor2mpum3NjxWOsnB6VjqaEZdfTchGEFEvcjSejwyDRmLImZpVOoz1xO-cE1~IZDZ83nJRchxaiz1Ov1S0Mqj~~i1pvldpMF8cJXjozNqxnegXPzkQ1Gk9NxUZ2UyCeIC5Q-isdMC~7ek-wJIc50TIBy~ZD8ZAvvWhjx5SIphgtwXA0sdL48XocyL5-UpuWOx48rHMpnH1sLp-rXh7K4fhxh3OH-2Cp0JqmRF8bQgw0GosVGOyRkwBw__"
            alt="Logo"
            className="w-[10vw] h-[10vh] mr-2 rounded-2xl"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Doctors", "Services", "Stories", "Offers"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:opacity-80"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar for Mobile (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-800 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out bg-opacity-90`}
      >
        <button
          className="absolute top-4 left-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col items-start space-y-6 p-6 mt-12">
          {["Home", "Doctors", "Services", "Stories", "Offers"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-lg px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:opacity-80 w-full"
              onClick={toggleSidebar}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
