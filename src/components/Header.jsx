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
            src="https://img.freepik.com/premium-vector/medical-cross-symbol-medical-health-sign_267160-487.jpg?w=740"
            alt="Logo"
            className="w-20 h-12 mr-2"
          />
          <h1 className="text-xl font-bold">GYDOCARE</h1>
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
