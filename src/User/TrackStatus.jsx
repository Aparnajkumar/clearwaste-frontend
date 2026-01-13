import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getemplocAPI, userbookinghistoryAPI } from '../services/allapi'
import Userheader from './components/Userheader'
import { useParams } from 'react-router-dom'

function TrackStatus() {
      const [token, setToken] = useState("")
      const [booking, setBooking] = useState()
  
      console.log(booking);

let watchId = null;

const startLiveTracking = (bookingId) => {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  const token = sessionStorage.getItem("token");

  watchId = navigator.geolocation.watchPosition(
    async (position) => {
      const location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      const reqheader = {
        "Authorization": `Bearer ${token}`,
      };

      await getemplocAPI(bookingId, location, reqheader);
      console.log("Employee location updated");
    },
    (error) => {
      console.log(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000
    }
  );
};

const stopLiveTracking = () => {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
};

useEffect(() => {
  const interval = setInterval(async () => {
    
    setEmployeeLocation(data.employeeLocation);
  }, 5000);

  return () => clearInterval(interval);
}, []);



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
        <h1 className='text-center font-bold text-2xl text-slate-900 mt-4 p-4'>Track Your Booking Status</h1>

        <div className='mb-15 mt-8  bg-cover bg-center flex justify-center   items-center ' style={{ backgroundImage: "url('')" }}>
          <div className="   border-1 border-blue-200 shadow-xl p-2  rounded-2xl">
            <h2 className='p-4  '>Booking ID:<b> {booking?._id}</b></h2>
            <p className='p-4 '>Current status :<b> {booking?.status}</b></p>
            <p className='p-4'>Address :<b> {booking?.address}</b></p>
          </div>
        </div>
      </div>


{booking.location?.latitude && booking.location?.longitude ? (
  <iframe
    width="200"
    height="150"
    style={{ border: "0", borderRadius: "8px" }}
    src={`https://maps.google.com/maps?q=${booking.location.latitude},${booking.location.longitude}&z=15&output=embed`}
  ></iframe>
) : (
  <span className="text-red-500">No Location</span>
)}


      <Footer />
    </>
  )
}

export default TrackStatus