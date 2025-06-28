// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";

// export default function CharityFund() {
//   const navigate = useNavigate();

// return (
//     <div className="max-w-xs mx-auto py-4 px-3 bg-brand-light min-h-screen text-black font-sans text-base">
//         <div className="flex justify-end">
//             <button
//                 className="flex items-center text-sm text-black mb-2"
//                 onClick={() => navigate(-1)}
//             >           <FaArrowLeft />
//                 <span className="mr-1">Go Back</span>
     
//             </button>
//         </div>
//         <h2 className="text-xl font-bold mb-1 leading-tight">The Buford<br />Bonds<br />Charitable Fund</h2>
//         <div className="text-sm mb-2 font-semibold">Established 2023</div>
//         <div className="text-sm mb-4">
//             The Buford Bond Charitable Fund is establish by Flyer Green in 2023 to support nonprofit organizations around the country which help those who need it the most.
//         </div>
//         <div className="mb-2">
//             <div className="text-sm font-bold mb-1">DONATION</div>
//             <div className="space-y-1 text-sm">
//                 <div>$10.00</div>
//                 <div>$25.00</div>
//                 <div>$50.00</div>
//                 <div>$100.00</div>
//                 <div>$500.00</div>
//                 <div>$1000.00</div>
//                 <div>Any amount you have.</div>
//             </div>
//         </div>
//         <div className="mt-4 mb-2 text-sm font-bold">Fill Contact Profile</div>
//          <form className="space-y-5">
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     value="Email"
//                     disabled
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-gray-500 text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="email"
//                     placeholder="United States"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Street Address"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="State"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="City"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Zip code"
//                     className="w-full rounded-full bg-gray-100 px-4 py-2 outline-none text-base"
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="w-full bg-white border border-brand.dark text-brand.dark font-semibold rounded-full py-2 mt-2 shadow hover:bg-gray-100 transition text-base"
//             >
//                 Pay Now
//             </button>
//         </form>

//         <div className="mt-6 text-sm text-black space-y-2">
//             <div>Credit Card not allow for by Government Law</div>
//             <div className="flex flex-col space-y-1 underline text-blue-700">
//                 <a href="#">Pay through Chime bank</a>
//                 <a href="#">Pay through Apple pay</a>
//                 <a href="#">Pay through Zelle</a>
//                 <a href="#">Pay through Venmo</a>
//                 <a href="#">Pay through CashApp</a>
//                 <a href="#">Pay through Bitcoin</a>
//             </div>
//             <div className="mt-2 text-[13px] text-black underline">
//                 NOTE: Account will be generate for you in 10 mins and expire in 30 mins.
//             </div>
//         </div>
//     </div>
// );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function CharityFund() {
  const navigate = useNavigate();

  return (
    <div className="max-w-xs mx-auto py-4 px-3 bg-gray-100 min-h-screen text-black font-sans text-[15px] leading-tight">
      {/* Back Button */}
      <div className="flex justify-start">
        <button
          className="flex items-center text-sm text-black mb-3"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-1" />
          Go Back
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4 text-center leading-tight">
        The Buford<br />Bonds<br />Charitable Fund
      </h2>

      {/* Established Date */}
      <div className="text-base font-bold mb-2">Established 2023</div>

      {/* Description */}
      <p className="text-[15px] mb-5">
        The Buford Bond Charitable Fund is establish by Riley Green in 2023 to support nonprofit organizations around the country which help those who need it the most.
      </p>

      {/* Donation Options */}
      <div className="mb-4">
        <h3 className="text-base font-bold mb-2">DONATION</h3>
        <div className="space-y-1 text-[15px]">
          <p>$1000.00</p>
          <p>$500.00</p>
          <p>$200.00</p>
          <p>$100.00</p>
          <p>$50.00</p>
          <p>$25.00</p>
          <p>Any amount you have.</p>
        </div>
      </div>

      {/* Form */}
      <h3 className="mt-6 mb-2 text-base font-bold">Fill Contact Profile</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="text"
          placeholder="United State"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Street Address"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="text"
          placeholder="State"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />
        <input
          type="text"
          placeholder="Zip code"
          className="w-full rounded-full bg-gray-200 px-4 py-2 outline-none text-sm"
        />

        <button
          type="submit"
          className="mx-auto block border border-brand.deep rounded-full px-6 py-2 font-semibold text-black hover:bg-brand.deep hover:text-white text-sm"
        >
          Pay Now
        </button>
      </form>

      {/* Payment Instructions */}
      <div className="mt-6 text-sm space-y-2 text-black">
        <p className="font-semibold">Credit Card not allow for by Government Law</p>
        <div className="underline text-blue-700 space-y-1">
          <p>Pay Through Chime bank</p>
          <p>Pay through Apple pay</p>
          <p>Pay through Zelle</p>
          <p>Pay through Venmo</p>
          <p>Pay Through CashApp</p>
          <p>Pay through Bitcoin</p>
        </div>
        <p className="underline text-xs mt-2">
          NOTE: Account will be generate for you in 10 mins and expire in 30 mins.
        </p>
      </div>
    </div>
  );
}
