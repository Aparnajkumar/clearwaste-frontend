import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import { getalluserAPI, getalluserbookingsAPI, getallempAPI, deleteempAPI, getWasteRatesAPI, addWasteRateAPI, updateWasteRateAPI, getallmessageAPI, deletemessageAPI } from '../services/allapi'
import { FaClipboardCheck, FaFirstOrderAlt, FaUser, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


function Dashboard() {
  const [noofusers, setNoofusers] = useState("")
  const [noofbookings, setNoofbookings] = useState("")
  const [chartData, setChartData] = useState([]);
  const [wastetype, setWasteType] = useState('')
  const [rate, setRate] = useState('')
  const [wasteRates, setWasteRates] = useState([])
  console.log(rate);

  const [token, setToken] = useState("")
  const [booking, setBookings] = useState([])
  const [empdetails, setEmpdetails] = useState([])
  const [deleteemp, setDeleteemp] = useState("")
  const [messages, setMessages] = useState([]);

  const getmessage = async () => {
    const result = await getallmessageAPI()
    console.log(result);
    setMessages(result.data)
  }

  const handleDeleteMessage = async (id) => {
    const result = await deletemessageAPI(id)
    console.log(result);
    getmessage()
  }

  const getdetails = async () => {
    const token = sessionStorage.getItem("token");

    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getalluserAPI(reqheader)
      setNoofusers(result.data.length)

      const result2 = await getalluserbookingsAPI(reqheader)
      console.log(result2);
      const recentData = result2.data
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5)

      setBookings(recentData)
      setNoofbookings(result2.data.length)

      const data = [{
        name: "",
        Users: result.data.length,
        Bookings: result2.data.length
      }]

      setChartData(data);

      // const payment = bookings
      //   .filter((b) => b.pstatus === "Payed")
      //   .reduce((total, b) => total + (b.amount || 0) )
      // setPayment(payment)

    } catch (error) {
      alert(`something went wrong`)
    }
  }

  const getemp = async (token) => {
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getallempAPI(reqheader)
    console.log(result);
    setEmpdetails(result.data)

  }

  const handleDelete = async (id) => {
    const result = await deleteempAPI(id)
    console.log(result);
    setDeleteemp(result)

  }

  const handleAddRate = async (token) => {
    const reqheader = {
      "Authorization": `Bearer ${token}`
    }
    if (!wastetype || !rate) {
      alert("Please fill all details")
      return
    }
    await addWasteRateAPI({ wastetype, rate }, reqheader)
    fetchRates()
    setWasteType('')
    setRate('')
  }




  const fetchRates = async () => {
    const response = await getWasteRatesAPI()
    setWasteRates(response.data)
  }
  console.log(wasteRates);


  const handleRateChange = (newRate) => {
    console.log(newRate);
    setRate(newRate)

  };

  const updateRate = async (id, rate) => {
    console.log(id);

    const reqBody = { rate }
    console.log(reqBody);



    const response = await updateWasteRateAPI(id, reqBody);
    console.log(response)
    if (response.status === 200) {
      console.log("Rate updated");
      fetchRates();
    } else {
      console.log("Error updating rate");
    }
  };




  useEffect(() => {
    getmessage()
  }, [deleteemp])


  useEffect(() => {
    getdetails(token)
    getemp(token)
    fetchRates()
  }, [])
  return (
    <>
      <Adminheader />

      <div className='min-h-screen bg-[#f5f8f4] p-8 font-poppins'>
        <div className='grid md:grid-cols-4 gap-4'>
          <div className="flex flex-col gap-12 mt-3">

            <div className="w-full bg-white shadow-md hover:shadow-xl transition-all p-2 rounded-xl flex flex-col items-center">
              <div className="text-green-800 text-4xl mb-1"><FaUsers /></div>

              <h3 className="text-xl font-bold text-gray-700">Total Users</h3>
              <p className="text-2xl font-semibold mt-1">{noofusers}+</p>
            </div>

            <div className="w-full bg-white shadow-md hover:shadow-xl transition-all p-6 rounded-xl flex flex-col items-center">
              <div className="text-green-800 text-4xl mb-2"><FaClipboardCheck /></div>

              <h3 className="text-xl font-bold text-green-800">Total bookings</h3>
              <p className="text-2xl font-extrabold">{noofbookings}+</p>
            </div>





            {/* <div className="bg-white shadow-lg p-4 rounded-lg text-center">
              <h3 className="text-xl font-bold text-sky-800">Completed Payments</h3>
              <p className="text-2xl font-extrabold">₹{payment}</p>
            </div> */}
          </div>
          <div className='col-span-2 bg-white shadow-md rounded-xl p-2 flex items-center' style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Users" fill="#316d38" />
                <Bar dataKey="Bookings" fill="#6aa983" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded shadow p-2">
            {/* <h2 className='text-xl text-green-800'>Manage waste rate</h2> */}
            <div className="d-flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Waste Type"
                value={wastetype}
                onChange={(e) => setWasteType(e.target.value)}
                className="form-control border border-gray-600 rounded"
              />
              <input 
                type="number"
                placeholder="Rate per kg"
                
                onChange={(e) => setRate(e.target.value)}
                className="form-control form-control border border-gray-600 rounded"
              />
              <button className="ms-3 bg-green-700 text-white p-1 rounded" onClick={handleAddRate}>Add</button>
            </div>


            <table className='w-full  p-2'>
              <thead className="bg-[#eff5ed]   text-center">

                <tr>
                  <th className=' p-2'>Waste Type</th>
                  <th className=' p-2'>Rate per kg</th>
                  <th className=' p-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                {wasteRates.map((item) => (
                  <tr key={item._id} className="text-center">
                    <td className='p-1'>{item.wasteType}</td>
                    <td className='p-1'>
                      <input
                        type="number"
                        defaultValue={item.ratePerKg}
                        onChange={(e) => handleRateChange(e.target.value)}
                        className="border p-2 rounded w-24"
                      />
                    </td>
                    <td className='p-2'>
                      <button
                        onClick={() => updateRate(item._id, rate)}
                        className="bg-green-800 hover:bg-green-700 text-white px-4 py-1 rounded"
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>


        </div>


<div className="bg-white shadow-lg rounded-2xl p-8 mt-8 mb-10 border-l-4 border-[#06D6A0]">

  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
      👷 Employees
    </h2>

<Link to={"/empreg"}>
      <button className="px-5 py-2 bg-green-800 text-white rounded-lg shadow hover:bg-[#059a75] transition">
        Register
      </button>
</Link>
  </div>

  {/* Employee Cards Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {empdetails?.map((item) => (
      <div
        key={item._id}
        className="shadow-md bg-slate-50 rounded-xl p-5 border border-slate-200 hover:shadow-xl transition"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-slate-800">{item.empname}</h3>

          <button
            onClick={() => handleDelete(item._id)}
            className="px-3 py-1 bg-red-800 text-white rounded-md hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>

        <p className="text-sm text-slate-600 mt-2">{item.email}</p>

        <div className="mt-3 space-y-1 text-slate-700">
          <p>📞 <span className="font-medium">{item.phone}</span></p>
          <p>🔑 <span className="font-medium">{item.password}</span></p>
        </div>
      </div>
    ))}
  </div>
</div>




        <div className="bg-white overflow-x-auto p-6 rounded-xl shadow-lg mt-8">
          <h2 className="text-xl font-bold mb-3 text-green-800">📬 Contact Messages</h2>

          <table className="w-full shadow-md rounded-lg overflow-hidden mt-3 bg-white">
            <thead className="bg-[#eff5ed] text-center">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Message</th>
                <th className="p-2">Date</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-gray-600">No messages yet</td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-[#f0faf5]">
                    <td className="p-2">{msg.name}</td>
                    <td className="p-2">{msg.email}</td>
                    <td className="p-2">{msg.phone}</td>
                    <td className="p-2 max-w-xs">{msg.text}</td>
                    <td className="p-2">{msg.date?.substring(0, 10)}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDeleteMessage(msg._id)}
                        className="bg-red-800 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>



        {/* <div id='#bookings' className="bg-white shadow-lg p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-700 mb-3">Recent Bookings</h3>
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-green-300">
            <tr>
              <th className="border border-gray-300 p-2">Booking ID</th>
              <th className="border border-gray-300 p-2">User</th>
              <th className="border border-gray-300 p-2">Waste Type</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Amount</th>
            </tr>
          </thead>
          <tbody>

            {booking.map((item) => (
              <tr>
                <td className="border border-gray-300 p-2">{item._id}</td>
                <td className="border border-gray-300 p-2">{item.username}</td>
                <td className="border border-gray-300 p-2">{item.wastetype}</td>
                <td className="border border-gray-300 p-2 text-yellow-600">{item.status}</td>
                <td className="border border-gray-300 p-2">₹{item.amount}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div> */}


      </div>

      {/* modal */}

      <div>
        <dialog id="dialog" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></div>

          <div tabIndex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 id="dialog-title" className="text-base font-semibold text-gray-900">Edit Employee details</h3>
                    <div className="mt-2 space-y-5">
                      <input value={empdetails.empname} onChange={(e) => setEmpdetails({ ...empdetails, empname: e.target.value })} placeholder='Name' classNameName='border-2 border-slate-700 w-full' /><br />
                      <input value={empdetails.email} onChange={(e) => setEmpdetails({ ...empdetails, email: e.target.value })} type="text" placeholder='E-mail' classNameName='border-2 border-slate-700 w-full' /><br />
                      <input value={empdetails.password} onChange={(e) => setEmpdetails({ ...empdetails, password: e.target.value })} type="text" placeholder='Password' classNameName='border-2 border-slate-700 w-full' /><br />
                      <input value={empdetails.phone} onChange={(e) => setEmpdetails({ ...empdetails, phone: e.target.value })} type="text" placeholder='Phone' classNameName='border-2 border-slate-700 w-full' /><br />

                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" command="close" commandfor="dialog" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Update</button>

              </div>
            </div>
          </div>
        </dialog>
      </div>



    </>
  )
}

export default Dashboard

