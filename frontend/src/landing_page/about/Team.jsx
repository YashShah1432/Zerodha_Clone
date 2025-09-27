import React from 'react';

export default function Team() {
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center fs-2 mb-5'>People</h1>
                <div className="row px-5 text-muted lh-lg" style={{ fontSize: "1.05rem" }}>
                    <div className="col mx-4 my-3 px-4 text-center">
                        <img className='rounded-circle' style={{ width: "65%" }} src="media/images/nithinKamath.jpg" alt="Nithin Kamath Image" />
                        <h4 className='mt-4'>Nithin Kamath</h4>
                        <p>Founder, CEO</p>
                    </div>
                    <div className="col mx-5 my-4 px-4">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a className='text-decoration-none' href="">HomePage</a> / <a className='text-decoration-none' href="">TradingQnA</a> / <a className='text-decoration-none' href="">Twitter</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}