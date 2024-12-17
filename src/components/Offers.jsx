import React, { useState } from "react";

const offers = [
  {
    title: "Free Health Checkup",
    description: "Avail a free health checkup for new patients this month.",
    image: "https://img.freepik.com/free-psd/doctor-profession-template_23-2151401700.jpg?t=st=1734425179~exp=1734428779~hmac=c2845c0ffb98f7f403b07d38ff952000b0e1df62b42b2e216f57061e63246eef&w=1060",
  },
  {
    title: "Discount on Vaccinations",
    description: "Get up to 20% off on all vaccinations.",
    image: "https://img.freepik.com/free-psd/coronavirus-vaccine-banner-template_23-2148960949.jpg?t=st=1734425783~exp=1734429383~hmac=cdcaa08f984ba6300ef6eaafc505a1bd60add79ae5780a2dc706fdc6f7631d46&w=1060",
  },
  {
    title: "Surgery Packages",
    description: "Flat 50% off on selected surgery packages.",
    image: "https://img.freepik.com/free-vector/hospital-care-sale-banner-template_23-2151170907.jpg?t=st=1734425990~exp=1734429590~hmac=87f85728ea11fd422507fdceaf3d4858c55c1c2508267b0bc2301b73292e780a&w=1060",
  },
  {
    title: "Discount on Vaccinations",
    description: "Get up to 20% off on all vaccinations.",
    image: "https://img.freepik.com/free-vector/creative-valentine-s-day-massage-coupon-gift-certificate_23-2149258850.jpg?t=st=1734425836~exp=1734429436~hmac=bced6c98b02f32f2d874b140cf0f27d7e72661e9e92c0d5bef81ed13e7fd02b2&w=996",
  },
  {
    title: "Surgery Packages",
    description: "Flat 10% off on selected surgery packages.",
    image: "https://img.freepik.com/free-vector/flat-design-healthcare-system-sale-banner_23-2150753634.jpg?t=st=1734426067~exp=1734429667~hmac=dadb4ea721274b4fe2e72bc045708f1208613f8179a0a98316730cf4246a40b0&w=1060",
  },
];

const Offers = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Promotions & Offers
        </h2>

        {/* Scrollable Carousel */}
        <div className="relative overflow-x-auto no-scrollbar rounded-xl shadow-lg bg-white">
          <div className="flex space-x-6 px-4 py-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
