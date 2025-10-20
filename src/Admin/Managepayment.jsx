import React from 'react'
import  { useState } from "react";
import Adminheader from '../components/Adminheader';

function Managepayment() {
    const [payments] = useState([
    {
      txnId: "TXN1001",
      bookingId: 201,
      user: "Aparna",
      wasteType: "Plastic",
      date: "2025-10-02 10:30 AM",
      amount: "₹300",
      method: "UPI",
      status: "Success",
    },
    {
      txnId: "TXN1002",
      bookingId: 202,
      user: "Ravi Kumar",
      wasteType: "E-Waste",
      date: "2025-10-03 01:20 PM",
      amount: "₹500",
      method: "Card",
      status: "Pending",
    },
    {
      txnId: "TXN1003",
      bookingId: 203,
      user: "Priya Sharma",
      wasteType: "Organic",
      date: "2025-10-04 09:45 AM",
      amount: "₹200",
      method: "Cash on Pickup",
      status: "Failed",
    },
  ]);

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
              <th className="p-3 text-left">Method</th>
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
                <td className="p-3">{payment.user}</td>
                <td className="p-3">{payment.wasteType}</td>
                <td className="p-3">{payment.date}</td>
                <td className="p-3 font-semibold">{payment.amount}</td>
                <td className="p-3">{payment.method}</td>
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