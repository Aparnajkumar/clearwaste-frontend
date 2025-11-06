import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { bookapickupAPI, makepaymentAPI } from '../services/allapi'
import Userheader from './components/Userheader'
import { toast } from 'react-toastify'

function BookPickUp() {
    const [token, setToken] = useState("")
    const [booking, setBooking] = useState({
        wastetype: "",
        address: "",
        date: "",
        time: "",
        instructions: "",
        username: "",
        password: "",
        amount: "",
        weight: ""
    })


    const bookapickup = async () => 
       { const{        wastetype, address,
        date,
        time,

        amount,
        weight}=booking
         if(  ! wastetype||!address||! date||! time||! amount||! weight){
            toast.error(`Fill the form completely`)
        }else{
        
        //create reqheader
        const reqheader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await bookapickupAPI(booking, reqheader)
            console.log(result);
            toast.success(`Booking Successful!!Make payment`)
            setBooking(result.data)

        } catch (error) {
            console.log(`something went wrong`);

        }}
    }
    console.log(booking);


    const makePayment = async () => {

        //reqbody
        const reqBody = {
            bookingdetails: booking
        }

        //create reqheader
        const reqheader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await makepaymentAPI(reqBody, reqheader)
        console.log(result);
        const sessionURL = result.data.sessionURL
        console.log(sessionURL)

        if (sessionURL) {
            window.location.href = sessionURL
        } else {
            alert(`something went wrong`)
        }
    }


    useEffect(() => {
        if (sessionStorage.getItem("token"))
            setToken(sessionStorage.getItem("token"))


        {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setBooking({
                ...booking,
                username: user.username,
                userEmail: user.email,
                password: user.password
            })
        }
    }, [])


    return (
        <>
            <Userheader />
            <div className=" m-10 text-indigo-900 font-medium shadow-2xs">
                <h1 className='text-center text-indigo-900 text-2xl p-6'>Book a Waste PickUp </h1>
                <form action="" className=' shadow-2xl space-y-4 p-4'>
                    <div>
                        <label htmlFor="">Choose Waste Type : </label>
                        <select onChange={(e) => setBooking({ ...booking, wastetype: e.target.value })} className=' w-full border rounded p-2'>
                            <option >Select waste type</option>
                            <option >Plastic</option>
                            <option >Food</option>
                            <option >E-waste</option>
                            <option >Paper</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Address : </label>
                        <textarea onChange={(e) => setBooking({ ...booking, address: e.target.value })} name="" id="" className=' w-full border rounded-lg'></textarea>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Pickup Date</label>
                        <input onChange={(e) => setBooking({ ...booking, date: e.target.value })} type="date" className="w-full border rounded-lg p-2" />
                    </div>
                    <div className=''>
                        <label className="block font-medium mb-1">Amount</label>
                        <div className='flex'>
                            <input value={booking.weight} onChange={(e) => { const weight = e.target.value; setBooking({ ...booking, weight, amount: weight * 40 }) }} placeholder="Weight in kg" className=" border rounded-lg p-2" />
                            *₹40  =
                            <p>Amount to be paid: ₹{booking.amount || 0}</p>
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Time Slot</label>
                        <select onChange={(e) => setBooking({ ...booking, time: e.target.value })} className="w-full border rounded-lg p-2">
                            <option>Select Time Slot</option>
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Special Instructions</label>
                        <textarea onChange={(e) => setBooking({ ...booking, instructions: e.target.value })}
                            rows="2"
                            className="w-full border rounded-lg p-2"
                            placeholder="Any additional details?"
                        />
                    </div>

                    <div className='text-center'>
                        <button onClick={bookapickup}
                            type="button"
                            className="p-2 bg-gray-600 text-white py-2 me-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Book Pickup
                        </button>

                        <button
                            onClick={makePayment}
                            type="button"
                            disabled={!booking._id} // disable until booking is done
                            className={`p-2 py-2 rounded-lg transition ${booking._id
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                                }`}
                        >
                            Make Payment
                        </button>

                    </div>


                </form>
            </div>
            <Footer />
        </>
    )
}

export default BookPickUp