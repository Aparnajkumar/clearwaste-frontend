import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TrackStatus() {
  return (
    <>
      <Header />
      <div className=" " >
        <h1 className='text-center text-2xl text-blue-800 p-4'>Track Your Booking Status</h1>

        <div className='mb-15 mt-10  bg-cover bg-center flex justify-center  items-center ' style={{ backgroundImage: "url('')" }}>
          <div className=" text-center text-xl border-8 border-blue-100 shadow p-2 bg-blue-200 rounded">
            <h2 className='p-4  font-semibold'>Booking ID: 45565656</h2>
            <p className='p-4 '>Current status : Active</p>
            <p className='p-4'>Expected arrival : 2 P.M</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TrackStatus