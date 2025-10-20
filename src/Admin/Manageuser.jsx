import React, { useState } from 'react'
import Adminheader from '../components/Adminheader';

function Manageuser() {

      const [users, setUsers] = useState([
    { id: 1, name: "Aparna", email: "aparna@example.com", address: "Kochi", bookings: 3, status: "Active" },
    { id: 2, name: "Ravi Kumar", email: "ravi@example.com", address: "Chennai", bookings: 1, status: "Blocked" },
    { id: 3, name: "Priya Sharma", email: "priya@example.com", address: "Delhi", bookings: 5, status: "Active" },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };
  return (
    <>

<Adminheader/>

  
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">Manage Users</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-sky-200 text-sky-900">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Bookings</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-sky-50 transition"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.address}</td>
                <td className="p-3">{user.bookings}</td>
                <td
                  className={`p-3 font-semibold ${
                    user.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.status}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className={`px-3 py-1 rounded text-white ${
                      user.status === "Active" ? "bg-red-600" : "bg-green-600"
                    }`}
                  >
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                  <button className="px-3 py-1 rounded bg-sky-600 text-white">
                    View Bookings
                  </button>
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

export default Manageuser