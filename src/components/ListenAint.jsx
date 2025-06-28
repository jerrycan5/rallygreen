import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  { name: "Apple Music", color: "text-black" },
  { name: "Amazon Music", color: "text-black" },
  { name: "Spotify", color: "text-black" },
  { name: "iTunes Store", color: "text-black" },
  { name: "YouTube Music", color: "text-black" },
];

function ListenAint() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-rodeo text-white font-sans px-4 pt-8 pb-8 flex flex-col">
      {/* Back Button */}
      <button
        className="flex items-center text-white text-[13px] mb-6"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="mr-1" size={12} />
        <span>Go Back</span>
      </button>

      <div className="flex flex-col items-center mt-48">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-[18px] font-bold leading-snug">
            Riley Green - Ain’t My Last Rodeo
          </h1>
          <p className="text-[14px] text-gray-200 mt-1">Choose music service</p>
        </div>

        {/* White card */}
        <div className="bg-white w-full max-w-[400px] rounded-2xl px-5 py-12 space-y-10">
          {services.map((service, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className={`text-[20px] font-bold ${service.color}`}>
                {service.name}
              </span>
              <button className="bg-[#eee8e7] text-black text-[17px] font-semibold px-4 py-1 rounded">
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListenAint;
