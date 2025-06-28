import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const tickets = [
  { qty: 1, row: "Sec 203 Row T", price: "$71.77" },
  { qty: 2, row: "Sec 203 Row S", price: "$179.66" },
  { qty: 2, row: "Sec 203 Row N", price: "$99.00" },
  { qty: 3, row: "Sec 203 Row N", price: "$201.77" },
  { qty: 4, row: "Sec 203 Row Q", price: "$140.00" },
  { qty: 5, row: "Sec 204 Row Q", price: "$169.89" },
  { qty: 6, row: "Sec 200 Row J", price: "$179.10" },
  { qty: 7, row: "Sec 200 Row J", price: "$466.00" },
  { qty: 8, row: "Sec 201 Row B", price: "$995.00" },
  { qty: 9, row: "Sec 201 Row B", price: "$273.88" },
  { qty: 10, row: "Sec 201 Row T", price: "$1000" },
];

export default function TicketPurchase() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-md mx-auto py-8 px-4 bg-white min-h-screen text-black font-sans flex flex-col items-center">
      <div className="w-full">
        <button
          className="flex items-center text-black mb-6"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Go Back</span>
        </button>
        <h2 className="text-lg font-bold mb-2 text-center">Tickets Available</h2>
        <div className="text-xs mb-3 text-center text-gray-600">
          *Tickets shown for play on 6/28/24 at 7:30 PM are posted by fans &amp; authorized by the venue*
        </div>
        <div className="border-l-4 border-green-600 bg-green-50 text-green-900 text-xs p-3 mb-3">
          <strong>24-HOUR REFUND POLICY IS IN PLACE</strong>
          <br />
          72 HOURS AFTER PURCHASE IT IS RESPONSIBILITY OF THE TICKET HOLDER
        </div>
        <div className="border-l-4 border-yellow-500 bg-yellow-50 text-yellow-900 text-xs p-3 mb-3">
          <strong>Important Information:</strong>
          <ul className="list-disc ml-5 mt-1">
            <li>Ticket Limit: 10 Tickets. If you’d like to buy more than 10 tickets please text (<a href="mailto:Rileygreenmanagementteam3@gmail.com" className="underline">Rileygreenmanagementteam3@gmail.com</a>).</li>
            <li>Box seats: Boxes range from 4 to 13 seats. Must buy whole box larger than standing.</li>
            <li>Party Pit: It is recommended that patrons are 14+ to be in the concert.</li>
          </ul>
        </div>
        <div className="border-l-4 border-blue-500 bg-blue-50 text-blue-900 text-xs p-3 mb-4">
          <strong>Delivery of Tickets:</strong> Print@Home/Mobile Free
        </div>
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2 text-gray-700">Select a Ticket</label>
          <div className="grid grid-cols-1 gap-3">
            {tickets.map((t, i) => (
              <button
                key={i}
                type="button"
                className={`flex items-center justify-between border rounded-lg px-4 py-3 transition ${
                  selected === i
                    ? "border-blue-600 bg-blue-50 shadow"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onClick={() => setSelected(i)}
              >
                <span className="text-sm">
                  {t.qty} Ticket{t.qty > 1 ? "s" : ""} - {t.row}
                </span>
                <span className="font-semibold text-sm">{t.price}</span>
                <span
                  className={`ml-3 w-4 h-4 rounded-full border-2 ${
                    selected === i
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300 bg-white"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Promo Code</label>
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Delivery</label>
            <input
              type="text"
              value="Print@Home / Mobile- FREE"
              disabled
              className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              placeholder="Number"
              className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-full py-2 mt-2 shadow hover:bg-blue-700 transition"
            disabled={selected === null}
          >
            {selected !== null
              ? `Pay ${tickets[selected].price}`
              : "Select a Ticket"}
          </button>
        </form>
        <div className="mt-8 text-xs text-black space-y-2">
          <div className="font-semibold text-red-600">Credit Card not allowed by Government Law</div>
          <div className="flex flex-col space-y-1 underline text-blue-700">
            <a href="#">Pay through Chime bank</a>
            <a href="#">Pay through Apple pay</a>
            <a href="#">Pay through Zelle</a>
            <a href="#">Pay through Venmo</a>
            <a href="#">Pay through CashApp</a>
            <a href="#">Pay through Bitcoin</a>
          </div>
          <div className="mt-2 text-[11px] text-black underline">
            NOTE: Account will be generated for you in 10 mins and expire in 30 mins.
          </div>
        </div>
      </div>
    </div>
  );
}
