import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

function UserHome() {
  return (
    <>
    <Header/>
      <div className=" m-5">
        <div className='relative w-full min-h-screen '>

          <img className=' absolute inset-0 max-w-full object-contain h-full mx-auto' src="/img5.jpg" alt="" />

          <div className='relative z-10 p-6 '>
            <h1 className='font-extrabold  relative z-10'>Welcome User,</h1>

            <p className='text-center z-10 pt-4 text-2xl relative text-indigo-800'>We are there to Clear your waste</p>

            <div className="grid z-20 grid-cols-1 md:grid-cols-3  mt-15  text-center  ">

              <div className='shadow-lg rounded  bg-sky-100 p-3 m-2'>
                <h1 className='font-bold p-2'>Book PickUp</h1>
                <p className='p-3'>Fed up with heap of waste at your place. we are a click away. Book us and clear your waste.</p>
                <Link to={"/bookpickup"}>                <button type="button" className='bg-sky-800 rounded text-white p-2'>Book now</button></Link>
              </div>
              <div className='shadow-lg rounded  bg-sky-100 p-3 m-2'>
                <h1 className='font-bold p-2'>Track PickUp status</h1>
                <p className='p-3'>Fed up with heap of waste at your place. we are a click away. View you status.</p>
                <Link to={"/status"}>                <button type="button" className='bg-sky-800 rounded text-white p-2'>Track</button></Link>
              </div>
              <div className='shadow-lg rounded  bg-sky-100 p-3 m-2'>
                <h1 className='font-bold p-2'>My Bookings</h1>
                <p className='p-3'>Fed up with heap of waste at your place. we are a click away. See your booking history here.</p>
                <Link to={"/booking"}>
                  <button type="button" className='bg-sky-800 rounded text-white p-2'>Booking history</button>

                </Link>              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default UserHome