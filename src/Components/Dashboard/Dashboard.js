import React from 'react'
import Nav from '../Nav'

const Dashboard = () => {
  return (
   <>
   <div className=' bg-gray-900'>   
   <div>
    <Nav/>
   </div>
    <div className='flex items-center justify-center flex-col'>
            <h1 className='text-5xl font-bold mt-32 text-slate-400'>Welcome User</h1>
            <div className='grid sm:grid-cols-2 grid-cols-1 mt-32 gap-10 '>
                <div className='flex-col  w-72 cursor-pointer h-36 sm:w-52 border flex items-center justify-around rounded-md bg-yellow-500'>
                    <h2 className='text-xl font-bold '>Events</h2>
                    <p className='text-white'>Book hall for events</p>
                
                </div>
                <div className='flex-col  w-72 cursor-pointer h-36 sm:w-52 border flex items-center justify-around rounded-md'>
                    <h2 className='text-xl font-bold text-yellow-500 '>Copmplaints</h2>
                    <p className='text-white'>Raise complaints here</p>
                </div>

                <div className='flex-col  w-72 cursor-pointer h-36 sm:w-52 border flex items-center justify-around rounded-md'>
                    <h2 className='text-xl font-bold text-yellow-400 '>Maintanence</h2>
                    <p className='text-white'>Raise complaints here</p>
                </div>
                <div className='flex-col  w-72 cursor-pointer h-36 sm:w-52 border flex items-center justify-around rounded-md'>
                    <h2 className='text-xl font-bold text-yellow-500 '>Meetings</h2>
                    <p className='text-white'>Raise complaints here</p>
                </div>
                
            </div>
            <div className='fixed bottom-2 right-2'>
                <button className='bg-blue-500 py-2 px-3 rounded-md font-semibold'>Feedback</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Dashboard
