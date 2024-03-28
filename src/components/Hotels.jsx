import React from 'react';
import Footer from './Footer';
import FooterLp from './FooterLp';
import { Link } from 'react-router-dom';

const Hotels = () => {
    // Array of hotel objects
    const Typehotels = [
        { name: "JW Marriott", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "Vivanta by Taj", location: "Location", imageUrl: "https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?w=740" },
        { name: "The Leela Palace", location: "Location", imageUrl: "https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?t=st=1710364047~exp=1710367647~hmac=6fdf83eae64bd7de55411b3c8d80ce4273eb3e82d0bfd224b923e54573fcc376&w=740" },
        { name: "ITC Grand Chola", location: "Location", imageUrl: "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740" },
        { name: "The Oberoi Amarvilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/swimming-pool_74190-1977.jpg?t=st=1710364204~exp=1710367804~hmac=2385fcab364a56829f2340952a66eb71138bd441f756002945b4ec59dd2f9433&w=740" },
        { name: "The Oberoi Udaivilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/urban-city-architecture_649448-5343.jpg?t=st=1710364216~exp=1710367816~hmac=46b5d3f42c3964889a84e3ec8340a20b9379013a3792b67f49318fe416ec1a63&w=740" },
    ];

    return (
        <div className='h-full  font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex items-center'>

            <div className='mx-12 backdrop-blur-sm bg-white/50 p-4  rounded-3xl'>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
                    {Typehotels.map((hotel, index) => (
                        <a href='/hotelView' key={index} className="relative rounded-3xl">
                            <img src={hotel.imageUrl} alt="Image" className="w-full h-auto rounded-3xl" />
                            <div className="flex justify-between items-end">
                                <p className="text-2xl font-bold">{hotel.name}</p>
                                <button className="text-xl mx-2 ">{hotel.location}</button>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* Floating Interested button */}
            <Link to={'/fform'} className="fixed bottom-8 right-8  ">
                <button className="bg-green-500 hover:bg-blue-700 text-white text-xl py-4 px-4 rounded-full hover:scale-110  cursor-pointer animate-bounce">
                    Interested
                </button>
            </Link>
        </div>
    );
};

export default Hotels;
