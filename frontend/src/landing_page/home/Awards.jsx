import React from 'react';

export default function Awards() {
    return ( 
        <div className="container my-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="./media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 p-5">
                    <div>
                        <h1 className='mt-4'>Largest stock broker in India</h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                        <div className="row mt-4 mb-1 mx-4">
                            <ul className='col d-flex flex-column row-gap-3'>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>                            
                        </ul>
                        <ul className="col d-flex flex-column row-gap-3">
                            <li>Stocks & IPOS</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                        </div>
                    </div>
                    <img src="./media/images/pressLogos.png" alt="Press Logos" style={{width: "90%"}}/>
                </div>
            </div>
        </div>
     );
}