import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Log = () => {
    const navigate = useNavigate();

    //States
    const [invalid, setinvalid] = useState(false)
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password:'',
    });

    //Function
    const handleValidation = (e) => {
        const { name, value } = e.target;
        let errors = { ...formErrors };

        switch (name) {
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
                break;
            case 'password':
                errors.password = !value ? 'Please enter password!' : '';
                break;
            default:
                break;
            }
            
            setFormErrors(errors);
            setInputs({ ...inputs, [name]: value });
        };
        

        const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/v1/complaint/signin', inputs, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/dash');
                console.log('Login Successfully');
            } else {
                console.error('Login Failed');
            }
        } catch (error) {
            setinvalid(true)
            setTimeout(()=> {
                setinvalid(false)
            }, 2000)
        }
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

                        <h3 className="mt-3 text-xl font-medium text-center text-gray-400 dark:text-gray-200">Welcome Back</h3>

                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                                type="email" 
                                placeholder="Email Address" 
                                name='email' 
                                value={inputs.email} 
                                onChange={handleValidation} />
                                {formErrors.email && <p style={{ color: "#ff6347", fontSize: "13px", padding:"5px",  margin: 0}}>{formErrors.email}</p>}
                            </div>

                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-500 bg-gray-800 border rounded-lg focus:focus:border-yellow-300  focus:ring-opacity-40  focus:ring-blue-300" 
                                type="password" 
                                placeholder="Password"
                                name='password' 
                                value={inputs.password} 
                                onChange={handleValidation} />
                                {formErrors.password && <p style={{ color: "#ff6347", fontSize: "13px", padding:"5px", margin: 0}}>{formErrors.password}</p>}
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="text-sm  text-blue-400 dark:text-gray-200 hover:text-gray-500">Forget Password?</p>

                                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500"
                                        onClick={handleSubmit}
                                        type='submit'>
                                    Login
                                </button>
                            </div>
                            <div>
                                {invalid &&
                                    <p className='text-red-500 text-center mt-2'>Invalid User!</p>
                                }
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-700">
                        <span className="text-sm text-gray-200 ">Don't have an account? </span>

                        <Link to='/register'>
                            <p className="mx-2 mt-3 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</p>
                        </Link>
                    </div>
                </div>  
            </div>    
        </div>
    </>
  )
}

export default Log