import React from 'react';
import "./Hero.css";

export default function Hero() {
    return (
        <div style={{backgroundColor:"rgb(40, 136, 255)"}}>
            <div className="container text-white p-5">
                <div className="row mb-5 mx-5 px-5">
                    <div className="col-6 text-start">
                        <p className='fs-5'>Support Portal</p>
                    </div>
                    <div className="col-6 link-color text-end">
                        <a href="">Track Tickets</a>
                    </div>
                </div>
                <div className="row px-5">
                    <div className="col-5 mx-5 px-4">
                        <p style={{fontSize:"1.4rem"}}>Search for an answer or browse help topics to create a ticket</p>
                        <input className='py-3 rounded border-0 px-3' style={{width:"105%"}} type="text" name="" id="" placeholder='Eg: how do i activate F&O, why is my order getting rejected...' />
                        <div className='link-color d-flex flex-wrap column-gap-4 my-3' style={{fontSize:"0.95rem"}}>
                            <a href="">Track account opening</a>
                            <a href="">Track segment activation</a>
                            <a href="">Intraday</a>
                            <a href="">margins</a>
                            <a href="">Kite user manual</a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5 px-5">
                        <p className='fs-4 mb-0'>Featured</p>
                        <ol className='d-flex flex-column link-color' style={{lineHeight:"2.5rem"}}>
                            <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}