import React from 'react'
import { Link } from 'react-router-dom'

function Adminheader() {
      return (
            <>
                  <nav className='bg-indigo-300 p-5 flex md:gap-8 '>
<Link to={"/dashboard"}>
                              <strong className='md:ms-20 text-black md:text-3xl'> Dashboard</strong>
      
</Link>       
                 {/* <Link to={"/dashboard"}>
                              <a href="#bookings" className='border-4 border-blue-200 md:p-2 rounded bg-indigo-200'>Recent Bookings</a>

                        </Link> */}
                        <Link to={"/manageuser"}>
                              <a href="" className='border-4 border-blue-200 p-2 rounded bg-indigo-200'>Manage Users</a>

                        </Link><Link to={"/managepickup"}>
                              <a href="" className='border-4 border-blue-200 p-2 rounded bg-indigo-200'>Manage PickUps</a>

                        </Link>
                        <Link to={"/managebooking"}>
                              <a href="" className='border-4 border-blue-200 p-2 rounded bg-indigo-200'>Booking history</a>

                        </Link>
                        <Link to={"/managepayment"}>
                              <a href="" className='border-4 border-blue-200 p-2 rounded bg-indigo-200'>Payment history</a>

                        </Link>
                        <Link to={"/"}>
                              <a href="" className='border-4 border-blue-200 p-2 rounded bg-amber-500'>Home</a>

                        </Link>      </nav>
            </>
      )
}

export default Adminheader