import React from 'react';

export default function Pricing() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-4 my-5">
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price. transparency in India. Flat fees and no hidden charges.</p>
                    <a className='text-decoration-none' href="#">See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2 my-5"></div>
                <div className="col-6 my-5">
                    <div className="row border d-flex text-center">
                        <div className='col px-5 py-4 border-end'>
                        <h1 className='mb-4'>&#8377;0</h1>
                        <p>Free equity delivery and <br />direct mutual funds</p>
                    </div>
                    <div className='col px-5 py-4'>
                        <h1 className='mb-4'>&#8377;20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}