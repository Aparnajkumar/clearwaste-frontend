import React from 'react'
import Adminheader from '../components/Adminheader'

function Dashboard() {
  return (
    <>
<Adminheader/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold text-sky-800">Total Users</h3>
          <p className="text-2xl font-extrabold">120</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold text-sky-800">Pending Pickups</h3>
          <p className="text-2xl font-extrabold">35</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold text-sky-800">Completed Payments</h3>
          <p className="text-2xl font-extrabold">₹75,000</p>
        </div>
      </div>


      <div id='#bookings' className="bg-white shadow-lg p-4 rounded-lg">
        <h3 className="text-lg font-bold text-sky-800 mb-3">Recent Bookings</h3>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-sky-100">
            <tr>
              <th className="border border-gray-300 p-2">Booking ID</th>
              <th className="border border-gray-300 p-2">User</th>
              <th className="border border-gray-300 p-2">Waste Type</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">BKG1234</td>
              <td className="border border-gray-300 p-2">Aparna</td>
              <td className="border border-gray-300 p-2">Plastic</td>
              <td className="border border-gray-300 p-2 text-yellow-600">Pending</td>
              <td className="border border-gray-300 p-2">₹250</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">BKG1235</td>
              <td className="border border-gray-300 p-2">Rahul</td>
              <td className="border border-gray-300 p-2">E-Waste</td>
              <td className="border border-gray-300 p-2 text-green-600">Completed</td>
              <td className="border border-gray-300 p-2">₹500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard

