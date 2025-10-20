import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function BookPickUp() {
  return (
    <>       
    <Header/>
         <div className="bg-gray-50 m-10 text-blue-700 font-medium shadow-2xs">
                <h1 className='text-center text-indigo-950 text-2xl p-6'>Book a Waste PickUp </h1>
                <form action="" className='bg-gray-100 shadow-2xl space-y-4 p-4'>
                    <div>
                        <label htmlFor="">Choose Waste Type : </label>
                        <select className=' w-full border rounded p-2'>
                            <option >Select waste type</option>
                            <option >Plastic</option>
                            <option >Food</option>
                            <option >E-waste</option>
                            <option >Paper</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Address : </label>
                        <textarea name="" id="" className=' w-full border rounded-lg'></textarea>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Pickup Date</label>
                        <input type="date" className="w-full border rounded-lg p-2" />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Time Slot</label>
                        <select className="w-full border rounded-lg p-2">
                            <option>Select Time Slot</option>
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Special Instructions</label>
                        <textarea
                            rows="2"
                            className="w-full border rounded-lg p-2"
                            placeholder="Any additional details?"
                        />
                    </div>
                    <Link to={"/payment"}>
<div className='text-center'>
                            <button
                                type="button"
                                className="p-2 bg-gray-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                            >
                                Proceed to Payment
                            </button>
</div>
                    </Link>

                </form>
            </div>
            <Footer/>
            </>
  )
}

export default BookPickUp