import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader';
import {getalluserAPI} from '../services/allapi'

function Manageuser() {


  const [users, setUsers] = useState([])
  const [token, setToken] = useState("")



  const getallusers = async (token) => {

    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getalluserAPI(reqheader)
      console.log(result);
      setUsers(result.data)

    } catch (error) {
      alert(`Something went wrong`)
    }
  }


  useEffect(() => {
        if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")

     getallusers(token)}
  }, [])

  return (
    <>

      <Adminheader />


      <div className="p-6 min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Manage Users</h1>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-sky-200 text-sky-900">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                {/* <th className="p-3 text-left">Address</th>
                <th className="p-3 text-left">Bookings</th>
                <th className="p-3 text-left">Status</th> */}
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ?
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-sky-50 transition"
                  >
                    <td className="p-3">{user?._id}</td>
                    <td className="p-3">{user?.username}</td>
                    <td className="p-3">{user?.email}</td>
                    {/* <td className="p-3">{user?.address}</td>
                    <td className="p-3">{user?.bookings}</td>
                    <td
                      className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"
                        }`}
                    >
                      {user?.status}
                    </td> */}
                    <td className="p-3 text-center space-x-2">
                      <button
                        // onClick={() => toggleStatus(user.id)}
                        className={`px-3 py-1 rounded text-white ${user?.status === "Active" ? "bg-red-600" : "bg-green-600"
                          }`}
                      >
                        {user?.status === "Active" ? "Block" : "Unblock"}
                      </button>
                      <button className="px-3 py-1 rounded bg-sky-600 text-white">
                        View Bookings
                      </button>
                      <button className="px-3 py-1 rounded bg-gray-600 text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                )) :
<tr>
                  <td >No user found</td>
  
</tr> }           </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Manageuser