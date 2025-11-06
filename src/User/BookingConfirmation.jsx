import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Userheader from './components/Userheader'

function BookingConfirmation() {
  return (
    <>
      <Userheader />
      <div className="">
        <h1 className='font-bold text-center p-3 text-2xl'>Payment Received </h1>
        <div className='flex justify-center items-center'>
          <img className='w-72' src="https://png.pngtree.com/png-clipart/20250530/original/pngtree-green-tick-symbol-approved-png-image_21096884.png" alt="" />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default BookingConfirmation