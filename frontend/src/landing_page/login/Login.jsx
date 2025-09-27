import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "../signup/Signup.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
    const navigate = useNavigate();
    const [inputValue, setinputValue] = useState({
        email: "",
        password: ""
    })

    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setinputValue({
            ...inputValue,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data }= await axios.post(
                "http://localhost:3000/login",
                {
                    ...inputValue,
                },
                {
                    withCredentials: true
                }
            );
            const { success, message } = data;
            if (success) {
                window.location.href = 'http://localhost:5174';
            } else {
                console.log(message)
            }
        } catch (error) {
            console.log(error);
        }
        // setinputValue({
        //     email: "",
        //     password: ""
        // });
    }

    return (
        <div className="container">
            <div className="border border-primary text-center px-4 py-5 my-5 mx-auto rounded-3" style={{ width: "35%" }}>
                <h2>Login</h2>
                <div>
                    <form className='form d-flex flex-column gap-4 mt-5 mb-4' onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-text"><EmailIcon/></div>
                            <input type="email"  className='form-control' placeholder='Enter your email' onChange={handleOnChange} value={email} name="email"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text"><LockIcon/></div>
                            <input type="password" className='form-control' placeholder='Enter your password' onChange={handleOnChange} value={password} name="password"/>
                        </div>
                        
                        <p className='text-primary text-start mb-0'>Forget password?</p>
                        <button className='bg-primary text-white' type='submit'>Login</button>
                    </form>
                </div>
                <p>Don't have an account? <Link className="login-link active text-decoration-none text-primary" to="/signup">Signup</Link></p>
            </div>
        </div>
    )
}