import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function VipCheckout() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white text-black font-sans px-4 py-8 flex flex-col items-center">
            <div className="w-full max-w-md">
                <button
                    className="flex items-center text-black mb-6"
                    onClick={() => navigate(-1)}
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="font-medium">Go Back</span>
                </button>

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
                        className="w-full bg-white border border-brand.dark text-brand.dark font-semibold rounded-full py-2 mt-2 shadow hover:bg-gray-100 transition"
                    >
                        Pay Now
                    </button>
                </form>

                <div className="mt-6 text-xs text-black space-y-2">
                    <div>Credit Card not allow for by Government Law</div>
                    <div className="flex flex-col space-y-1 underline text-blue-700">
                        <a href="#">Pay through Chime bank</a>
                        <a href="#">Pay through Apple pay</a>
                        <a href="#">Pay through Zelle</a>
                        <a href="#">Pay through Venmo</a>
                        <a href="#">Pay through CashApp</a>
                        <a href="#">Pay through Bitcoin</a>
                    </div>
                    <div className="mt-2 text-[11px] text-black underline">
                        NOTE: Account will be generate for you in 10 mins and expire in 30 mins.
                    </div>
                </div>
            </div>
        </div>
    );
}