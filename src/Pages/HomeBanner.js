import React from 'react';
import banner from '../assests/home-banner.webp'
const HomeBanner = () => {
    return (
        <div className='relative'>
            <img src={banner} alt='' className='w-full h-full md:min-h-[70vh]'/>
            <div className='absolute top-2 md:top-10 left-5 md:left-32'>
                <h1 className='text-3xl md:text-8xl font-bold text-pri'>4K UHD<br/> <span className='text-2nd'>ANDROID</span> <br/>SMART T.V</h1>
                <button className='rapiit-btn hidden md:block'>Buy Now</button>
            </div>
        </div>
    );
};

export default HomeBanner;