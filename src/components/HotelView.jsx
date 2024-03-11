import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import ImageGrid from './ImageGrid';

const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png"
];

const HotelView = () => {
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDisplay(window.innerWidth < 768);
        };

        handleResize(); // Call it initially to set isSmallDisplay correctly

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <main className="container mx-auto px-4 py-6 flex justify-center ">
                <div className="md:w-10/12 ">
                    {/* Image */}
                    <div className="rounded-full container mx-auto mt-14 p-2  ">
                        {isSmallDisplay ? (
                            <Carousel className="" >
                                {slides.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        ) : (
                            <ImageGrid className="md:h-48" />
                        )}
                    </div>

                    {/* Description */}
                    <div className="max-w-sm mx-auto bg-white p-4 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-2">The Manor - New Delhi</h2>
                        <p className="text-gray-700 mb-4">Luxury New Delhi hotel with restaurant, connected to a shopping center</p>

                        <div className="flex items-center mb-3">
                            <span className="bg-green-500 text-white p-1 rounded mr-2">9.0</span>
                            <span>Wonderful</span>
                        </div>

                        <a href="#" className="text-blue-500 text-sm mb-4 inline-block">See all 101 reviews &gt;</a>

                        <ul className="mb-4">
                            {/* {['Airport transfer', 'Free WiFi', 'Air conditioning', 'Free parking', 'Restaurant', 'Bar'].map((amenity, index) => (
                                <li key={index} className="flex items-center mb-1">
                                   
                                    <span className="mr-2">•</span>
                                    {amenity}
                                </li>
                            ))} */}
                        </ul>

                        <a href="#" className="text-blue-500 text-sm inline-block">See all property amenities &gt;</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HotelView;
