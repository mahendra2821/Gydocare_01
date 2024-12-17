import React from "react";

const journeyData = [
  {
    year: "2005",
    event: "Hospital Founded",
    description: "Our journey began with a vision to provide excellent healthcare services.",
  },
  {
    year: "2010",
    event: "Expansion of Facilities",
    description: "Added advanced diagnostic and surgical departments.",
  },
  {
    year: "2015",
    event: "1000+ Successful Surgeries",
    description: "Celebrated a milestone of over 1,000 successful surgeries.",
  },
  {
    year: "2020",
    event: "Global Recognition",
    description: "Received international accreditation for healthcare excellence.",
  },
  {
    year: "2023",
    event: "New Specialist Programs",
    description: "Launched new programs for specialized treatments and research.",
  },
];

const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">About Us</h2>
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-2 top-0 h-full w-1 bg-blue-300"></div>

          <div className="space-y-8 pl-8">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
              >
                {/* Timeline Marker */}
                <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md">
                  {item.year}
                </div>

                {/* Event Content */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
