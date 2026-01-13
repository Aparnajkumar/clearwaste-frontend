import React, { useEffect, useState } from 'react'
import { getalluserbookingsAPI ,getemplocAPI,updatestatusAPI} from '../services/allapi'
import UserHome from '../User/UserHome'
import Userheader from '../User/components/Userheader'

function Viewbookings() {
  const [bookings, setBookings] = useState([])

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



  const getbookings = async (token) => {
    //create header
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getalluserbookingsAPI(reqheader)
    console.log(result);
    setBookings(result.data)
  }

  const updateStatus = async (id,newstatus) => {
    const token = sessionStorage.getItem("token")
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
const reqbody={status:newstatus}
    const result = await updatestatusAPI(id,reqbody,reqheader)
    console.log(result);
      getbookings(token)

  }

  useEffect(()=>{
if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      getbookings(token)
    }
  },[])

  return (
    <>
    
<div className='p-6 min-h-screen '>
    <h2 className='text-2xl text-gray-700 p-2'>Total bookings</h2>
    <marquee><p className='text-yellow-400 p-2'>Cross-check the weight of the waste before pickup</p></marquee>
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-green-200 text-slate-900">
                    <th className="p-3 text-left">Booking ID</th>
                    <th className="p-3 text-left">User</th>
                    <th className="p-3 text-left">Waste Type</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">weight(user)</th>
                    <th className="p-3 text-left">Location</th>
                    <th className="p-3 text-left">Pickup status</th>
                  </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr
                      key={booking.id}
                      className="border-b hover:bg-sky-50 transition"
                    >
                      <td className="p-3">{booking._id}</td>
                      <td className="p-3">{booking.username}</td>
                      <td className="p-3">{booking.wastetype}</td>
                      <td className="p-3">{new Date(booking.date).toLocaleDateString("en-GB")}</td>
                      <td className="p-3">{booking.weight}</td>
<td className="p-3">
  {booking.location?.latitude && booking.location?.longitude ? (
    <iframe
      width="200"
      height="150"
      style={{ border: "0", borderRadius: "8px" }}
      src={`https://maps.google.com/maps?q=${booking.location.latitude},${booking.location.longitude}&z=15&output=embed`}
      allowFullScreen
      loading="lazy"
    ></iframe>

  ) : (
    <span className="text-red-500">No Location</span>
  )}
</td>

                      <td >
                      
<select
                      value={booking.status}
                      onChange={(e) => updateStatus(booking._id, e.target.value)}
                      className="border rounded p-1"
                    >
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                    </td>
                          <td className="p-3 space-x-2">
  <button
    onClick={() => startLiveTracking(booking._id)}
    className="bg-green-500 text-white px-2 py-1 rounded text-sm"
  >
    Start
  </button>

  <button
    onClick={stopLiveTracking}
    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
  >
    Stop
  </button>
</td>
    
                    </tr>))}
    
                </tbody>
              </table>
            </div>
</div>

    </>
  )
}

export default Viewbookings