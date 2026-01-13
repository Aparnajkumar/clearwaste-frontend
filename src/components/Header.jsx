import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className=" bg-gradient-to-b from-green-800 to-green-200 text-white shadow-lg p-3 flex justify-between relative z-50">
  <Link to="/">
    <h1 className="text-3xl font-bold tracking-wide">
      <span className="text-white">Clear</span>
      <span className="text-[#1E293B]">Waste</span>
    </h1>
  </Link>
  <div className="flex space-x-6 text-white font-medium">
    <Link className="hover:text-yellow-300" to={"/about"}>Our Story</Link>
    <Link className="hover:text-yellow-300" to={"/contact"}>Contact</Link>
    <Link className="hover:text-yellow-300" to={"/auth"}>Login</Link>
  </div>
</div>

    </>
  )
}

export default Header
