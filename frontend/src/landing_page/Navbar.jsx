import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom position-sticky top-0 z-1">
            <div className="container my-3">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Zerodha Logo" style={{width: "25%"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse flex-grow-0' id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/support">Support</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link to=""><i className="fa-solid fa-bars text-muted"></i></Link>
                        </li>              
                    </ul>
                </div>
            </div>
        </nav>
    );
}