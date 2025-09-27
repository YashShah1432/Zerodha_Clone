import React from 'react';
import { Link } from 'react-router-dom';

export default function OpenAccount() {
    return (
        <div className='text-center my-5 py-5'>
            <h1>Open a Zerodha account</h1>
            <p className='my-3'>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
            <Link to="/signup"><button type="button" className="btn btn-primary px-5 py-2 mb-5">Sign up now</button></Link>
        </div>
    );
}