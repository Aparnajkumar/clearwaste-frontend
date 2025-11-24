import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <>
      <Header />
      <div className=' pt-10'>
        <div className='m-15 mt-0 p-8 text-center border-indigo bg-[#F4F8FF]  shadow-xl rounded-3xl font-extrabold font-mono'>
          <h1 className='text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-indigo-900 bg-clip-text text-transparent drop-shadow-sm tracking-wide'>ClearWaste</h1>
          <p className='text-2xl text-gray-700 font-medium italic"'>“Smarter Disposal, Cleaner Tomorrow.”</p>
          <div className='md:flex justify-center items-center space-y-5 gap-6 mt-6'>

            <img src="/pexels-julia-m-cameron-6995367.jpg" alt="" className='md: mb-2 w-72 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105' />
            <img src="/pexels-cottonbro-6591427.jpg" alt="" className=' md:mb-2 w-72 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105' />
            <img src="/pexels-steve-850216.jpg" alt="" className='w-72 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105' />
          </div>
          <div className="w-24 md:w-32 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>

        </div>



        <div className=' p-5 bg-sky-50  md:grid grid-cols-2  justify-center items-center '>
          <div className='text-center'>
            <p className='text-2xl text-indigo-900 p-2'>Pay just ₹40/kg for garbbage</p>
            <p className='text-xl'>“ Choosing Us makes Waste Management Clear & Simple.”</p>
            <Link to={"/auth"}>      <button type='button' className='mt-5  bg-sky-600 text-white border border-blue-700 hover:bg-blue-900 hover:text-white p-3 rounded'>Book PickUp</button></Link>
          </div>
          <div className='flex justify-center'>    <img className='w-80 md:w-[400px]  hover:scale-105 transition-transform duration-500' src="/img2.webp" alt="" /></div>
        </div>
      </div>




      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-indigo-900 mb-8">Why Choose ClearWaste?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-blue-50 ">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-lg font-semibold text-gray-800">Eco-Friendly Disposal</h3>
            <p className="text-gray-600 mt-2">We ensure waste is processed responsibly to reduce environmental impact.</p>
          </div>
          <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-blue-50 ">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold text-gray-800">Fast Pickup Service</h3>
            <p className="text-gray-600 mt-2">Book a pickup and get service within 24 hours in your area.</p>
          </div>
          <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-blue-50">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-800">Track Your Waste</h3>
            <p className="text-gray-600 mt-2">Monitor your booking status and pickup history in real-time.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 shadow py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-indigo-900 mb-8">Our Impact So Far</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">12,450 Kg</h3>
            <p className="text-gray-700">Waste Recycled</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">3,200+</h3>
            <p className="text-gray-700">Pickups Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-700">Customer Satisfaction</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home