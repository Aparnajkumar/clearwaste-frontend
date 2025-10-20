import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Header />
      <div className="">
        <h1 className=' text-center p-4 text-indigo-900 font-bold text-2xl'>CONTACT US</h1>
        <div className='grid md:grid-cols-[1fr_2fr] justify-center items-center '>
          <div className='justify-center items-center'>

            <img className='' src="https://media.istockphoto.com/id/1311955670/vector/overflowing-yellow-garbage-bin-with-household-waste-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=b-R3acl0IbC6CB_2Z_C9pRxKm2tHYll0OwQTwkGaeE4=" alt="" />
          </div>

          <div className="shadow-2xl m-5 p-8 ">
            <p className='text-center p-2 text-xl text-indigo-700 mb-5 font-semibold'>Type your Message here</p>
            <form action="" className=''>
              <input className='w-full border mb-5' type="text" placeholder='Name' />
              <input className='w-full border mb-5' type="text" placeholder='Phone' />
              <input className='border w-full mb-5' type="email" placeholder='E-mail Id' />
              <textarea name="" id="" className='w-full border rounded mb-5' placeholder='Type your Message'></textarea>
              <div className='flex justify-center items-center'>
                <button className='p-2 bg-indigo-800 rounded text-white hover:bg-blue-500'>Send Message</button>

              </div></form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact