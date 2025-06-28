
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft } from "react-icons/fa";

// const vipDates = Array(8).fill({
//   date: 'AUG 1 2025',
//   event: 'Musikfest',
//   location: 'Bethlehem, PA'
// });

// const VipPackages = () => {
//   return (
//     <div className="min-h-screen font-sans text-white bg-brand-deep">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-brand.dark px-4 py-3">
//         <h1 className="text-1xl font-bold text-red-600 tracking-widest">VIP NATION</h1>
//         <Link
//           className="flex items-center text-red-600 hover:text-red-800"
//           to={-1}
//           onClick={e => {
//             e.preventDefault();
//             window.history.length > 1 ? window.history.back() : window.location.assign('/');
//           }}
//         >
//           <FaArrowLeft className="mr-2" />
//           <span className="font-medium">Back</span>
//         </Link>
//       </div>

//       {/* Hero Image */}
//       <div className="w-full mb-5">
//         <img
//           src="/vipnation.jpeg"
//           alt="Riley Green VIP"
//           className="w-full object-cover"
//         />
//       </div>

//       {/* Description */}
//       <div className="bg-red-700 text-white p-4 text-center text-xs">
//         <p className="font-bold">Riley Green</p>
//         <p className="uppercase font-semibold text-[11px]">DAMN COUNTRY MUSIC TOUR</p>
//         <p className="mt-2 leading-tight">
//           Premium tickets, meet & greet and special photo op with Riley Green, exclusive access to the VIP Lounge, specially designed gift item & more!
//         </p>
//       </div>

//       {/* Package Cards */}
//       <div className="py-2 px-2 space-y-0">
//         <h2 className="text-1xl font-bold uppercase text-white mb-2">VIP PACKAGES</h2>

//         {vipDates.map((show, idx) => (
//           <div key={idx}>
//             {/* White Card */}
//             <div className="bg-white text-center py-3">
//               <p className="text-sm font-bold text-black">{show.date}</p>
//               <p className="text-xs text-black">{show.event}</p>
//               <p className="text-xs text-black mb-3">{show.location}</p>

//               {/* Full-width Button */}
//               <Link
//                 to="/vipcheckout"
//                 className="block w-full bg-red-600 text-white text-xs font-bold py-2 uppercase tracking-widest"
//               >
//                 Packages
//               </Link>
//             </div>

//             {/* Divider after each card */}
//             <div className="h-4 bg-brand.deep" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VipPackages;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const vipDates = [
  { date: "JULY 24, 2025", event: "New York, NY", location: "" },
  { date: "JULY 25, 2025", event: "Boston, MA", location: "" },
  { date: "JULY 26, 2025", event: "Gilford, NH", location: "" },
  { date: "AUG 21, 2025", event: "Bonner, MT", location: "" },
  { date: "AUG 22, 2025", event: "Idaho Falls, ID", location: "" },
  { date: "AUG 23, 2025", event: "Nampa, ID", location: "" },
  { date: "SEP 11, 2025", event: "London 02 Forum Kentish Town", location: "" },
  { date: "SEP 12, 2025", event: "London 02 Forum Kentish Town", location: "" },
  { date: "SEP 13, 2025", event: "Birmingham 02 Academy", location: "" },
  { date: "SEP 15, 2025", event: "Manchester Academy", location: "" },
  { date: "SEP 16, 2025", event: "Glasgow 02 Academy", location: "" },
  { date: "SEP 18, 2025", event: "Belfast Waterfront Hall", location: "" },
  { date: "SEP 19, 2025", event: "Dublin Olympia", location: "" },
];

const VipPackages = () => {
  return (
    <div className="min-h-screen font-sans text-white bg-brand-deep">
      {/* Header */}
      <div className="flex justify-between items-center bg-brand.dark px-4 py-3">
        <h1 className="text-1xl font-bold text-red-600 tracking-widest">VIP NATION</h1>
        <Link
          className="flex items-center text-red-600 hover:text-red-800"
          to={-1}
          onClick={e => {
            e.preventDefault();
            window.history.length > 1 ? window.history.back() : window.location.assign('/');
          }}
        >
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full mb-5">
        <img
          src="/vipnation.jpeg"
          alt="Riley Green VIP"
          className="w-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="bg-red-700 text-white p-4 text-center text-xs">
        <p className="font-bold">Riley Green</p>
        <p className="uppercase font-semibold text-[11px]">DAMN COUNTRY MUSIC TOUR</p>
        <p className="mt-2 leading-tight">
          Premium tickets, meet & greet and special photo op with Riley Green, exclusive access to the VIP Lounge, specially designed gift item & more!
        </p>
      </div>

      {/* Package Cards */}
      <div className="py-2 px-2 space-y-0">
        <h2 className="text-1xl font-bold uppercase text-white mb-2">VIP PACKAGES</h2>

        {vipDates.map((show, idx) => (
          <div key={idx}>
            {/* White Card */}
            <div className="bg-white text-center py-3">
              <p className="text-sm font-bold text-black">{show.date}</p>
              <p className="text-xs text-black">{show.event}</p>
              <p className="text-xs text-black mb-3">{show.location}</p>

              {/* Full-width Button */}
              <Link
                to="/vipcheckout"
                className="block w-full bg-red-600 text-white text-xs font-bold py-2 uppercase tracking-widest"
              >
                Packages
              </Link>
            </div>

            {/* Divider after each card */}
            <div className="h-4 bg-brand.deep" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VipPackages;
