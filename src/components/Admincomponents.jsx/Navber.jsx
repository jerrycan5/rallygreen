import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const navItems = [
    { name: "Vip-ticket", href: "/vipticketpage" },
    { name: "Ticket", href: "/ticketlist" },
    { name: "Vip-package", href: "/vippackagespage" },
    { name: "Signup for Riley", href: "/signuppage" },
    { name: "Charitable Fund", href: "/charitypage" },
];

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Please fill in all fields.");
            return;
        }
        if (username === "admin" && password === "123") {
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid credentials.");
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
                <form
                    onSubmit={handleLogin}
                    className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl flex flex-col gap-6 w-96 border border-gray-700"
                >
                    <div className="flex flex-col items-center mb-2">
                        <div className="text-3xl font-extrabold text-white tracking-wide">Admin Login</div>
                        <div className="text-gray-300 text-sm mt-1">Sign in to your admin account</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-200 text-sm font-semibold">Username</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            autoFocus
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-200 text-sm font-semibold">Password</label>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 pr-12 flex-1"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute right-3 text-xl text-gray-400 hover:text-blue-500 focus:outline-none"
                                tabIndex={-1}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                style={{ top: "50%", transform: "translateY(-50%)" }}
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-400 text-center text-sm font-medium">{error}</div>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold text-lg transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    // Welcome to Admin design
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 flex flex-col">
            <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-10 py-8 flex flex-col items-center border border-gray-700">
                    <div className="text-4xl font-extrabold text-white mb-2">Welcome, Admin!</div>
                    <div className="text-blue-300 text-lg mb-4">You have successfully logged in.</div>
                    <div className="flex items-center gap-2 text-blue-400">
                        <span className="text-2xl">🎉</span>
                        <span className="font-semibold">Manage your dashboard below</span>
                    </div>
                </div>
            </div>
            <nav className="relative">
                {/* Menu Icon with Admin Name */}
                {!menuOpen && (
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="flex items-center gap-2 text-2xl text-gray-200 hover:text-blue-400 transition px-4 py-2 focus:outline-none"
                        aria-label="Open menu"
                        style={{ background: "none" }}
                    >
                        <IoMdMenu className="text-3xl" />
                        <span className="font-bold text-lg">Admin</span>
                    </button>
                )}

                {/* Slide-out Menu */}
                {menuOpen && (
                    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-50 transition-transform duration-300 animate-slide-in flex flex-col">
                        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700">
                            <span className="text-2xl font-bold">MyApp</span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-3xl text-gray-400 hover:text-white transition"
                                aria-label="Close menu"
                            >
                                <MdCancel />
                            </button>
                        </div>
                        <ul className="flex flex-col gap-4 px-6 py-8">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="block py-2 px-4 rounded hover:bg-gray-700 transition"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Optional: Overlay when menu is open */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-40"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </nav>
        </div>
    );
}