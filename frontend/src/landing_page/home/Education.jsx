import React from 'react';

export default function Education() {
    return ( 
        <div className="container m-5">
            <div className="row ">
                <div className="col m-5">
                    <img src="media/images/education.svg" alt="Education Image" />
                </div>
                <div className="col-5 m-5 pr-5">
                    <h3 className='mt-4'>Free and open market education</h3>
                    <div className='my-5'>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className='text-decoration-none' href="#">Versity <i className="fa-solid fa-arrow-right-long pl-5"></i></a>
                    </div>
                    <div>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a className='text-decoration-none' href="#">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}