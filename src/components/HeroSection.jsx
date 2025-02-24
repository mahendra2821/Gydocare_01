import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/portrait-confident-doctors-with-arms-crossed_13339-136976.jpg?w=600')`, // Replace with your image path
      }}
    >
      {/* Overlay for slight darkening effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Excellence in Healthcare
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Committed to providing the best medical care for you and Nearest Location While Travelling Time.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md transition duration-300">
            Explore Services
          </button>
          <button className="bg-gray-300 hover:bg-gray-200 text-blue-600 py-3 px-6 rounded-lg shadow-md transition duration-300">
            Meet Our Doctors
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
