import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userbookinghistoryAPI } from '../services/allapi'
import Userheader from './components/Userheader'
import { useParams } from 'react-router-dom'

function TrackStatus() {
      const [token, setToken] = useState("")
      const [booking, setBooking] = useState()
  
      console.log(booking);
  const { id } = useParams(); 
      const getuserhistory = async () => {
          const token = sessionStorage.getItem("token")
          //create reqheader
          const reqheader = {
              "Authorization": `Bearer ${token}`
          }
          const result = await userbookinghistoryAPI(reqheader)
          console.log(result);
          setBooking(result.data.find(b => b._id === id))
      }
  
  
      useEffect(() => {
          if (sessionStorage.getItem("token")){
              setToken(sessionStorage.getItem("token")); 
              const user = JSON.parse(sessionStorage.getItem("existingUser"))
              setBooking({
                  status:user.status,
                  username: user.username,
                  address:user.address
              })
               getuserhistory()
          }
         
      }, [])
  return (
    <>
      <Userheader/>
      <div className=" " >
        <h1 className='text-center font-bold text-2xl text-indigo-900 mt-4 p-4'>Track Your Booking Status</h1>

        <div className='mb-15 mt-8  bg-cover bg-center flex justify-center   items-center ' style={{ backgroundImage: "url('')" }}>
          <div className="   border-8 border-blue-200 shadow-2xl p-2 bg-indigo-200 rounded">
            <h2 className='p-4  '>Booking ID:<b> {booking?._id}</b></h2>
            <p className='p-4 '>Current status :<b> {booking?.status}</b></p>
            <p className='p-4'>Address :<b> {booking?.address}</b></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TrackStatus