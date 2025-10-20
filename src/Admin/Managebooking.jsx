import React, { useState } from 'react'
import Adminheader from '../components/Adminheader';

function Managebooking() {
      const [bookings, setBookings] = useState([
    { id: 201, user: "Aparna", wasteType: "Plastic", date: "2025-10-12", slot: "10:00 AM - 12:00 PM", amount: "₹300", payment: "Paid", status: "Confirmed" },
    { id: 202, user: "Ravi Kumar", wasteType: "E-Waste", date: "2025-10-14", slot: "2:00 PM - 4:00 PM", amount: "₹500", payment: "Pending", status: "Pending" },
    { id: 203, user: "Priya Sharma", wasteType: "Organic", date: "2025-10-15", slot: "9:00 AM - 11:00 AM", amount: "₹200", payment: "Paid", status: "Completed" },
  ]);

  const updateStatus = (id, newStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <>
<Adminheader/>
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">Manage Bookings</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-sky-200 text-sky-900">
              <th className="p-3 text-left">Booking ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Waste Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Slot</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-sky-50 transition"
              >
                <td className="p-3">{booking.id}</td>
                <td className="p-3">{booking.user}</td>
                <td className="p-3">{booking.wasteType}</td>
                <td className="p-3">{booking.date}</td>
                <td className="p-3">{booking.slot}</td>
                <td className="p-3 font-semibold">{booking.amount}</td>
                <td
                  className={`p-3 font-semibold ${
                    booking.payment === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {booking.payment}
                </td>
                <td className="p-3">{booking.status}</td>
                <td className="p-3 text-center space-x-2">
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(booking.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                  <button className="px-3 py-1 rounded bg-gray-600 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </>
  )
}

export default Managebooking