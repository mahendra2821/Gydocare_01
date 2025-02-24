import React from "react";

const Map = () => {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Ways to connect with our<span className="text-black"> Med╰┈➤Direct</span>
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-6">
        We would love to hear from you! If you have any queries or need additional information,  
        please contact your nearest Hospitals. You can also book your appointment.
      </p>

      {/* Google Map */}
      <div className="w-full max-w-5xl mx-auto h-96 shadow-lg rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.3895507846015!2d-122.08424998468166!3d37.42206597982581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c2f75a60e1%3A0x8f9e62d2b7c9a3b5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615194135936!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
