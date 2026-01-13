import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <>
      <Header />
      <div className=" min-h-screen  ">
        {/* <div className="m-5 p-8 text-center bg-sky-50 shadow-2xl rounded-3xl ">
          <h1 className="text-4xl md:text-5xl font-extrabold  bg-[#06D6A0]  bg-clip-text text-transparent drop-shadow-md tracking-wide">
            ClearWaste
          </h1>
          <p className="text-xl text-gray-700 mt-2 italic">
            “Smarter Disposal, Cleaner Tomorrow.”
          </p>

          <div className="md:flex justify-center items-center gap-6 mt-6 space-y-5 md:space-y-0">
            <img src="/pexels-julia-m-cameron-6995367.jpg" alt="" className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/pexels-cottonbro-6591427.jpg" alt="" className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src="/pexels-steve-850216.jpg" alt="" className="w-72 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" />
          </div>

          <div className="w-28 md:w-40 h-1.5 bg-green-300 mx-auto mt-5 rounded-full"></div>
        </div> */}

        <div className="relative w-full h-[85vh] flex items-center justify-center imgzoom overflow-hidden">
          <img src="https://images.squarespace-cdn.com/content/v1/63bd810bc84e6c4c5f396e08/1680648459218-CRKMKN8G2K7R40LXA460/%2374+Waste+Management+-+HEAL+THE+PLANET.jpg" className="absolute inset-0 w-full h-full object-cover " alt="Waste Management" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg herotext">
              Clear Waste, <span className="text-[#06D6A0]">Clean Earth</span> 

            </h1> 

            <p className="text-white text-lg mt-4 font-medium drop-shadow-md">
              Join us in building a sustainable future by disposing waste responsibly.
            </p>
            {/* <Link to={"/about"}>
              <button className="mt-6 bg-[#06D6A0] hover:bg-[#05bf8f] px-6 py-3 text-lg font-semibold rounded-lg text-white transition">
                What we do...
              </button>
            </Link> */}
          </div>
        </div>





        <div className='p-6 bg-gradient-to-b from-white to-green-200 shadow-xl rounded-3xl m-5 md:grid grid-cols-2 items-center mt-10'>
          <div className='text-center'>
            <p className='text-2xl text-slate-600 font-bold'>Pay just ₹40/kg for garbage</p>
            <p className='text-lg text-gray-700 mt-2'>“Choosing Us makes Waste Management Clear & Simple.”</p>
            <Link to={"/auth"}>
              <button className='mt-5 bg-[#38BDF8] hover:bg-[#0284C7] text-white px-6 py-3 rounded-xl font-semibold transition'>
                Book PickUp
              </button>
            </Link>
          </div>
          <div className='flex justify-center'>
            <img className='w-80 md:w-[400px] hover:scale-105 transition-transform duration-500' src="/img2.webp" alt="" />
          </div>
        </div>






        <div className=" py-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#1E293B] mb-8">Why Choose ClearWaste?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-green-200 ">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-lg font-semibold text-gray-800">Eco-Friendly Disposal</h3>
              <p className="text-gray-600 mt-2">We ensure waste is processed responsibly to reduce environmental impact.</p>
            </div>
            <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-green-200 ">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold text-gray-800">Fast Pickup Service</h3>
              <p className="text-gray-600 mt-2">Book a pickup and get service within 24 hours in your area.</p>
            </div>
            <div className="p-8 border border-blue-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-green-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-800">Track Your Waste</h3>
              <p className="text-gray-600 mt-2">Monitor your booking status and pickup history in real-time.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-white to-green-200 shadow-lg rounded-3xl py-10 px-6 m-5">
          <h2 className="text-2xl font-bold text-center text-[#1E293B]">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
            <div>
              <h3 className="text-3xl font-bold text-[#06D6A0]">12,450 Kg</h3>
              <p className="text-gray-700">Waste Recycled</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#06D6A0]">3,200+</h3>
              <p className="text-gray-700">Pickups Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#06D6A0]">98%</h3>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home