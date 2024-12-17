import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null); // Tracks the currently open section on mobile

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Mobile View */}
        <div className="md:hidden">
          {/* Contact Section */}
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => toggleSection("contact")}
          >
            <h3 className="text-lg font-bold">Contact Us</h3>
            <span className="text-2xl">{openSection === "contact" ? "-" : "+"}</span>
          </div>
          {openSection === "contact" && (
            <div className="mb-4 text-sm">
              <p>Hospital Name: Gydocare Hospital</p>
              <p>Address: 1234 Health St, Wellness City, 56789</p>
              <p>Phone: +1 (234) 567-890</p>
              <p>Email: contact@gydocare.com</p>
            </div>
          )}

          {/* Follow Us Section */}
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => toggleSection("follow")}
          >
            <h3 className="text-lg font-bold">Follow Us</h3>
            <span className="text-2xl">{openSection === "follow" ? "-" : "+"}</span>
          </div>
          {openSection === "follow" && (
            <div className="mb-4 text-sm flex flex-col space-y-2">
              <a href="https://facebook.com" className="hover:text-gray-300">
                Facebook
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300">
                Twitter
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300">
                Instagram
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-300">
                LinkedIn
              </a>
            </div>
          )}

          {/* Legal Section */}
          <div
            className="flex justify-between items-center cursor-pointer mb-4"
            onClick={() => toggleSection("legal")}
          >
            <h3 className="text-lg font-bold">Legal</h3>
            <span className="text-2xl">{openSection === "legal" ? "-" : "+"}</span>
          </div>
          {openSection === "legal" && (
            <div className="mb-4 text-sm flex flex-col space-y-2">
              <a href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="hover:text-gray-300">
                Terms & Conditions
              </a>
              <a href="/about-us" className="hover:text-gray-300">
                About Us
              </a>
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-between items-start">
          {/* Contact Section */}
          <div className="flex-1 mx-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-4 text-sm">
              <p>Hospital Name: Gydocare Hospital</p>
              <p>Address: 1234 Health St, Wellness City, 56789</p>
              <p>Phone: +1 (234) 567-890</p>
              <p>Email: contact@gydocare.com</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1 mx-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 text-sm">
              <a href="https://facebook.com" className="block hover:text-gray-300">
                Facebook
              </a>
              <a href="https://twitter.com" className="block hover:text-gray-300">
                Twitter
              </a>
              <a href="https://instagram.com" className="block hover:text-gray-300">
                Instagram
              </a>
              <a href="https://linkedin.com" className="block hover:text-gray-300">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex-1 mx-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <div className="mt-4 text-sm">
              <a href="/privacy-policy" className="block hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="block hover:text-gray-300">
                Terms & Conditions
              </a>
              <a href="/about-us" className="block hover:text-gray-300">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-400 pt-4">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Gydocare Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
