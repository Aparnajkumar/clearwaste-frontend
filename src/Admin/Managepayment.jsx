import React from 'react'
import  { useState } from "react";
import Adminheader from '../components/Adminheader';

function Managepayment() {
    const [payments,setPayments] = useState([]);

  return (
    <>

  <Adminheader/>

    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">Payment History</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-sky-200 text-sky-900">
              <th className="p-3 text-left">Transaction ID</th>
              <th className="p-3 text-left">Booking ID</th>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Waste Type</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.txnId}
                className="border-b hover:bg-sky-50 transition"
              >
                <td className="p-3">{payment.txnId}</td>
                <td className="p-3">{payment.bookingId}</td>
                <td className="p-3">{payment.username}</td>
                <td className="p-3">{payment.wastetype}</td>
                <td className="p-3">{payment.date}</td>
                <td className="p-3 font-semibold">{payment.amount}</td>
                <td
                  className={`p-3 font-semibold ${
                    payment.status === "Success"
                      ? "text-green-600"
                      : payment.status === "Pending"
                      ? "text-orange-500"
                      : "text-red-600"
                  }`}
                >
                  {payment.status}
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

export default Managepayment