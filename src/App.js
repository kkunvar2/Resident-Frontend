import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GuestReport from './Components/Guest/GuestReport'
import ComplaintTab from './Components/Complaint/ComplaintTab'
import ComplaintForm from './Components/Complaint/ComplaintForm'
import Feedback from './Components/Feedback/Feedback'
import Feed from './Components/Feedback/Feed'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<GuestReport />}/> */}
        {/* <Route path='/' element={<ComplaintTab />}/> */}
        <Route path='/' element={<ComplaintForm />}/>
        {/* <Route path='/' element={<Feedback />}/> */}
        {/* <Route path='/' element={<Feed />}/> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App