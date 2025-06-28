import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const vipTickets = Array.from({ length: 20 }, (_, i) => ({
  qty: i + 1,
  section: `Sec 203 Row ${String.fromCharCode(65 + (i % 26))}`,
  price: ((i + 1) * 152.99).toFixed(2),
}));

export default function VIPTickets() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900 font-sans px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <button
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </button>

        <h1 className="text-3xl font-extrabold text-center mb-8 tracking-tight">VIP Tickets</h1>

        <div className="grid gap-6">
          {vipTickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-3">
                <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg text-center min-w-[70px]">
                  {ticket.qty} {ticket.qty > 1 ? 'Tickets' : 'Ticket'}
                </div>
                <div className="text-gray-700 text-base font-medium md:ml-6">
                  {ticket.section}
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0 gap-4">
                <div className="text-xl font-bold text-black">${ticket.price}</div>
                <button
                  className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-200 transition"
                  onClick={() => navigate("/vipcheckout")}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}