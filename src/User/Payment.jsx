import React from 'react'
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <>
    <Header/>
      <div className="">
        <h1 className='text-2xl text-center p-3 text-blue-800 font-semibold'>Make payment</h1>
      </div>
      <div className="p-2">
        Amount to be paid : ₹500
      </div>
      <div className="shadow flex  justify-center items-center p-9 m-10">
        <h2>Select payment mode : </h2>
        <div className='p-1'><input type="radio" /><label htmlFor="">Debit card/Credit Card</label></div>
        <div className='p-1'><input type="radio" /><label htmlFor="">UPI Payment</label></div>
        <div className='p-1'>
          <input type="radio" /><label htmlFor="">NEFT/RTGS</label>

        </div>
      </div>
      <div className='text-center'>
        <Link to={"/confirmation"}>
          <button type="button" className='bg-blue-900 rounded text-white p-2'>Pay now</button>

        </Link>
      </div>
      <Footer/>
    </>
  )
}

export default Payment