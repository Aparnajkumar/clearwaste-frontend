import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Userheader() {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    navigate("/")
  }

  return (
    <>
      <div className="bg-indigo-300 grid grid-cols-2 text-white md:font-bold p-5 gap-3">
        <div className=''>
          {/* <img className="w-33 "src="public/logo.png" alt="" /> */}
          <h1 className='font-serif md:text-3xl'><span className='text-indigo-900'>Clear</span>Waste</h1>
        </div>
        <div className='md:grid grid-cols-2  ms-auto'>
          <Link to={"/userhome"}> <div className='border p-2 rounded-2xl border-amber-100 bg-indigo-200 text-green-950 me-5'>Home</div></Link>


          {/* <Link to={"/contact"}>      <div className='hover:text-gray-700'>Contact Us</div></Link> */}
          {/* <Link to={"/auth"}>      <div className='hover:text-gray-700'>Login</div></Link> */}
          {/* <Link to={"/dashboard"}>          <div className="">Admin</div></Link> */}
          <button onClick={handleLogout} className='border p-2 rounded-2xl border-amber-100 bg-indigo-200 text-green-950' >Logout</button>
        </div>
      </div>
    </>
  )
}

export default Userheader