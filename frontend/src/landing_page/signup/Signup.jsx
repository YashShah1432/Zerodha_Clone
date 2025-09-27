import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "./Signup.css"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Signup() {
    const navigate = useNavigate();
    const [inputValue, setinputValue] = useState({
        username: "",
        email: "",
        password: ""
    })

    const { username, email, password } = inputValue;

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
            const { data } = await axios.post(
                "http://localhost:3000/signup",
                {
                    ...inputValue,
                },
                {
                    withCredentials: true
                }
            );
            const { success, message } = data;
            if (success) {
                navigate("/login");
            } else {
                console.log(message)
            }
        } catch (error) {
            console.log(error);
        }
        setinputValue({
            username: "",
            email: "",
            password: ""
        });
    }

    return (
        <div className="container">
            <div className="border border-primary text-center px-4 py-5 my-5 mx-auto rounded-3" style={{ width: "35%" }}>
                <h2>Signup</h2>
                <div>
                    <form className='form d-flex flex-column gap-4 mt-5 mb-4' onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-text"><PersonIcon /></div>
                            <input type="text" className='form-control' placeholder='Enter your name' onChange={handleOnChange} value={username} name="username"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text"><EmailIcon /></div>
                            <input type="email" className='form-control' placeholder='Enter your email' onChange={handleOnChange} value={email} name="email"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text"><LockIcon /></div>
                            <input type="password" className='form-control' placeholder='Enter your password' onChange={handleOnChange} value={password} name="password"/>
                        </div>
                        <button className='bg-primary text-white mt-3' type='submit'>Signup</button>
                    </form>
                </div>
                <p>Already have an account? <Link className="login-link active text-decoration-none text-primary" to="/login">Login</Link></p>
            </div>
        </div>
    )
}