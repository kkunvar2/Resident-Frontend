import React, { useState } from 'react'
import bg from "../Assests/img_2.jpg"

const MemEvent = () => {

  const events = ["Birthday", "Engagement", "Party"];

  const [values, setvalues] = useState({
    type: '',
    startDate: '',
    endDate: '',
  })

  
  
  const handleSubmit = (e) =>{
    e.preventDefault()

     // Calculate total days
     const start = new Date(values.startDate);
     const end = new Date(values.endDate);
     const diffTime = Math.abs(end - start);
     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);
 
     // Update state with total days
     setvalues({
       ...values,
       totalDays: diffDays
     });
    console.log(values)
    
  }


  const handlechange = (e) => {
    const { name, value } = e.target;
    setvalues({
        ...values,
        [name]: value,
    });
}
return (
  <>
    <section className='h-screen  bg-gray-900 body-font'>
      <div className='flex justify-between px-24 py-24'>
        <form  onSubmit={handleSubmit} className='lg:w-3/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0'>
            <div className='flex items-center justify-between'>
              <h2 className="text-white text-lg font-medium title-font mb-5">Book Event</h2> 
            </div>

            {/* Name */}
            <div className=" mb-8">
                <label className="leading-7 text-lg text-gray-400">Type: </label>
                <select className='lg:w-[30%] lg:ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"'
                        onChange={handlechange}
                        value={values.type}
                        name="type"  >
                          <option className='bg-gray-600 font-normal mb-3' >Select a Event</option>
                              {
                                events.map((event, i) => {
                                  return <option key={i} value={event} className='bg-gray-600 text-yellow-500'>{event}</option>
                                })
                              }
                          <option className='bg-gray-600 text-white' value='Other'><input className='text-white' type='text' placeholder='Other'/>Other</option>
                </select>
                {values.type === "Other" && ( // Conditionally render input box if "Other" is selected
                <input
                  type="text"
                  placeholder='Enter here..'
                  name="otherType="
                  value={values.otherType}
                  onChange={handlechange}
                  className='lg:w-[30%] lg:ml-4 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"'
                />
              )}
            </div>

            {/* Date */}
            <div className="flex justify-between mb-4">
              <div className='flex flex-col '>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">Start Date:</label>
                <input 
                    onChange={handlechange} 
                    value={values.startDate}
                    type="date"  
                    name="startDate" 
                    className="w-[20rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className='flex flex-col'>
                <label className="leading-7 text-lg font-normal mb-2 text-gray-400">End date:</label>
                <input 
                    onChange={handlechange} 
                    value={values.endDate}
                    type="date"  
                    name="endDate" 
                    className="w-[20rem] bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <button type='submit' className='text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg'>Book</button>
              <h2 className='text-white'>Total Days: {values.totalDays} </h2>
            </div>

        </form>

        <div className='lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
          <h1 className="title-font font-medium text-3xl text-white">Make your Booking for a Events and Funcions</h1>
          <p className=" text-gray-400 leading-relaxed mt-4">If secretary is approved your reservation than you have been eligible for celebrating <span className='text-yellow-500'>Have great day</span> </p>
        </div>

      </div>
    </section>
    </>
  )
}


export default MemEvent