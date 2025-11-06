import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader';
import { getalluserAPI, getalluserbookingsAPI, updatestatusAPI, userbookinghistoryAPI } from '../services/allapi';

function Managebooking() {
  const [bookings, setBookings] = useState([])


  const getbookings = async (token) => {
    //create header
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getalluserbookingsAPI(reqheader)
    console.log(result);
    setBookings(result.data)
  }

  const updateStatus = async (id,newstatus) => {
    const token = sessionStorage.getItem("token")
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
const reqbody={status:newstatus}
    const result = await updatestatusAPI(id,reqbody,reqheader)
    console.log(result);
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      getbookings(token)
    }
  }
    , [])


  return (
    <>
      <Adminheader />
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
                <th className="p-3 text-left">weight</th>
                <th className="p-3 text-left">Amount</th>
                {/* <th className="p-3 text-left">Payment</th> */}
                <th className="p-3 text-left">Pickup</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-sky-50 transition"
                >
                  <td className="p-3">{booking._id}</td>
                  <td className="p-3">{booking.username}</td>
                  <td className="p-3">{booking.wastetype}</td>
                  <td className="p-3">{new Date(booking.date).toLocaleDateString("en-GB")}</td>
                  <td className="p-3">{booking.weight}</td>
                  <td className="p-3 font-semibold">{booking.amount}</td>
                  {/* <td
                  className={`p-3 font-semibold ${
                    booking.payment === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {booking.payment}
                </td> */}
                  {/* <td className="p-3">{booking.status}</td> */}
                  <td className=" text-center ">
                    <select
                      value={booking.status}
                      onChange={(e) => updateStatus(booking._id, e.target.value)}
                      className="border rounded p-1"
                    >
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select></td><td className='text-center'>
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