import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="bg-indigo-300 grid grid-cols-2 text-white md:font-bold p-5 gap-3">
        <div className=''>
          {/* <img className="w-33 "src="public/logo.png" alt="" /> */}
          <Link to={"/"}>          <h1 className='font-serif md:text-3xl'>ClearWaste</h1></Link>
        </div>
        <div className='md:grid grid-cols-4  justify-between'>
          <Link to={"/about"}>
            <div className='hover:text-gray-700'>Our Story</div>
          </Link>
          <Link to={"/auth"}> <div className='hover:text-gray-700'>Book</div></Link>
          <Link to={"/contact"}>      <div className='hover:text-gray-700'>Contact Us</div></Link>
          <Link to={"/auth"}>      <div className='hover:text-gray-700'>Login</div></Link>
          {/* <Link to={"/dashboard"}>          <div className="">Admin</div></Link> */}
        </div>
      </div>
    </>
  )
}

export default Header