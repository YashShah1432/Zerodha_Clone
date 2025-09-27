import React from 'react';
import "./CreateTicket.css";

export default function CreateTicket() {
    return ( 
        <div className="container my-5">
            <div className="row">
                <h2 className='mx-5 fs-3'>To create a ticket, select a relevant topic</h2>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-solid fa-circle-plus"></i> Account Opening</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Online Account Opening</a>
                        <a href="">Offline Account Opening</a>
                        <a href="">Company, Partnership and HUF Account Opening</a>
                        <a href="">NRI Account Opening</a>
                        <a href="">Charges at Zerodha</a>
                        <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href="">Getting Started</a>
                    </div>                    
                </div>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-solid fa-user"></i> Your Zerodha Account</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Login Credentials</a>
                        <a href="">Account Modification and Segment Addition</a>
                        <a href="">DP ID and bank details</a>
                        <a href="">Your Profile</a>
                        <a href="">Transfer and conversion of shares</a>
                    </div>
                </div>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-sharp fa-solid fa-chart-column"></i> Your Zerodha Account</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Margin/leverage, Product and Order types</a>
                        <a href="">Kite Web and Mobile</a>
                        <a href="">Trading FAQs</a>
                        <a href="">Corporate Actions</a>
                        <a href="">Sentinel</a>
                        <a href="">Kite API</a>
                        <a href="">Pi and other platforms</a>
                        <a href="">Stockreports+</a>
                        <a href="">GTT</a>
                    </div>
                </div>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-regular fa-credit-card"></i> Funds</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Adding Funds</a>
                        <a href="">Fund Withdrawal</a>
                        <a href="">eMandates</a>
                        <a href="">Adding Bank Accounts</a>
                    </div>
                </div>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-solid fa-circle-notch"></i> Console</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Reports</a>
                        <a href="">Ledger</a>
                        <a href="">Portfolio</a>
                        <a href="">60 Day Challenge</a>
                        <a href="">IPO</a>
                        <a href="">Referral Program</a>
                    </div>
                </div>
                <div className="col-4 px-5 my-5">
                    <h5 className='fw-normal fs-5'><i className="fs-6 fa-regular fa-circle"></i> Coin</h5>
                    <div className='d-flex flex-column mt-5 link-style' style={{lineHeight:"2.5rem"}}>
                        <a href="">Understanding Mutual Funds</a>
                        <a href="">About Coin</a>
                        <a href="">Buying and Selling through Coin</a>
                        <a href="">Starting an SIP</a>
                        <a href="">Managing your Portfolio</a>
                        <a href="">Coin App</a>
                        <a href="">Moving to Coin</a>
                        <a href="">Government Securiti</a>
                    </div>
                </div>
            </div>
        </div>
    )
}