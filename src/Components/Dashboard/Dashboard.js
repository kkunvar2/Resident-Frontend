import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
   <>
   <div className='h-auto md:h-screen bg-slate-300'>   
   <div>
    <Nav/>
   </div>
    <div className=' flex items-center justify-center flex-col pb-6'>
            <h1 className='text-5xl font-bold mt-10 text-slate-400'>Welcome User</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1 mt-12 gap-10 '>
                <Link to='/memmaintanence'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 p-3 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Maintanence</h2>
                        <p className='font-normal tracking-wide italic'>Your Monthly Maintanence details here</p>
                    </div>
                </Link>
                <Link to='/complaintForm'>
                    <div className='flex flex-col bg-white w-72 p-3 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Complaints</h2>
                        <p className='font-normal tracking-wide italic '>Raise Your Complaints Here</p>
                    </div>
                </Link>
                <Link to='/memmeeting'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Meetings</h2>
                        <p className='font-normal tracking-wide italic'>See Upcoming meetings</p>
                    </div>
                </Link>
                <Link to='/memevent'>
                    <div className='flex flex-col bg-white w-72 cursor-pointer h-36 sm:w-[24rem] items-center justify-around rounded-md shadow-xl'>
                        <h2 className='text-2xl font-bold  text-blue-600 tracking-wider '>Events</h2>
                        <p className='font-normal tracking-wide italic'>Book hall for events</p>
                    </div>
                </Link>
    
                
            </div>
            <Link to='/feed'>
                <div className='fixed bottom-2 right-2'>
                    <button className='bg-blue-500 py-2 px-3 rounded-md font-semibold'>Feedback</button>
                </div>
            </Link>
        </div>
    </div>
   </>
  )
}

export default Dashboard
