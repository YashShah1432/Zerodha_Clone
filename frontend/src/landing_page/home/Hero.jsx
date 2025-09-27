import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return ( 
        <div className='container'>
            <div className="row">
                <img src="./media/images/homeHero.png" alt="Hero Image" className='mb-5'/>
                <div className='text-center my-5'>
                    <h1>Invest in everything</h1>
                    <p className='my-3'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <Link to="/signup"><button type="button" className="btn btn-primary px-5 py-2">Signup Now</button></Link>
                </div>
            </div>
        </div>
     );
}