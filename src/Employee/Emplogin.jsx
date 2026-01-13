import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { emploginAPI } from '../services/allapi'


function Emplogin() {
    const navigate = useNavigate()
    const [userdetails,setUserdetails]=useState({
        email:"",
        password:""
    })
    console.log(userdetails);
    

      const handleLogin = async () => {
    const { email, password } = userdetails;
    if (!email || !password) {
      toast.info("Fill the form completely");
      return;
    }

    const result = await emploginAPI({ email, password });
    if (result.status === 200) {
      toast.success("Login successful");
      sessionStorage.setItem("existingemp", JSON.stringify(result.data.existingemp));
      sessionStorage.setItem("token", result.data.token);

      setTimeout(() => {
        navigate("/viewbookings");
      }, 3000);

    } else {
      toast.warning(result.response?.data || "Something went wrong");
    }
    setUserdetails({ email: "", password: "" });
  };

    

useEffect(()=>{

},[])

return (
    <>
        <div className="container-fluid min-h-screen justify-center items-center rounded bg-green-50">
            <div className="grid grid-cols-3 pt-10 ">
                <div className=""></div>
                <div className=" shadow p-10 justify-center text-center rounded-3xl mt-10 bg-white">
                    <h1 className='text-2xl text-center p-3 text-green-950 font-bold'>EMPLOYEE LOGIN</h1>
                    <input value={userdetails.email} onChange={(e)=>setUserdetails({...userdetails,email:e.target.value})} type="text" placeholder='E-mail' className=' w-full rounded mb-3 border border-green-300' /><br />
                    <input value={userdetails.password} onChange={(e)=>setUserdetails({...userdetails,password:e.target.value})}  type="password" placeholder='Password' className=' w-full rounded mb-3 border border-green-300' /><br />
                    <button onClick={handleLogin}  className='bg-green-300 hover:bg-green-500 w-full p-1 rounded border mb-3 border-green-300' >Login</button>
                </div>
                <div className=""></div>
            </div>
        </div>
        
    </>
)
}

export default Emplogin