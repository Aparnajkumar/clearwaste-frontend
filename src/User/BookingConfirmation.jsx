import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function BookingConfirmation() {
  return (
    <>
      <Header />
      <div className="">
        <h1 className='font-bold text-center p-3 text-2xl'>Booking confirmed </h1>
        <div className='flex justify-center items-center'>
          <img className='w-72' src="https://png.pngtree.com/png-clipart/20250530/original/pngtree-green-tick-symbol-approved-png-image_21096884.png" alt="" />

        </div>
        <div className="flex flex-col justify-center items-center border-4 md:me-29 md:ms-29">
          <strong>Booking ID : 4656565</strong>
          <strong>Date : 5/5/2025</strong>
          <strong></strong>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookingConfirmation