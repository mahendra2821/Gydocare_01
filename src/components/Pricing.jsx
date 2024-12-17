import React from "react";

const pricingData = [
  { service: "General Consultation", price: "$50", description: "Basic health checkup and consultation." },
  { service: "Dental Cleaning", price: "$75", description: "Professional dental cleaning and polishing." },
  { service: "X-Ray Services", price: "$100", description: "High-quality X-Ray imaging for diagnosis." },
  { service: "Vaccination Package", price: "$120", description: "Includes basic vaccinations for children." },
  { service: "Surgery Consultation", price: "$150", description: "Specialist consultation for surgeries." },
];

const Pricing = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.service}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-blue-600 text-2xl font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
