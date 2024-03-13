import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestReport from './Components/Guest/GuestReport'
import ComplaintTab from './Components/Complaint/ComplaintTab'
import ComplaintForm from './Components/Complaint/ComplaintForm'
import Feed from './Components/Feedback/Feed'
import Reg from './Components/Registration/Reg'
import Login from './Components/Registration/Login'
import MemEvent from './Components/Events/MemEvent'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/' element={<MemEvent />}/>
        {/* <Route path='/' element={<Reg />}/> */}
        <Route path='/complaintTab' element={<ComplaintTab />}/>
        <Route path='/complaintForm' element={<ComplaintForm />}/>
        {/* <Route path='/' element={<GuestReport />}/> */}
        {/* <Route path='/' element={<Feed />}/> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App