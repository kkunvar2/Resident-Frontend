import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import user_icon from "../Assets/user.png"
// import email_icon from "../Assets/email.png"
// import pass_icon from "../Assets/padlock.png"
// import phone_icon from "../Assets/phone.png"

const Reg = () => {

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
            const response = await fetch('http://your-api-endpoint.com/api/v1/auth/signup', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
            if (response.ok) {
                navigate('/dash ')
                console.log('registered successfully');
            } else {
                console.error('Failed to register');
            }
        } catch (error) {
            console.error('Error registering ', error);
        }
        console.log(inputs)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='header'>
                        <div className='text'> <span className='tl'>Regi</span><span className='tw'>Stration</span></div>
                        <div className='underline'></div>
                    </div>
                    
                    <div className='inputs'>
                        <div className='input'>
                            <img src='' alt='' />
                            <input type='text' placeholder='Enter FullName' name='name' value={inputs.name} onChange={handleValidation} />
                        </div>
                            {formErrors.name && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.name}</p>}
                        
                        <div className='input'>
                            <img src="" alt='' />
                            <input type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleValidation} />
                        </div>
                            {formErrors.email && <p style={{ color: "red", fontSize: "13px", paddingLeft: "25rem", margin: 0}}>{formErrors.email}</p>}
                        
                        <div className='input'>
                            <img src='' alt='' />
                            <input type='number' placeholder='Phone Number' name='mobile' value={inputs.mobile} onChange={handleValidation} />
                        </div>
                            {formErrors.mobile && <p style={{ color: "red", fontSize: "13px", paddingLeft: "20rem", margin: 0 }}>{formErrors.mobile}</p>}

                        <div className='dropdown'>
                            <div className='menu-field'>
                                <label>Wing:</label>
                                <select onChange={handleWing}>
                                    <option value="">Select a Wing</option>
                                    {
                                        wings.map(state => {
                                            return <option>{state}</option>
                                        })
                                    }

                                </select>
                            </div>
                            <div className='menu-field'>
                                <label>Floor:</label>
                                {selwing && <select onChange={handleFloor}>
                                    <option value="">Select a Floor</option>
                                    {
                                        floors[selwing].map(floor => {
                                            return <option>{floor}</option>
                                        })
                                    }
                                </select>}

                            </div>
                        </div>

                        <div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='password' placeholder='Password' value={pass} onChange={handlePass} />
                            </div>
                        </div>
                        <div>
                            <div className='input'>
                                <img src='' alt='' />
                                <input type='password' placeholder='Confirm Password' name='cnPassword' value={cnPass} onChange={handleConfirmPass} />
                            </div>
                            {!match && <p style={{ color: "red", fontSize: "13px", paddingLeft: "23rem" }}>Passwords doesn't match</p>}
                            
                        </div>

                    </div>

                    <div className='forgot-password'>Lost Password? <span>click Here!</span></div>

                    <div className='submit-container'>
                    <button type='submit' className='submit'>SignUp</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Reg;
