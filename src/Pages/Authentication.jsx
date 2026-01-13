import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleloginAPI, loginAPI, registerAPI } from "../services/allapi";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import{jwtDecode} from "jwt-decode"

function Authentication() {
  const [register, SetRegister] = useState(false);
  const navigate = useNavigate();
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const { email, password } = userdetails;
    if (!email || !password) {
      toast.info("Fill the form completely");
      return;
    }

    const result = await loginAPI({ email, password });
    if (result.status === 200) {
      toast.success("Login successful");
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
      sessionStorage.setItem("token", result.data.token);

      setTimeout(() => {
        navigate(result.data.existingUser.email === "clearwasteadmin@gmail.com" ? "/dashboard" : "/userhome");
      }, 1500);
    } else {
      toast.warning(result.response?.data || "Something went wrong");
    }
    setUserdetails({ email: "", password: "" });
  };

  const handleRegister = async () => {
    const { username, email, password } = userdetails;
    if (!username || !email || !password) {
      toast.info("Fill the form completely");
      return;
    }

    const result = await registerAPI(userdetails);
    if (result.status === 200) {
      toast.success("Registered successfully");
      SetRegister(false);
    } else {
      toast.warning(result.response?.data || "Something went wrong");
    }
    setUserdetails({ username: "", email: "", password: "" });
  };

  const handleGoogleLogin =async (credentialResponse) => {
    const details = jwtDecode(credentialResponse.credential)
    console.log(details);

    const result=await googleloginAPI({username:details.name,
      email:details.email,
      password:"googlepswd",
      profile:details.picture
      })
      console.log(result);
    
         if (result.status == 200) {
        toast.success(`Login successfull`)
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)

          setTimeout(() => {
            navigate("/userhome")
          }, 3000)
    }

  }


  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center flex justify-center items-center p-4"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1193475328/vector/people-cleaaning-up-the-beach-and-removing-trash.jpg?s=612x612&w=0&k=20&c=tDi-a-TbIBjYgu1xWK72lK0Vk6nqX5gO7nyJrQ0k0a0=')`,
        }}
      >
        {/* Overlay */}
        <div className="w-full h-full bg-black/30 absolute top-0 left-0"></div>

        <div className="relative bg-white/85 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-[#1E293B] mb-6">
            {register ? "Register" : "Login"}
          </h1>

          {register && (
            <input
              value={userdetails.username}
              onChange={(e) => setUserdetails({ ...userdetails, username: e.target.value })}
              className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
              type="text"
              placeholder="Name"
            />
          )}

          <input
            value={userdetails.email}
            onChange={(e) => setUserdetails({ ...userdetails, email: e.target.value })}
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            type="email"
            placeholder="E-mail"
          />

          <input
            value={userdetails.password}
            onChange={(e) => setUserdetails({ ...userdetails, password: e.target.value })}
            className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            type="password"
            placeholder="Password"
          />


          <button
            onClick={register ? handleRegister : handleLogin}
            className="w-full bg-[#06D6A0] text-white font-semibold py-2 rounded-lg hover:scale-105 active:scale-95 transition-all"
          >
            {register ? "Register" : "Login"}
          </button>

          {!register && <div className="text-center">
                <p className=''>------------or------------</p>
                <div className='my-3 flex justify-center w-full '>
                  <GoogleLogin size="large"

                    onSuccess={credentialResponse => {
                      // console.log(credentialResponse);
                      handleGoogleLogin(credentialResponse)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              </div>}

          <p className="text-center mt-4 font-medium text-slate-700">
            {register ? "Already a user?" : "New user?"}{" "}
            <button
              className="text-[#1E293B] font-bold hover:text-[#06D6A0]"
              onClick={() => SetRegister(!register)}
            >
              {register ? "Login" : "Register"}
            </button>
          </p>


        </div>

        
      </div>
    </>
  );
}

export default Authentication;
