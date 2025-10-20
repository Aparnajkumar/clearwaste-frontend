import React, { useState } from 'react'
import Adminheader from '../components/Adminheader';

function Managepickup() {
      const [pickups, setPickups] = useState([
    { id: 101, user: "Aparna", wasteType: "Plastic", date: "2025-10-10", slot: "10:00 AM - 12:00 PM", address: "Kochi", payment: "Paid", status: "Pending" },
    { id: 102, user: "Ravi Kumar", wasteType: "E-Waste", date: "2025-10-11", slot: "2:00 PM - 4:00 PM", address: "Chennai", payment: "Unpaid", status: "Assigned" },
    { id: 103, user: "Priya Sharma", wasteType: "Organic", date: "2025-10-12", slot: "9:00 AM - 11:00 AM", address: "Delhi", payment: "Paid", status: "Completed" },
  ]);

  const updateStatus = (id, newStatus) => {
    setPickups(
      pickups.map((pickup) =>
        pickup.id === id ? { ...pickup, status: newStatus } : pickup
      )
    );
  };
  return (
    <>
    <Adminheader/>
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">Manage Pickups</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-sky-200 text-sky-900">
              <th className="p-3 text-left">Booking ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Waste Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Slot</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Payment</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pickups.map((pickup) => (
              <tr key={pickup.id} className="border-b hover:bg-sky-50 transition">
                <td className="p-3">{pickup.id}</td>
                <td className="p-3">{pickup.user}</td>
                <td className="p-3">{pickup.wasteType}</td>
                <td className="p-3">{pickup.date}</td>
                <td className="p-3">{pickup.slot}</td>
                <td className="p-3">{pickup.address}</td>
                <td className={`p-3 font-semibold ${pickup.payment === "Paid" ? "text-green-600" : "text-red-600"}`}>
                  {pickup.payment}
                </td>
                <td className="p-3">{pickup.status}</td>
                <td className="p-3 text-center space-x-2">
                  <select
                    value={pickup.status}
                    onChange={(e) => updateStatus(pickup.id, e.target.value)}
                    className="border rounded p-1"
                  >
                    <option>Pending</option>
                    <option>Assigned</option>
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

export default Managepickup