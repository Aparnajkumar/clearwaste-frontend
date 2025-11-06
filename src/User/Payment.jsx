import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Payment() {
  return (
    <>
    {/* <Header/>
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
      <Footer/> */}


            <Userheader />
            <div className="">
              <h1 className='font-bold text-red-600 text-center p-3 text-2xl'>Sorry!!! Transaction failed </h1>
              <div className='flex justify-center items-center'>
                <img className='w-72' src="https://media.licdn.com/dms/image/v2/C5112AQGiR7AdalYNjg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1582176281444?e=2147483647&v=beta&t=KbpvWM0SaQqnLiMtyKfvGLj9Ta1YugKhz9Y-LN1uS2A" alt="" />
      
              </div>

            </div>
            <Footer />
    </>
  )
}

export default Payment