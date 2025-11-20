import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import { getalluserAPI, getalluserbookingsAPI } from '../services/allapi'
import { FaFirstOrderAlt, FaUser, FaUsers } from 'react-icons/fa'

function Dashboard() {
  const [noofusers, setNoofusers] = useState("")
  const [noofbookings, setNoofbookings] = useState("")
  const [payment, setPayment] = useState("")
  const [token, setToken] = useState("")
  const [booking, setBookings] = useState([])

  const getdetails = async () => {
    const token = sessionStorage.getItem("token");

    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getalluserAPI(reqheader)
      setNoofusers(result.data.length)

      const result2 = await getalluserbookingsAPI(reqheader)
      console.log(result2);
      const recentData = result2.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)

      setBookings(recentData)
      setNoofbookings(result2.data.length)

      // const payment = bookings
      //   .filter((b) => b.pstatus === "Payed")
      //   .reduce((total, b) => total + (b.amount || 0) )
      // setPayment(payment)

    } catch (error) {
      alert(`something went wrong`)
    }
  }
  useEffect(() => {
    getdetails(token)
  }, [])
  return (
    <>
      <Adminheader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
        <div className="flex flex-col items-center shadow-2xl justify-center">
          <FaUsers className="text-3xl text-sky-800 mb-2" />
          <h3 className="text-xl font-bold text-sky-800">Total Users</h3>
          <p className="text-2xl font-extrabold">{noofusers}+</p>
        </div>

        <div className="flex flex-col items-center shadow-2xl justify-center">
          <FaFirstOrderAlt className="text-3xl text-sky-800 mb-2" />
          <h3 className="text-xl font-bold text-sky-800">Total bookings</h3>
          <p className="text-2xl font-extrabold">{noofbookings}+</p>
        </div>

        {/* <div className="bg-white shadow-lg p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold text-sky-800">Completed Payments</h3>
          <p className="text-2xl font-extrabold">₹{payment}</p>
        </div> */}
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

            {booking.map((item) => (
              <tr>
                <td className="border border-gray-300 p-2">{item._id}</td>
                <td className="border border-gray-300 p-2">{item.username}</td>
                <td className="border border-gray-300 p-2">{item.wastetype}</td>
                <td className="border border-gray-300 p-2 text-yellow-600">{item.status}</td>
                <td className="border border-gray-300 p-2">₹{item.amount}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard

