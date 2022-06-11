import React from 'react';

const Financial = () => {
    const financial = {
        id: 3,
        imgTwo: 'https://i.ibb.co/dp9DWK9/Screenshot-2022-06-10-235309.png',
        imgThree: 'https://i.ibb.co/3WFpSjt/Screenshot-2022-06-10-235423.png',
        name: "Financial Consaltant",
        live: "https://independent-service-prov-237f3.web.app/",
        client: "https://github.com/armejbha/financial-consaltantufacter-client",
        description: "This is financial support website.Here you can get any financial  support package.It's inlclude firebase authentication systerm.If you don't sign in you can't booking any financial support..",
        img: "https://i.ibb.co/BBxXt5Q/financial.png",
        purpose: "A Website for Financial support consaltant"
    }
    return (
        <div className='mt-4'>
            <div className='w-1/2 mx-auto'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={financial.img} alt='fianancial' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={financial.imgTwo} alt='fianancial' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={financial.imgThree} alt='fianancial' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-3xl">{financial.name}</h2>
                    <h4 className='font-semibold text-lg'>{financial.purpose}</h4>
                    <p>{financial.description}</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div>
                            <a className='btn btn-xs mr-2 px-4' href={financial.client}>Client</a>
                        </div>
                        <div>
                            <a className='btn btn-xs' href={financial.live}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Financial;