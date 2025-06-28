import React, { useEffect, useState } from "react";
import Navbar from "./Navber"; // Adjust the path if needed

export default function VipticketUserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/charity-users")
            .then(async (res) => {
                if (!res.ok) throw new Error("Failed to fetch users");
                const contentType = res.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("API did not return JSON. Check your backend.");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Error fetching data");
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center py-8 text-gray-500">Loading...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

    return (
        <>
            <Navbar />
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Charity User List</h2>
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Full Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">State</th>
                                <th className="py-3 px-4 text-left">City</th>
                                <th className="py-3 px-4 text-left">Zipcode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="py-6 text-center text-gray-400">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user, idx) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="py-2 px-4">{idx + 1}</td>
                                        <td className="py-2 px-4">{user.fullName}</td>
                                        <td className="py-2 px-4">{user.email}</td>
                                        <td className="py-2 px-4">{user.state}</td>
                                        <td className="py-2 px-4">{user.city}</td>
                                        <td className="py-2 px-4">{user.zipcode}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}