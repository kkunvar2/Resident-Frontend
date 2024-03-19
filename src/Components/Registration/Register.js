import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const wings = ['A', 'B', 'C', 'D'];
    const floors = {
        'A': ['101', '102', '103', '104', '105'],
        'B': ['201', '202', '203', '204', '205'],
        'C': ['301', '302', '303', '304', '305'],
        'D': ['401', '402', '403', '404', '405']
    };

    const [selwing, setSelWing] = useState('');
    const [selfloor, setSelFloor] = useState('');
    const [pass, setPass] = useState('');
    const [cnPass, setCnPass] = useState('');
    const [match, setMatch] = useState(true);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        mobile: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        mobile: '',
    });

    const handleWing = (e) => {
        setSelWing(e.target.value);
        setSelFloor('');
    };

    const handleFloor = (e) => {
        setSelFloor(e.target.value);
    };

    const handleValidation = (e) => {
        const { name, value } = e.target;
        let errors = { ...formErrors };

        switch (name) {
            case 'name':
                errors.name = !value ? 'Please Enter Name' : '';
                break;
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
                break;
            case 'mobile':
                errors.mobile = value.length !== 10 ? 'Contact Number Must be 10 Digits' : '';
                break;
            default:
                break;
        }

        setFormErrors(errors);
        setInputs({ ...inputs, [name]: value });
    };

    const handlePass = (event) => {
        setPass(event.target.value);
    };

    const handleConfirmPass = (event) => {
        setCnPass(event.target.value);
        if (pass !== event.target.value) {
            setMatch(false);
        } else{
            setMatch(true);
        }
        

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://your-api-endpoint.com/api/v1/complaint/register-complaint', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
            if (response.ok) {
                navigate('/dash ')
                console.log('Complaint registered successfully');
            } else {
                console.error('Failed to register complaint');
            }
        } catch (error) {
            console.error('Error registering complaint:', error);
        }
        console.log(inputs)
    };

  return (
    <>
    <div className='bg-gray-800 min-h-screen'>
        <div className='pt-12'>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex flex-col justify-center mx-auto items-center">
                        <h1 className='text-white font-semibold'><span className='font-bold text-lg text-blue-500 '>L</span>/ <span className='font-bold text-lg text-yellow-300 '>W</span></h1>
                        <h3 className='text-blue-500 font-bold tracking-widest italic '>Residential</h3>
                    </div>

                    

                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Register your account</p>
                    {/* form */}
                    <form onSubmit={handleSubmit}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                                type='text' placeholder='Enter FullName' 
                                name='name' 
                                value={inputs.name} 
                                onChange={handleValidation} />
                        </div>

                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                                type='email' 
                                placeholder='Email' 
                                name='email' 
                                value={inputs.email} 
                                onChange={handleValidation}/>
                        </div>
                        {formErrors.email && <p style={{ color: "#ff6347", fontSize: "13px", paddingTop:"10px",  margin: 0}}>{formErrors.email}</p>}
                        
                        <div className=''>
                        <input  className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300"
                            type='number' 
                            placeholder='Phone Number' 
                            name='mobile' 
                            value={inputs.mobile} 
                            onChange={handleValidation} />
                            {formErrors.mobile && <p style={{ color: "#ff6347", fontSize: "13px", paddingTop: "10px", margin: 0 }}>{formErrors.mobile}</p>}
                        </div>


                        <div className="flex items-center justify-between mt-4">
                        <div className='flex gap-1'>
                            {/* wing */}
                            <div className='menu-field'>
                                <select className='bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded-full border border-gray-600 focus:border-yellow-500 text-sm outline-none text-gray-100 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out' 
                                    onChange={handleWing}>
                                    <option className='bg-gray-600 font-normal' value="">Wing</option>
                                    {
                                        wings.map(state => {
                                            return <option className='bg-gray-600 text-blue-500'>{state}</option>
                                        })
                                    }

                                </select>
                            </div>
                            {/* floor */}
                            <div className='menu-field'>
                                {selwing && <select className='bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded-full border border-gray-600 focus:border-yellow-500 text-sm outline-none text-gray-100 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    onChange={handleFloor}>
                                    <option className='bg-gray-600 font-normal' value="">Floor</option>
                                    {
                                        floors[selwing].map(floor => {
                                            return <option className='bg-gray-600 text-blue-500'>{floor}</option>
                                        })
                                    }
                                </select>}
                            </div>
                        </div>
                        

                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                onClick={handleSubmit}
                                type='submit'>
                            Login
                        </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-700">
                    <span className="text-sm text-gray-200 ">If you already  have an account? </span>

                    <Link to='/log'>
                        <p className="mx-2 mt-3 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">click here</p>
                    </Link>
                </div>
            </div>  
        </div>    
    </div>
    </>
  )
}

export default Register