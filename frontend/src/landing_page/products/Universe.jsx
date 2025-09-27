import React from 'react';
import { Link } from 'react-router-dom';

export default function Universe() {
    return (
        <div className="container text-center">
            <div className="row">
                <h1 className='my-5'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row my-4 text-muted text-center" style={{fontSize:"0.8rem"}}>
                    <div className="col-4 my-3">
                        <img style={{ width: "40%" }} src="media/images/smallcaseLogo.png" alt="Smallcase Logo" />
                        <p className='mt-3'>Thematic investment platform</p>
                    </div>
                    <div className="col-4 my-3">
                        <img style={{ width: "35%" }} src="media/images/streakLogo.png" alt="Streak Logo" />
                        <p className='mt-3'>Algo & strategy platterm</p>
                    </div>
                    <div className="col-4 my-3">
                        <img style={{ width: "50%" }} src="media/images/sensibullLogo.svg" alt="Sensibull Logo" />
                        <p className='mt-3'>Options trading platform</p>
                    </div>
                    <div className="col-4 my-3">
                        <img style={{ width: "40%" }} src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse Logo" />
                        <p className='mt-3'>Asset management</p>
                    </div>                    
                    <div className="col-4 my-3">
                        <img style={{ width: "40%" }} src="media/images/goldenpiLogo.png" alt="Goldenpi Logo" />
                        <p className='mt-3'>Bonds trading platform</p>
                    </div>                    
                    <div className="col-4 my-3">
                        <img style={{ width: "30%" }} src="media/images/dittoLogo.png" alt="Ditto Logo" />
                        <p className='mt-3'>Insurance</p>
                    </div>                    
                </div>
            </div>
            <Link to="/signup"><button type="button" className="btn btn-primary px-5 py-2 mb-4">Sign up now</button></Link>
        </div>
    )
}