import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Follow Us on Social Media
        </h2>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
