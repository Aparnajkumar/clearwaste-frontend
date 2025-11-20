import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Adminheader() {
      const navigate = useNavigate()

      const handleLogout = () => {
            sessionStorage.removeItem("token")
            sessionStorage.removeItem("existingUser")
            navigate("/")
      }
      return (
            <>
                  <nav className='bg-indigo-300 p-5 flex justify-evenly items-center'>
                        <Link to={"/dashboard"}>
                              <strong className='md:ms-10 text-black md:text-3xl'> Dashboard</strong>
                        </Link>
                        <Link to={"/manageuser"}>
                              <p className='border-4 border-blue-200 p-1 rounded bg-indigo-200'>Users</p>
                        </Link>
                        <Link to={"/managebooking"}>
                              <p className='border-4 border-blue-200 p-1 rounded bg-indigo-200'>Bookings</p>
                        </Link>
                        <Link to={"/managepayment"}>
                              <p className='border-4 border-blue-200 p-1 rounded bg-indigo-200'>Payments</p>
                        </Link>
                        <button onClick={handleLogout} className='border p-2 rounded-2xl border-amber-200 bg-green-300 text-green-950' >Logout</button>
                  </nav>
            </>
      )
}

export default Adminheader