import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


// icons
// import user_icon from "../Assets/user.png"
// import email_icon from "../Assets/email.png"
// import pass_icon from "../Assets/padlock.png"

const Login = () => {

    const navigate = useNavigate();

    //States
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
  
    const handleSubmit = async(event) => {
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
                navigate('/complaintForm')
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
    <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='header'>
                <div className='text'> <span className='tl'>L</span>/ <span className='tw'>W</span> Residential </div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src='' alt=''/>
                    <input type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleValidation}/>
                </div>
                {formErrors.email && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.email}</p>}

                <div className='input'>
                    <img src=''  alt=''/>
                    <input type='password' placeholder='Password' name='password' value={inputs.password} onChange={handleValidation} />

                </div>
                {formErrors.password && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.password}</p>}

            </div>
            <div className='forgot-password'>Lost Password? <span>click Here!</span></div>
            <div className='submit-container'>
                <Link to='/reg'><button className='submit'>SignUp</button></Link>
                <button className='submit' type='submit'>Login</button>
            </div>
        </div>
    </form>
  )
}

export default Login