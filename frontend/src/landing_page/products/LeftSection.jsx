import React from 'react';

export default function LeftSection({imageURL, productTitle, productDetail, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container">
            <div className="row my-5">
                <div className="col m-5 text-center">
                    <img src={imageURL} alt="Kite Image" />
                </div>
                <div className="col m-5 px-4">
                    <h1 className='mt-5'>{productTitle}</h1>
                    <p className='text-muted mt-3'>{productDetail}</p>
                    <div className='my-4 d-flex gap-5'>
                        <a className='text-decoration-none' href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right-long"></i></a> 
                        <a className='text-decoration-none' href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='d-flex gap-3'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="Play Store Image" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="App Store Image" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}