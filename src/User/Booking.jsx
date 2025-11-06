import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { userbookinghistoryAPI } from '../services/allapi'
import Userheader from './components/Userheader'

function Booking() {
    const [token, setToken] = useState("")
    const [booking, setBooking] = useState([])


    // wasteType:"",
    // date:"",
    // address:"",
    // status:"",
    // payment:"",


    console.log(booking);

    const getuserhistory = async () => {
        const token = sessionStorage.getItem("token")
        //create reqheader
        const reqheader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await userbookinghistoryAPI(reqheader)
        console.log(result);
        setBooking(result.data)
    }


    useEffect(() => {
        if (sessionStorage.getItem("token"))
            setToken(sessionStorage.getItem("token")); {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setBooking({
                ...booking,
                username: user.username
            })
        }
        getuserhistory()
    }, [])


    return (
        <>
            <Userheader />
            <div className=' w-full min-h-screen'>
                <h1 className="text-2xl font-bold text-center text-indigo-900 p-6">
                    My Booking History
                </h1>

                <div className="flex justify-center items-center">
                    <table className='border border-gray-200 p-5  shadow'>
                        <thead>
                            <tr>
                                <th className='border-1 border-gray-500 p-3 bg-blue-200'>Date</th>
                                <th className='border-1 border-gray-500 p-3 bg-blue-200'>Type of Waste</th>
                                <th className='border-1 border-gray-500 p-3 bg-blue-200'>Address</th>
                                <th className='border-1 border-gray-500 p-3 bg-blue-200'>Status</th>
                                <th className='border-1 border-gray-500 p-3 bg-blue-200'>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booking.length>0?
                            booking.map((booking) => (
                                <tr>
                                    <td className='p-3 border-1 border-gray-200'>{new Date(booking.date).toLocaleDateString("en-GB")}</td>
                                    <td className='p-3  border-1 border-gray-200'>{booking.wastetype}</td>
                                    <td className='p-3  border-1 border-gray-200'>{booking.address}</td>
                                    <td className={`p-3 border-1 border-gray-200 ${booking.status === "Completed"
                                        ? "text-green-600"
                                        : booking.status === "In Progress"
                                            ? "text-yellow-600"
                                            : "text-pink-600"
                                        }`}><Link to={`/status/${booking._id}`}>View status</Link></td>
                                    <td className={`p-3  border-1 border-gray-200 ${booking.payment === "Paid"
                                        ? "text-green-600"
                                        : "text-red-600"
                                        }`}>{booking.payment}</td>
                                </tr>))
                            :
                            <p>There are no previous bookings....</p>}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Booking