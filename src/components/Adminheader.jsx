import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Adminheader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#347973] shadow-md py-4 px-8 flex flex-wrap items-center justify-between">
      
<Link to="/dashboard">
  <h1 className="text-white text-2xl font-bold tracking-wide">
      Admin Dashboard
    </h1>
  
</Link>

      {/* CENTER - Navigation Links */}
      <div className="flex gap-4">
        <Link
          to="/manageuser"
          className=" text-white  px-3 py-1 rounded-lg hover:bg-[#065F46] hover:text-white transition"
        >
          Users
        </Link>
        <Link
          to="/managebooking"
          className="text-white  px-3 py-1 rounded-lg hover:bg-[#065F46] hover:text-white transition"
        >
          Bookings
        </Link>
        <Link
          to="/managepayment"
          className="text-white  px-3 py-1 rounded-lg hover:bg-[#065F46] hover:text-white transition"
        >
          Payments
        </Link>
      </div>

      {/* RIGHT - Logout Button */}
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-lg transition shadow-sm w-full md:w-auto"
      >
        Logout
      </button>
    </nav>
  );
}

export default Adminheader;
