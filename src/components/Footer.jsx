import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-[#23886d] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* BRAND INFO */}
        <div>
          <h1 className="text-2xl font-bold">ClearWaste</h1>
          <p className="mt-3 text-gray-200">
            Helping you manage your waste effectively. Our mission is to keep our Mother Earth clean and sustainable.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Company</h2>
          <ul className="space-y-1">
            <li><Link className="hover:text-yellow-300" to="/">Home</Link></li>
            <li><Link className="hover:text-yellow-300" to="/about">About Us</Link></li>
            <li className="hover:text-yellow-300 cursor-default">Our Team</li>
          </ul>
        </div>

        {/* APP DOWNLOAD */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Get the App</h2>
          <div className="flex justify-center md:justify-start space-x-3 mt-2">
            <img className="w-28 hover:scale-105 transition" src="https://yowasteapp.com/wp-content/uploads/elementor/thumbs/A47B9C575CC9ABD2A884DBD85D2414B0BB96-2-pi7ude4zsfpapetpcyni2ewqlq43ciz0xevm2oipv8.png" alt="Play Store" />
            <img className="w-28 hover:scale-105 transition" src="https://yowasteapp.com/wp-content/uploads/elementor/thumbs/App-Store-Transparent-border-2-pi7titfzhfuj218iw8vdgmnyzit9yylce2y13nuq9g.png" alt="App Store" />


          </div>        <p className=" text-amber-200 mt-3">
  For staff access? <Link to="/emplogin" className="underline">Employee Login</Link>
</p>
        </div>

        {/* POLICIES */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Policies</h2>
          <ul className="space-y-1">
            <li className="hover:text-yellow-300 cursor-default">Terms & Conditions</li>
            <li className="hover:text-yellow-300 cursor-default">Privacy Policy</li>
            <li className="hover:text-yellow-300 cursor-default">Refund / Cancellation</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-300 mt-8 border-t border-gray-100 pt-4 text-sm">
        © {new Date().getFullYear()} ClearWaste. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
