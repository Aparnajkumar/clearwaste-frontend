import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="bg-indigo-300 grid grid-cols-2 text-white md:font-bold p-5 gap-3">
        <div className=''>
          {/* <img className="w-33 "src="public/logo.png" alt="" /> */}
          <Link to={"/"}>          <h1 className=' md:text-3xl'><span className='text-indigo-900'>Clear</span>Waste</h1></Link>
        </div>
        <div className='flex md:space-x-10 space-x-4  ms-auto'>
          <Link to={"/about"}>
            <div className='hover:text-gray-700'>Our Story</div>
          </Link>
          {/* <Link to={"/auth"}> <div className='hover:text-gray-700'>Book</div></Link> */}
          <Link to={"/contact"}>      <div className='hover:text-gray-700'>Contact Us</div></Link>
          <Link to={"/auth"}>      <div className='hover:text-gray-700'>Login</div></Link>
          {/* <Link to={"/dashboard"}>          <div className="">Admin</div></Link> */}
        </div>
      </div>
    </>
  )
}

export default Header