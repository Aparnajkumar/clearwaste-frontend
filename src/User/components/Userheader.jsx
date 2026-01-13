import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Userheader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("existingUser");
    navigate("/");
  };

  return (
    <div className="bg-[#06D6A0] flex justify-between items-center px-6 py-4 shadow-md">
      
      {/* Logo / Brand */}
      <h1 className="text-3xl font-bold tracking-wide">
        <span className="text-white">Clear</span>
        <span className="text-[#1E293B]">Waste</span>
      </h1>

      {/* Navigation Buttons */}
      <div className="flex space-x-5">
        <Link
          to="/userhome"
          className="bg-white text-[#065F46] px-4 py-2 rounded-full font-medium hover:bg-[#065F46] hover:text-white transition"
        >
          Home
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Userheader;
