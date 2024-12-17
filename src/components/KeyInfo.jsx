import React, { useState } from "react";

const KeyInfo = () => {
  const doctors = [
    { name: "Dr. Sarah Johnson", specialty: "Cardiology", image: "https://img.freepik.com/free-photo/portrait-mature-therapist-sitting-table-looking-camera_1098-18156.jpg?t=st=1734423887~exp=1734427487~hmac=76f7c5fed9a943856db96df8aa86c757bb7009f8a7c329a63e052cb4e8b98e33&w=400" },
    { name: "Dr. James Smith", specialty: "Orthopedics", image: "https://img.freepik.com/free-photo/nurse-preparing-consult_23-2149309939.jpg?t=st=1734424088~exp=1734427688~hmac=17643542189b7c95b7a845097bcaf3d7273709ac4c37196f610fa31a68e83e07&w=996" },
    { name: "Dr. Emily Carter", specialty: "Pediatrics", image: "https://img.freepik.com/free-photo/portrait-doctor_144627-39391.jpg?t=st=1734424354~exp=1734427954~hmac=66f3dd3a7dcf10be7c873cdb1ab8af70f1f260af0b3edb20fe6a940c8fb8aaf7&w=996" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    closeModal();
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Hospital Address */}
        {/* <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Location</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Address:</span> 1234 Health Avenue, Wellness City, MediState 56789
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Contact:</span> +1 (123) 456-7890
          </p>
        </div> */}

        {/* Doctors Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Meet Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-70 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <div className="flex justify-between mt-4 space-x-4">
                  <button
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
                    onClick={() => alert(`Viewing profile of ${doctor.name}`)}
                  >
                    View Profile
                  </button>
                  <button
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                    onClick={() => openModal(doctor)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-1/3">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Book Appointment with {selectedDoctor.name}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Appointment Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyInfo;
