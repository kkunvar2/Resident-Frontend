import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ComplaintTab = () => {
    
    //Get data
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
      fetch('http://your-api-endpoint.com/api/v1/complaint/view-my-complaints')
        .then(response => response.json())
        .then(data => setComplaints(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
    <>
        <div className='h-sreen bg-gray-900'>
            <h1 className=' text-5xl mb-5 ml-3 font-medium text-gray-700'>Your Complaints Records</h1>

             <div className=' overflow-x-auto rounded-lg shadow max-w-full'>
                <div className='h-[350px]'>
                    <table className='table-fixed w-full '>
                    <thead className=' sticky top-0 h-[3rem] bg-gray-50 border-b-2 border-gray-200 text-gray-600'>
                        <tr className='w-24 p-3 text-lg font-semibold tracking-wide text-center'>
                            <th className=' '>Id</th>
                            <th className=''>Type</th>
                            <th className=''>Status</th>
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100 text-center'>
                {complaints.map(complaint => (
                  <tr key={complaint.id} className='bg-slate-200 p-3 text-md hover:bg-gray-300'>
                    <td className='font-bold text-blue-500'>{complaint.id}</td>
                    <td className='text-gray-700'>{complaint.title}</td>
                    <td className='text-gray-700'>
                      <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-${complaint.status === 'Solved' ? 'green' : 'yellow'}-200 rounded-lg`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className='p-3 text-gray-700'><FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#f66151" }} /></td>
                  </tr>
                ))}
              </tbody>
                    </table>    
                </div>
            </div>   
        </div>
    </>
  )
}

export default ComplaintTab