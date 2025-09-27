import React from 'react';

export default function Brokerage() {
    return ( 
        <div className="container border-top">
            <div className="row text-center py-4">
                <div className="d-flex justify-content-around mb-4 mt-5 fs-5">
                    <a className='text-decoration-none' href="">Brokerage calculator</a>
                    <a className='text-decoration-none' href="">List of charges</a>
                </div>
                <div className="">
                    <ul className='text-muted text-start' style={{fontSize:"0.9rem", lineHeight:"2.5rem"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}