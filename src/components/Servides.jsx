import React from "react";
import { FaHeartbeat, FaStethoscope, FaAmbulance, FaSyringe, FaUserMd, FaWheelchair } from "react-icons/fa";

const services = [
  { icon: <FaHeartbeat />, title: "Cardiology", description: "Advanced care for heart-related conditions." },
  { icon: <FaStethoscope />, title: "General Medicine", description: "Comprehensive health consultations and treatments." },
  { icon: <FaAmbulance />, title: "Emergency Services", description: "24/7 emergency care and ambulance services." },
  { icon: <FaSyringe />, title: "Vaccination", description: "Safe and effective immunization programs." },
  { icon: <FaUserMd />, title: "Surgery", description: "Expert surgical interventions with modern facilities." },
  { icon: <FaWheelchair />, title: "Rehabilitation", description: "Support for recovery and physical therapy." },
];

const Servides = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Our Services</h2>
        {/* Mobile Scrollable View */}
        <div className="flex md:hidden space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white shadow-lg rounded-lg p-6 snap-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Laptop/Tablet Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servides;
