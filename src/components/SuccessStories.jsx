import React, { useState, useEffect } from "react";

const SuccessStories = () => {
  const [counters, setCounters] = useState({
    operations: 0,
    patients: 0,
    awards: 0,
  });

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The doctors and staff were amazing! My surgery was a success, and the care I received was exceptional.",
      image: "https://img.freepik.com/premium-photo/native-american-man-hospital-bed-smiling-healthcare-recovery-theme-ideal-healthrelated_91645-10905.jpg?w=1060",
    },
    {
      name: "Jane Smith",
      feedback: "I felt like family from the moment I walked in. Thank you for saving my life!",
      image: "https://img.freepik.com/free-photo/closeup-patient-man-looking-into-camera-waiting-doctors-start-stomatology-surgery-sitting-dental-chair_482257-4877.jpg?t=st=1734424714~exp=1734428314~hmac=33c37a5ca4530b6fe6e1b3d601c4b3b8d22a681f3c03699ad3beeb55367d649a&w=996",
    },
    {
      name: "Mark Lee",
      feedback: "Outstanding service and care. The hospital is world-class in every way.",
      image: "https://img.freepik.com/free-photo/girl-coffee-room_1398-784.jpg?t=st=1734424747~exp=1734428347~hmac=787af97bbc52aaac2db3ce321209e1873070b3923a41852439efb573c6550660&w=360",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        operations: prev.operations < 1000 ? prev.operations + 10 : prev.operations,
        patients: prev.patients < 5000 ? prev.patients + 25 : prev.patients,
        awards: prev.awards < 50 ? prev.awards + 1 : prev.awards,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-6">
        {/* Success Counters */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">{counters.operations}+</h3>
              <p className="text-lg text-gray-700 mt-2">Successful Operations</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">{counters.patients}+</h3>
              <p className="text-lg text-gray-700 mt-2">Happy Patients</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600">{counters.awards}</h3>
              <p className="text-lg text-gray-700 mt-2">Awards Received</p>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">What Our Patients Say</h2>
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-center min-w-[300px] md:min-w-[400px] bg-white shadow-lg rounded-lg p-6"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-lg text-gray-600 italic">"{testimonial.feedback}"</p>
                  <h3 className="text-md font-bold text-blue-600 mt-4">{testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
