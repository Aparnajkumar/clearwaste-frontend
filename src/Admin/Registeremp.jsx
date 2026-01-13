import React, { useState ,useEffect} from 'react'
import Adminheader from '../components/Adminheader'
import { empregisterAPI } from '../services/allapi'

function Registeremp() {

  const [empdetails, setEmpdetails] = useState({
    empname: "",
    phone: "",
    email: "",
    password: ""
  })
  console.log(empdetails);
  

  const register = async () => {
    const { empname, password, phone, email } = empdetails
    console.log(empname, password, phone, email);

try
    
    {  const result = await empregisterAPI(empdetails)
    console.log(result);

    setEmpdetails({empname: "",
        phone: "",
        email: "",
        password: ""}
)
  }
  catch(error){
    console.log("somthing went wrong");
    
  }


  }
  useEffect(() => {

},[empdetails])

return (
  <>
    <Adminheader />
    <div className="">

      <div className="grid md:grid-cols-3  justify-center items-center ">
        <div className="col-md-10"></div>
        <div className='col-md-6 space-y-5 shadow mt-10 text-center p-10 bg-green-100 rounded-3xl'>
          <h2 className='text-center mt-5 text-xl '>REGISTER EMPLOYEE</h2>

          <input value={empdetails.empname} onChange={(e) => setEmpdetails({ ...empdetails, empname: e.target.value })}  placeholder='Name' className='border border-slate-400 rounded w-full' /><br />
          <input value={empdetails.email} onChange={(e) => setEmpdetails({ ...empdetails, email: e.target.value })} type="text" placeholder='E-mail' className='border border-slate-400 rounded w-full' /><br />
          <input value={empdetails.password} onChange={(e) => setEmpdetails({ ...empdetails, password: e.target.value })} type="text" placeholder='Password' className='border border-slate-400 rounded w-full' /><br />
          <input value={empdetails.phone} onChange={(e) => setEmpdetails({ ...empdetails, phone: e.target.value })} type="text" placeholder='Phone' className='border border-slate-400 rounded w-full' /><br />
          <button onClick={register} className='bg-slate-700 p-2 rounded text-white'>Register</button>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  </>
)
}

export default Registeremp