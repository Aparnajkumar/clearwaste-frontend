import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userbookinghistoryAPI, userprofileupdateAPI } from '../services/allapi'
import Userheader from './components/Userheader'

function Profile() {
    const [profiledetails, setProfiledetails] = useState([])
    const [token, setToken] = useState()

    console.log(profiledetails);

    const userdetails = async () => {
        const token = sessionStorage.getItem("token")
        //create reqheader
        const reqheader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await userbookinghistoryAPI(reqheader)
            console.log(result);
            setProfiledetails(result.data)
        } catch (error) {
            alert(`Something went wrong`)
        }
        console.log(profiledetails);

    }



    const handleupdate = async () => {
        const token = sessionStorage.getItem("token")
        //create reqheader
        const reqheader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await userprofileupdateAPI(profiledetails, reqheader)
            console.log(result);

        } catch (error) {
            alert(`something went wrong`)
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem("token"))
            setToken(sessionStorage.getItem("token")); {
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setProfiledetails({
                ...profiledetails,
                username: user.username,
                userEmail: user.email,
                password: user.password,
                address: user.address
            })
        }
        userdetails()
    }, [])
    return (
        <>
            <Userheader />
            <div className="shadow-2xl rounded md:m-25  p-5  gap-3 ">
                <h2 className="text-2xl font-bold text-center  text-indigo-900 mb-6">Profile</h2>
            
                    <div className=""></div>
                    <div className=''>
                        <div className='flex justify-center items-center  mb-5'>
                            <label htmlFor="" className='me-7'>Name:</label> <input value={profiledetails.username} onChange={(e) => setProfiledetails({ ...profiledetails, username: e.target.value })} className='border  rounded border-blue-300 bg-white w-full' type="text" />

                        </div>
                        <div className='flex mb-5'>
                            <label className='me-8' htmlFor="">Email:</label> <input value={profiledetails.userEmail} onChange={(e) => setProfiledetails({ ...profiledetails, userEmail: e.target.value })} className='border border-blue-300 bg-white w-full ' type="text" />

                        </div>
                        <div className='flex mb-5'>
                            <label htmlFor="" className='me-1'>Password:</label> <input value={profiledetails.password} onChange={(e) => setProfiledetails({ ...profiledetails, password: e.target.value })} className='bg-white border border-blue-300 w-full' type="text" />

                        </div>
                    </div>
                    <div className=""></div>
                {/* <div className='flex gap-1'>
                    <label htmlFor="">Address:</label> <input value={profiledetails.address} onChange={(e) => setProfiledetails({ ...profiledetails, address: e.target.value })} className='bg-white border border-blue-300 w-full' type="text" />

                </div > */}
                <div className='flex justify-center items-center'>
                    <button onClick={handleupdate} type='button' className='w-30 bg-indigo-950 text-white hover:bg-indigo-800 hover:text-white p-2 m-auto rounded'>UPDATE</button>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile