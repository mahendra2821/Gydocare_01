import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, TechCorp",
    feedback: "The hospital provided exceptional care and top-notch facilities. Highly recommended!",
    image: "https://img.freepik.com/free-photo/young-medical-student_144627-9947.jpg?t=st=1734425378~exp=1734428978~hmac=71d248b13f7fb51c9a593370c9471f989103929773ffeca7fab388d4eebcc384&w=360",
  },
  {
    name: "Jane Smith",
    designation: "Founder, Healthify",
    feedback: "The staff is incredibly professional and attentive. I always trust them for my family's health.",
    image: "https://img.freepik.com/free-photo/closeup-patient-man-looking-into-camera-waiting-doctors-start-stomatology-surgery-sitting-dental-chair_482257-4877.jpg?t=st=1734424714~exp=1734428314~hmac=33c37a5ca4530b6fe6e1b3d601c4b3b8d22a681f3c03699ad3beeb55367d649a&w=996",
  },
  {
    name: "Robert Brown",
    designation: "CTO, Medico",
    feedback: "An outstanding experience every time! Their innovative approach sets them apart.",
    image: "https://img.freepik.com/free-photo/girl-coffee-room_1398-784.jpg?t=st=1734424747~exp=1734428347~hmac=787af97bbc52aaac2db3ce321209e1873070b3923a41852439efb573c6550660&w=360",
  },
];

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">What Our Clients Say</h2>

        <div className="relative flex flex-col items-center">
          {/* Carousel Container */}
          <div className="w-full max-w-md md:max-w-lg bg-white shadow-lg rounded-[1.5rem] p-6 transition-all duration-500 hover:shadow-2xl hover:border-4 hover:border-blue-500">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full border-2 border-blue-500 transition-transform duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].designation}</p>
              <p className="text-gray-600 italic text-center">"{testimonials[currentIndex].feedback}"</p>
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center justify-between space-x-4 mt-4">
            <button
              className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-700 transition-all duration-300"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <button
              className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-700 transition-all duration-300"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
