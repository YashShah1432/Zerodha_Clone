import React from 'react';

export default function Hero() {
    return ( 
        <div className="container">
            <div className='text-center my-5 py-5 border-bottom'>
                <h1>Pricing</h1>
                <p className='mt-4 text-muted fw-normal fs-5'>Free equity invesments and flat &#8377;20 traday and F&O trades</p>
            </div>
            <div className="row text-center d-flex gap-5 m-5">
                <div className="col my-5">
                    <img src="media/images/pricing0.svg" alt="0 Rupee Image" />
                    <h3>Free equity delivery</h3>
                    <p className='mt-3 px-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free 20 brokerage.</p>
                </div>
                <div className="col my-5">
                    <img src="media/images/intradayTrades.svg" alt="20 Rupee Image" />
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-3 px-3 text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col my-5">
                    <img src="media/images/pricing0.svg" alt="0 Rupee Image" />
                    <h3>Free direct MF</h3>
                    <p className='mt-3 px-3 text-muted'>All direct mutual fund investments are. absolutely free₹0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}