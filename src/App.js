import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestReport from './Components/Guest/GuestReport'
import ComplaintTab from './Components/Complaint/ComplaintTab'
import ComplaintForm from './Components/Complaint/ComplaintForm'
import Feed from './Components/Feedback/Feed'
import Reg from './Components/Registration/Reg'
import Login from './Components/Registration/Login'
import MemEvent from './Components/Events/MemEvent'
import Guest from './Components/Guest/Guest'
import GuestForm from './Components/Guest/GuestForm'
import GuestRecords from './Components/Guest/GuestRecords'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>

        {/* Login & Signup*/}
        <Route path='/login' element={<Login />}/>
        <Route path='/reg' element={<Reg />}/>

        {/* Guest */}
        <Route path='/' element={<Guest/>}/>
        <Route path='/guestform' element={<GuestForm />}/>
        <Route path='/guestreport' element={<GuestReport />}/>
        <Route path='/guestrecords' element={<GuestRecords />}/>

        {/* Complaint */}
        <Route path='/complaintForm' element={<ComplaintForm />}/>
        <Route path='/complaintTab' element={<ComplaintTab />}/>

        {/* Event */}
        <Route path='/memevent' element={<MemEvent />}/>

        {/* Meetings */}
        
        {/* Maintanance */}

        {/* FeedBack */}
        <Route path='/feed' element={<Feed />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App