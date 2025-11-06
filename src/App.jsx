
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Authentication from './Pages/Authentication'
import Booking from './User/Booking'
import BookPickUp from './User/BookPickUp'
import BookingConfirmation from './User/BookingConfirmation'
import Payment from './User/Payment'
import TrackStatus from './User/TrackStatus'
import UserHome from './User/UserHome'
import Dashboard from './Admin/Dashboard'
import Manageuser from './Admin/Manageuser'
import Managepayment from './Admin/Managepayment'
import Managebooking from './Admin/Managebooking'
import Managepickup from './Admin/Managepickup'
import { ToastContainer } from 'react-toastify'
import Profile from './User/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         {/* <Route path='/login' element={<Authentication register/>} />
        <Route path='/register' element={<Authentication />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/bookpickup" element={<BookPickUp />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/status/:id" element={<TrackStatus />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageuser" element={<Manageuser />} />
        <Route path="/managepayment" element={<Managepayment />} />
        <Route path="/managebooking" element={<Managebooking />} />
        <Route path="/managepickup" element={<Managepickup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
                    <ToastContainer position="top-center" autoClose={3000} theme='colored'/>

    </>
  )
}

export default App
