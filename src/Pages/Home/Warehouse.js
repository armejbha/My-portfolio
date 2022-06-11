import React from 'react';

const Warehouse = () => {
    const warehouse = {
        id: 2,
        imgTwo: "https://i.ibb.co/RC0gmmP/Screenshot-2022-06-10-235048.png",
        imgThree: "https://i.ibb.co/M2N31Q9/Screenshot-2022-06-10-235142.png",
        name: "Laptop Warehouse",
        live: "https://manufacter-e2227.web.app/",
        client: "https://github.com/armejbha/laptop-warehouse-client",
        server: "https://github.com/armejbha/laptop-warehouse-server",
        description: "This is warehouse management website.There main feature is Manage Items, Product Update, Add Items and secure authentication systerm.It's implement firebase authentication systerm",
        img: "https://i.ibb.co/18XPNRj/laptop.png",
        purpose: "A Website for warehouse management"
    }
    return (
        <div className='mt-4 mx-2 md:mx-0'>
            <div className='w-full md:w-1/2 mx-auto'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={warehouse.img} alt='warehouse' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={warehouse.imgTwo} alt='warehouse' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={warehouse.imgThree} alt='warehouse' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-3xl">{warehouse.name}</h2>
                    <h4 className='font-semibold text-lg'>{warehouse.purpose}</h4>
                    <p>{warehouse.description}</p>
                    <div className='flex justify-between items-center mt-4'>
                        <div>
                            <a className='btn btn-xs mr-2 px-4' href={warehouse.client}>Client</a>
                            <a className='btn btn-xs' href={warehouse.server}>Server</a>
                        </div>
                        <div>
                            <a className='btn btn-xs' href={warehouse.live}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Warehouse;