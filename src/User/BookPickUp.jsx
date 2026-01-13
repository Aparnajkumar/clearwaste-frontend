import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { bookapickupAPI, getrateAPI, getWasteRatesAPI, makepaymentAPI } from '../services/allapi'
import Userheader from './components/Userheader'
import { toast } from 'react-toastify'

function BookPickUp() {
    const [token, setToken] = useState("")
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [wasterate, setwasterate] = useState([])
    const [storerate, setstorerate] = useState()
    const [booking, setBooking] = useState({
        wastetype: "",
        address: "",
        date: "",
        time: "",
        instructions: "",
        username: "",
        password: "",
        amount: "",
        weight: "",
    })

    const getwastrate = async () => {
        try {
            const result = await getrateAPI()
            console.log(result);
            setwasterate(result.data)
        } catch (error) {
            console.log(error);

        }
    }
    console.log(wasterate);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    toast.success("Location captured successfully!");
                },
                () => {
                    toast.error("Please enable location access!");
                }
            );
        } else {
            toast.error("Geolocation not supported!");
        }
    };



    const bookapickup = async () => {
        const { wastetype, address,
            date,
            time,

            amount,
            weight } = booking
        if (!wastetype || !address || !date || !time || !amount || !weight) {
            toast.error(`Fill the form completely`)
        } else {

            //create reqheader
            const reqheader = {
                "Authorization": `Bearer ${token}`
            }
            try {
                const result = await bookapickupAPI({ ...booking, location }, reqheader)
                console.log(result);
                toast.success(`Booking Successful!!Make payment`)
                setBooking(result.data)

            } catch (error) {
                console.log(`something went wrong`);

            }
        }
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
        getwastrate()
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
            <div className=" m-10  bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
                <h1 className='text-center font-bold text-slate-900 text-2xl p-6'>Book a Waste PickUp </h1>
                <form action="" className='text-left md:text-right sm:text-left  space-y-4 p-4'>
                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className=' text-gray-700 font-semibold mb-1' htmlFor="">Choose Waste Type : </label>

                        <select onChange={(e) => {
                            const wastetype = e.target.value; const selected = wasterate.find(
                                (item) => item.wasteType === wastetype
                            );

                            const rate = selected ? selected.ratePerKg : 0;



                            setBooking({
                                ...booking, wastetype, rate, amount: booking.weight ? booking.weight * rate : 0
                            })
                        }} className=' w-full border rounded p-2'>
                            <option >Select waste type</option>
                            {wasterate.map((item) => (
                                <option >{item.wasteType}</option>
                            ))}

                        </select>
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className='block text-gray-700 font-semibold mb-1' htmlFor="">Address : </label>

                        <textarea onChange={(e) => setBooking({ ...booking, address: e.target.value })} name="" id="" className=' w-full border rounded-lg'></textarea>
                    </div>


                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className="block text-gray-700 font-semibold mb-1">Pickup Date</label>
                        <input onChange={(e) => setBooking({ ...booking, date: e.target.value })} type="date" className="w-full border rounded-lg p-2" />
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className="block text-gray-700 font-semibold mb-1">Weight</label>
                        <div className='flex items-center gap-2'>

                            <input value={booking.weight} onChange={(e) => {
                                const weight = e.target.value;

                                const selected = wasterate.find(
                                    (item) => item.wasteType === booking.wastetype
                                );

                                const rate = selected ? selected.ratePerKg : 0;

                                setBooking({ ...booking, weight, amount: weight * rate });
                            }}
                                placeholder="Weight in kg" className=" border rounded-lg p-2" />
                            =
                            <p className='block text-gray-700 font-semibold mb-1'>Amount to be paid: ₹{booking.amount || 0}</p>
                        </div>
                    </div>


                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className="block text-gray-700 font-semibold mb-1">Time Slot</label>
                        <select onChange={(e) => setBooking({ ...booking, time: e.target.value })} className="w-full border rounded-lg p-2">
                            <option>Select Time Slot</option>
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                        </select>
                    </div>
                    <div className='grid md:grid-cols-3 items-center gap-4'>
                        <label className="block text-gray-700 font-semibold mb-1">Special Instructions</label>
                        <textarea onChange={(e) => setBooking({ ...booking, instructions: e.target.value })}
                            rows="2"
                            className="w-full border rounded-lg p-2"
                            placeholder="Any additional details?"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 items-center ">
                        <label className='block text-gray-700 font-semibold mb-1' htmlFor="">Please choose your location on map : </label>
                        <a className='btn underline text-blue-800 text-center rounded p-1.5 ' onClick={getLocation}>📍 Get Location</a>

                    </div>
                    <div className='text-center '>
                        <button onClick={bookapickup}
                            type="button"
                            className="p-2 bg-indigo-600 text-white py-2 me-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Book Pickup
                        </button>

                        <button
                            onClick={makePayment}
                            type="button"
                            disabled={!booking._id} // disable until booking is done
                            className={`p-2 py-2 rounded-lg transition ${booking._id
                                ? "bg-green-600 text-white hover:bg-indigo-700"
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