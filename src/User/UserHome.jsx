import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import { FaUserCircle } from 'react-icons/fa'
import Userheader from './components/Userheader'
import { userbookinghistoryAPI } from '../services/allapi'

function UserHome() {
  const [profiledetails, setProfiledetails] = useState({})
  const [token, setToken] = useState("")
  console.log(profiledetails);

  const userdetails = async () => {
    const token = sessionStorage.getItem("token")
    //create reqheader
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await userbookinghistoryAPI(reqheader)
      console.log(result);
      setProfiledetails(result.data)
    } catch (error) {
      alert(`Something went wrong`)
    }
    console.log(profiledetails);

  }

  useEffect(() => {
    if (sessionStorage.getItem("token"))
    // setToken(sessionStorage.getItem("token")); {
    {
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      if (token) setToken(token)

      if (user) {
        setProfiledetails({ username: user.username });
      }

    }
    userdetails()
  }, [])

  return (
    <>
      <Userheader />
      <div className=" m-5">
        <div className='relative w-full min-h-screen '>
          <img className=' absolute inset-0 max-w-full object-contain h-full mx-auto' src="/img5.jpg" alt="" />
          <div className='relative z-10 p-6 '>
            {/* <div className='flex '><FaUserCircle className='text-3xl ' />
              <h1 className='font-extrabold  relative z-10'>Welcome <span className='text-green-800'>{profiledetails?.username}</span></h1>
            </div> */}
            <p className='text-center z-10 pt-4 text-2xl font-bold relative text-[#1E293B] '>We are there to Clear your waste</p>

            <div className="grid z-20 grid-cols-1 md:grid-cols-3  mt-15 gap-6 text-center  ">

              <div className='bg-white/85 backdrop-blur-sm shadow-xl rounded-lg p-5 hover:scale-105 transition"'>
                <h1 className='font-bold p-2'>Book PickUp</h1>
                <p className="text-sm text-gray-600 my-3">
                  Have waste piling up at your place? We are just a click away!
                </p>
                <Link to={"/bookpickup"}>
                  <button type="button" className='bg-[#06D6A0] hover:bg-[#05bf8f] transition text-white rounded-lg px-4 py-2'>Book now</button></Link>
              </div>
              <div className='bg-white/85 backdrop-blur-sm shadow-xl rounded-lg p-5 hover:scale-105 transition"'>
                <h1 className='font-bold p-2'>Edit Profile</h1>
                <p className="text-sm text-gray-600 my-3">
                  Update your personal details to serve you better.
                </p>
                <Link to={"/profile"}>
                  <button type="button" className='bg-[#06D6A0] hover:bg-[#05bf8f] transition text-white rounded-lg px-4 py-2'>Edit</button></Link>
              </div>
              <div className='bg-white/85 backdrop-blur-sm shadow-xl rounded-lg p-5 hover:scale-105 transition'>
                <h1 className='font-bold p-2'>My Bookings</h1>
                <p className="text-sm text-gray-600 my-3">
                  Track your waste pick-up and booking history.
                </p>
                <Link to={"/booking"}>
                  <button type="button" className='bg-[#06D6A0] hover:bg-[#05bf8f] transition text-white rounded-lg px-4 py-2'>Booking history</button>

                </Link>              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserHome