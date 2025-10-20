import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Booking() {
    const bookings = [
        {
            id: 1,
            date: "2025-09-20",
            wasteType: "Plastic Waste",
            address: "Thrissur",
            status: "Completed",
            payment: "Paid",
        },
        {
            id: 2,
            date: "2025-09-25",
            wasteType: "Paper Waste",
            address: "Kochi",
            status: "Pending",
            payment: "Unpaid",
        },
        {
            id: 3,
            date: "2025-09-28",
            wasteType: "Food Waste",
            address: "Kochi",
            status: "In Progress",
            payment: "Paid",
        },
    ];

    return (
        <>
        <Header/>
            <div className='bg-sky-50 w-full min-h-screen'>
                <h1 className="text-3xl font-bold text-center text-sky-700 p-6">
                    My Booking History
                </h1>

                <div className="flex justify-center items-center">
                    <table className='border border-gray-200 p-5  shadow'>
                        <thead>
                            <tr>
                                <th className='border-2 border-white p-3 bg-sky-300'>Date</th>
                                <th className='border-2 border-white p-3 bg-sky-300'>Type of Waste</th>
                                <th className='border-2 border-white p-3 bg-sky-300'>Address</th>
                                <th className='border-2 border-white p-3 bg-sky-300'>Status</th>
                                <th className='border-2 border-white p-3 bg-sky-300'>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (<tr>
                                <td className='p-3 bg-sky-100 border-1 border-white'>{booking.date}</td>
                                <td className='p-3 bg-sky-100 border-1 border-white'>{booking.wasteType}</td>
                                <td className='p-3 bg-sky-100 border-1 border-white'>{booking.address}</td>
                                <td className={`p-3 bg-sky-100 border-1 border-white ${booking.status === "Completed"
                                        ? "text-green-600"
                                        : booking.status === "In Progress"
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                    }`}>{booking.status}</td>
                                <td className={`p-3 bg-sky-100 border-1 border-white ${booking.payment === "Paid"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}>{booking.payment}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Booking