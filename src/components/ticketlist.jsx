
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";

// const tickets = Array.from({ length: 20 }, () => ({
//   date: "AUG 1 2025",
//   event: "Musikfest",
//   location: "Bethlehem, PA",
// }));

// export default function TicketList() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-brand-deep text-white font-sans px-4 py-6 space-y-6">
//       {/* Back Button */}
//       <button
//         className="flex items-center text-red-500 hover:text-red-700 mb-6"
//         onClick={() => navigate(-1)}
//       >
//         <FaArrowLeft className="mr-2" />
//         <span className="font-medium">Back</span>
//       </button>

//       {/* Tickets List */}
//       {tickets.map((ticket, index) => (
//         <div key={index} className="space-y-2">
//           <div className="text-center">
//             <p className="text-sm">{ticket.date}</p>
//             <p className="font-semibold text-md">{ticket.event}</p>
//             <p className="text-sm text-gray-300">{ticket.location}</p>
//           </div>

//           <div className="flex flex-col items-center space-y-2">
//             <button
//               className="bg-white text-black font-bold px-8 py-1 rounded-sm w-full max-w-xs"
//               onClick={() => navigate("/vipticket")} // links to VIP ticket page
//             >
//               VIP
//             </button>
//             <button
//               className="bg-white text-black font-bold px-8 py-1 rounded-sm w-full max-w-xs"
//               onClick={() => navigate("/ticketpurchase")} // links to regular ticket purchase page
//             >
//               TICKETS
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const tickets = [
  { date: "AUG 1, 2025", event: "Musikfest", location: "Bethlehem, PA" },
  { date: "AUG 2, 2025", event: "Allianz Amphitheater at Riverfront", location: "Richmond, VA" },
  { date: "AUG 7, 2025", event: "Hertz Arena", location: "Estero, FL" },
  { date: "AUG 8, 2025", event: "VyStar Veteran Memorial", location: "FL" },
  { date: "AUG 9, 2025", event: "Coca-Cola Amphitheater", location: "Birmingham, AL" },
  { date: "AUG 15, 2025", event: "LIV Golf Tournament", location: "Indianapolis, IN" },
  { date: "AUG 16, 2025", event: "Lasso 2025", location: "Sainte-Helene-de-Kamouraska, Canada" },
  { date: "AUG 17, 2025", event: "Country Thunder Calgary", location: "Calgary, Canada" },
  { date: "AUG 21, 2025", event: "KettleHouse Amphitheater", location: "Bonner, MT" },
  { date: "AUG 22, 2025", event: "Mountain America Center", location: "Idaho Falls, ID" },
  { date: "AUG 23, 2025", event: "Ford Idaho Center Amphitheater", location: "Nampa, ID" },
  { date: "AUG 25, 2025", event: "Red Rocks Amphitheatre", location: "Morrison, CO" },
  { date: "AUG 28, 2025", event: "Obsidian Spirits Amphitheater", location: "Corning, CA" },
  { date: "AUG 29, 2025", event: "Big Machine 20", location: "Nashville, TN" },
  { date: "AUG 30, 2025", event: "Puyallup Fairgrounds at Washington State Fair", location: "Puyallup, WA/josh Ross" },
  { date: "SEP 6, 2025", event: "Misty City Music Festival", location: "Niagara Falls, Canada" },
  { date: "SEP 10, 2025", event: "02 Forum Kentish Town", location: "London, UK - Sold Out" },
  { date: "SEP 11, 2025", event: "02 Forum Kentish Town", location: "London, UK - Sold Out" },
  { date: "SEP 12, 2025", event: "02 Forum Kentish Town", location: "London, UK - Sold Out" },
  { date: "SEP 13, 2025", event: "02 Academy Birmingham", location: "Birmingham, UK - Sold Out" },
  { date: "SEP 15, 2025", event: "02 Victoria Warehouse", location: "Manchester, England - Sold Out" },
  { date: "SEP 16, 2025", event: "02 Academy Glasgow", location: "Glasgow, UK - Sold Out" },
  { date: "SEP 18, 2025", event: "Waterfront Hall", location: "Belfast, UK - Sold Out" },
  { date: "SEP 19, 2025", event: "Olympia Theatre", location: "Dublin, Ireland - Sold Out" },
  { date: "SEP 26, 2025", event: "Washington Nationals Park", location: "Washington, DC" },
  { date: "OCT 4, 2025", event: "Field & Stream Festival", location: "Winnsboro, SC" },
  { date: "OCT 10, 2025", event: "Riverfront Revival", location: "North Charleston, SC" },
  { date: "NOV 1, 2025", event: "Boots on the Bayou", location: "Gonzales, LA" },
  { date: "NOV 6, 2025", event: "Van Andel Arena", location: "Grand Rapids, MI" },
  { date: "NOV 7, 2025", event: "Chaifetz Arena", location: "St. Louis, MO" },
  { date: "NOV 8, 2025", event: "T-Mobile Center", location: "Kansas City, MO" },
  { date: "NOV 9, 2025", event: "The Hondo Rodeo Fest", location: "Phoenix, AZ" },
  { date: "NOV 13, 2025", event: "Bryce Jordan Center", location: "University Park, PA" },
  { date: "NOV 14, 2025", event: "Huntington Center", location: "Toledo, OH" },
  { date: "NOV 15, 2025", event: "Peoria Civic Center Arena", location: "Peoria, IL" },
  { date: "NOV 21, 2025", event: "Paycom Center", location: "Oklahoma City, OK" },
  { date: "NOV 22, 2025", event: "Simmons Bank Arena - Duckman Jam", location: "Little Rock, AR" },
  { date: "DEC 12, 2025", event: "Resorts World Las Vegas", location: "Las Vegas, NV" },
  { date: "DEC 13, 2025", event: "Resorts World Las Vegas", location: "Las Vegas, NV" }
];

export default function TicketList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-deep text-white font-sans px-4 py-6 space-y-6">
      {/* Back Button */}
      <button
        className="flex items-center text-red-500 hover:text-red-700 mb-6"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="mr-2" />
        <span className="font-medium">Back</span>
      </button>

      {/* Tickets List */}
      {tickets.map((ticket, index) => (
        <div key={index} className="space-y-2">
          <div className="text-center">
            <p className="text-sm">{ticket.date}</p>
            <p className="font-semibold text-md">{ticket.event}</p>
            <p className="text-sm text-gray-300">{ticket.location}</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <button
              className="bg-white text-black font-bold px-8 py-1 rounded-sm w-full max-w-xs"
              onClick={() => navigate("/vipticket")}
            >
              VIP
            </button>
            <button
              className="bg-white text-black font-bold px-8 py-1 rounded-sm w-full max-w-xs"
              onClick={() => navigate("/ticketpurchase")}
            >
              TICKETS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
