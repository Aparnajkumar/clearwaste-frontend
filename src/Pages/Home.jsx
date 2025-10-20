import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <>
      <Header />
<div className='bg-sky-50 pt-10'>
         <div className='m-15 mt-0 p-8 text-center border-indigo bg-[#F4F8FF]  shadow-2xl  font-extrabold font-mono'>
          <h1 className='text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm tracking-wide'>ClearWaste</h1>
          <p className='text-2xl text-gray-700 font-medium italic"'>“Smarter Disposal, Cleaner Tomorrow.”</p>
        <div className="w-24 md:w-32 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
  
        </div>



      <div className=' p-5 bg-sky-50  grid grid-cols-2  justify-center items-center '>
        <div className='text-center'>
          <p className='text-xl'>“ Choosing Us makes Waste Management Clear & Simple.”</p>
          <Link to={"/bookpickup"}>      <button type='button' className='mt-5  bg-sky-600 text-white border border-blue-700 hover:bg-blue-900 hover:text-white p-3 rounded'>Book PickUp</button></Link>
        </div>
        <div>    <img className='w-80 md:w-[400px] hover:scale-105 transition-transform duration-500' src="public/img2.webp" alt="" /></div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Home