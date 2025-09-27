import React from 'react';

export default function RightSection({imageURL, productTitle, productDetail, learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col m-5 px-4">
                    <h1 className='mt-5'>{productTitle}</h1>
                    <p className='text-muted mt-3'>{productDetail}</p>
                    <div className='my-4 d-flex gap-5'>
                        <a className='text-decoration-none' href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a> 
                    </div>
                </div>
                <div className="col mx-5 text-center">
                    <img   src={imageURL} alt="Console Image" />
                </div>
            </div>
        </div>
    )
}