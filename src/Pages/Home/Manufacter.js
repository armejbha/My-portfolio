import React from 'react';

const Manufacter = () => {
    const manufacter = {
        id: 1,
        imgTwo: "https://i.ibb.co/zGpw66S/Screenshot-2022-06-10-234529.png",
        imgThree: "https://i.ibb.co/BcpVjkd/Screenshot-2022-06-10-234701.png",
        name: "Tools Manufacter",
        live: "https://manufacter-e2227.web.app/",
        client: "https://github.com/armejbha/tools-manufacter-client",
        server: "https://github.com/armejbha/tools-manufacter-server",
        description: "This website have two type of users normal and admin.Admin can add new product cancel purchase order.It also include firebase authentication systerm.Normal user update their profile.",
        img: "https://i.ibb.co/LkW7wX5/Tools.png",
        purpose: "A Website for esstial home tools seller"
    }
    return (
        <div className='mt-4 mx-2 md:mx-0'>
            <div className='w-full md:w-1/2 mx-auto bg-base-300 p-4 rounded-lg'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={manufacter.img} alt='manufacter' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={manufacter.imgTwo} alt='manufacter' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={manufacter.imgThree} alt='manufacter' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <h2 className="font-bold text-3xl text-center">{manufacter.name}</h2>
                    <p>{manufacter.description}</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div>
                            <a className='btn btn-xs mr-2 px-4' href={manufacter.client}>Client</a>
                            <a className='btn btn-xs' href={manufacter.server}>Server</a>
                        </div>
                        <div>
                            <a className='btn btn-xs' href={manufacter.live}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manufacter;