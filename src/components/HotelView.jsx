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
            <main className="container mx-auto px-4 py-6">
                <div className="md:flex">
                    {/* Image */}
                    <div className="container mx-auto p-4">
                        {isSmallDisplay ? (
                            <Carousel>
                                {slides.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        ) : (
                            <ImageGrid />
                        )}
                    </div>

                    {/* Description */}
                    <div className="w-1/2 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">Description</h2>
                        <p className="text-gray-600 mt-2">
                            The Manor is a luxury hotel located in the lush area of Friends Colony West, New Delhi. It offers
                            exceptional service and elegant accommodations to ensure a comfortable stay for guests.
                        </p>

                        {/* Amenities */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold text-gray-800">Amenities</h2>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                <li>Free WiFi</li>
                                <li>24-hour room service</li>
                                <li>Restaurant and bar/lounge</li>
                                <li>Spa and wellness center</li>
                                <li>Swimming pool</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HotelView;
