
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const VipCheckout = () => {
  return (
    <div className="min-h-screen bg-brand-sand text-black font-sans">
      {/* Back Button */}
      <div className="flex items-center px-4 py-3">
        <Link
          to={-1}
          onClick={(e) => {
            e.preventDefault();
            window.history.length > 1
              ? window.history.back()
              : window.location.assign('/');
          }}
          className="flex items-center text-black font-medium"
        >
          <FaArrowLeft className="mr-1" />
          
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[220px]">
        <img
          src="/signup.jpeg"
          alt="A date with Riley Green"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-center text-lg font-bold text-white mt-4 mb-6">
        A date with Riley Green
      </h2>

      {/* Form */}
      <form className="space-y-4 px-5 pb-10">
        <p className="text-sm font-semibold mb-1">Fill Contact Profile</p>

        {[
          'Full Name',
          'Email Address',
          'United State',
          'Street Address',
          'State',
          'City',
          'Zip code'
        ].map((placeholder, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-[#e5dbb3] rounded-full placeholder:text-gray-600 text-sm"
          />
        ))}

        <button
          type="submit"
          className="mx-auto mt-4 block px-6 py-1 border border-brand.deep rounded-full text-black font-semibold text-sm hover:bg-brand.deep hover:text-white transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default VipCheckout;
