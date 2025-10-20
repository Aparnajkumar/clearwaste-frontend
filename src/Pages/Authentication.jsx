import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allapi'
import { toast } from 'react-toastify'

function Authentication() {
  const [register, SetRegister] = useState(false)
  const navigate = useNavigate()
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userdetails);


  const handleLogin = async () => {
    const { email, password } = userdetails
    if (!email || !password) {
      toast.info(`Fill the form completely`)
    } else {
      const result = await loginAPI({ email, password })
      //  console.log(result);

      setUserdetails({
        email: "",
        password: ""

      })
      if (result.status == 200) {

        toast.success(`Login successfull`)
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)

        setUserdetails({
          email: "",
          password: ""
        })
        //clearwasteadmin@gmail.com
        if (result.data.existingUser.email == "clearwasteadmin@gmail.com") {
          setTimeout(() => {
            navigate("/dashboard")
          }, 3000)
        } else {
          setTimeout(() => {
            navigate("/userhome")
          }, 3000)
        }
      } else if (result.status == 403 || result.status == 406) {
        toast.warning(result.response.data)
        setUserdetails({
          email: "",
          password: ""
        })
      } else {
        toast.error(`Something went wrong`)
        setUserdetails({
          email: "",
          password: ""
        })
      }
    }
  }


  const handleRegister = async () => {
    const { username, email, password } = userdetails
    if (!email || !username || !password) {
      toast.info(`Fill the form completely`)
    } else {
      const result = await registerAPI(userdetails)

      // console.log(result);
      setUserdetails({
        username: "",
        email: "",
        password: ""
      })
      if (result.status == 200) {
        toast.success(`Registered successfully`)
        SetRegister(false)
        setUserdetails({
          username: "",
          email: "",
          password: ""
        })
      } else if (result.status == 406) {
        toast.warning(result.response.data)
        setUserdetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error(`Something went wrong`)
        setUserdetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }

  return (
    <>
      <div className="w-full bg-cover min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1193475328/vector/people-cleaaning-up-the-beach-and-removing-trash.jpg?s=612x612&w=0&k=20&c=tDi-a-TbIBjYgu1xWK72lK0Vk6nqX5gO7nyJrQ0k0a0=")` }}>

        {register ? <div className=" flex flex-col justify-center items-center  ">
          <div className="shadow-lg border-2 rounded-2xl m-10 mt-20 p-5 bg-sky-100/55 text-indigo-950 ">
            <h1 className='text-center text-2xl font-bold mb-5 text-indigo-900'>Register</h1>

            <input value={userdetails.username} onChange={(e) => setUserdetails({ ...userdetails, username: e.target.value })} className='w-full border mb-5' type="text" placeholder='Name' />
            <input value={userdetails.email} onChange={(e) => setUserdetails({ ...userdetails, email: e.target.value })} className='border w-full mb-5' type="email" placeholder='E-mail Id' />
            <input value={userdetails.password} onChange={(e) => setUserdetails({ ...userdetails, password: e.target.value })} className='w-full border mb-5' type="text" placeholder='Password' />
            <div className='text-center'>
              <button type="button" onClick={handleRegister} className='bg-blue-900 p-3 rounded text-center text-white'>Register</button>

            </div>
            < p className='text-center font-extrabold'>Already a user ? <span className='text-red-900'>
              <button onClick={() => SetRegister(false)} >Login</button></span></p>
          </div>
        </div>


          :

          <div className=" flex flex-col justify-center items-center  ">
            <div className="shadow-lg border-2 rounded-2xl m-10 mt-20 p-5 bg-sky-100/40 text-indigo-950 ">
              <h1 className='text-center text-2xl font-bold mb-5 text-indigo-900'>Login</h1>

              <input value={userdetails.email} onChange={(e) => setUserdetails({ ...userdetails, email: e.target.value })} className='border w-full mb-5' type="email" placeholder='E-mail Id' />
              <input value={userdetails.password} onChange={(e) => setUserdetails({ ...userdetails, password: e.target.value })} className='w-full border mb-5' type="text" placeholder='Password' />
              <div className='text-center'>

                <button onClick={handleLogin} type="button" className='bg-blue-900 p-3 rounded text-center text-white'>Login</button>


              </div>
              < p className='text-center font-extrabold'>New User ? <span className='text-red-900'>
                <button onClick={() => SetRegister(true)}>Register</button></span></p>
            </div>
          </div>}
      </div>
    </>
  )
}

export default Authentication