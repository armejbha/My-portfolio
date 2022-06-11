import React from 'react';
import myBanner from '../../images/banner/mejba.png';
const Banner = () => {

    return (
        <div className="mx-2 md:mx-6 my-12">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center">
                <div className='md:w-4/12 rounded-lg shadow-2xl border-primary mb-4 md:md-0'>
                    <img src={myBanner} className="" alt='' />
                </div>
                <div className=''>
                    <h1 className="text-4xl md:text-5xl font-bold">Abdur Rahim</h1>
                    <marquee direction="left" height="40px" className="text-secondary w-full md:w-1/2 text-4xl md:text-3xl font-bold">MERN Stack Developer</marquee>
                    <p className="py-3">Hi,Webcome to my portfolio website.If you want know about me more please scroll below.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;