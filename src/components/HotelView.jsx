import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useFirebase } from '../context/Firebase';
import Carousel from './Carousel';
import ImageGrid from './ImageGrid';
import { MdConnectingAirports } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { FaHospital, FaTrain, FaWifi } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdLocalBar } from "react-icons/md";
import { Link } from 'react-router-dom';

const HotelView = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();
    const [hotel, setHotel] = useState(null); // State to store the selected hotel
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);
    const locations = [
        { icon: <FaHospital />, name: 'Fortis Escorts Heart Institute', distance: '3 min drive' },
        { icon: <FaTrain />, name: 'New Delhi Hazrat Nizamuddin Station', distance: '10 min drive' },
        { icon: <FaTrain />, name: 'Delhi Aero City Station', distance: '18 min drive' },
        { icon: <FaTrain />, name: 'IGI Airport Station', distance: '21 min drive' }
    ];
    const [slides, setSlides] = useState([]); // State to store image URLs
    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            const filteredHotels = hotels.docs
                .map(doc => doc.data())
                .filter(hotel => hotel.id == hotelId);

            setHotel(filteredHotels);

            if (filteredHotels.length > 0) {
                const rawUrls = filteredHotels[0].imageUrls;
                const fetchUrls = rawUrls.map(rawUrl => firebase.getImageURL(rawUrl));

                Promise.all(fetchUrls)
                    .then(urls => setSlides(urls))
                    .catch(error => console.error("Error fetching image URLs:", error));
            }
        });
    }, [firebase, hotelId]); 
    console.log(slides)

    if (!hotel) {
        // Render a loading state or handle when hotel is not found
        return (
            <div>hello loading...</div>
        );
    }

    // const slides = hotel[0].imageUrls;
    // console.log(slides)

    return (
        <>
            <div className='  flex justify-center bg-[url("src/assets/building-night.jpg")] bg-cover '>
                <div className="md:w-11.5/12 backdrop-blur-sm bg-white/50 rounded-3xl my-16">
                    {/* Image */}
                    <div className="rounded-full container mx-auto   ">
                        {/* {isSmallDisplay ? ( */}
                        <div className=' lg:hidden ' >
                            <Carousel className="" >
                                {slides.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        </div>
                        {/* // ) : ( */}
                        <div className='hidden lg:block ' >
                            <div className="grid grid-cols-2 gap-1 ">
                                {/* Big Image */}
                                <div>
                                    <img src={slides[0]} alt="Big" className="w-full  rounded-l-3xl " />
                                </div>
                                {/* Small Images */}
                                <div className="grid grid-cols-2 gap-1  p-[0.75px]">
                                    <img src={slides[1]} alt="Small 1" className="w-full h-full" />
                                    <img src={slides[2]} alt="Small 1" className=" rounded-tr-3xl h-full" />
                                    <img src={slides[3]} alt="Small 2" className="h-full " />
                                    <img src={slides[4]} alt="Small 2" className=" rounded-br-3xl h-full" />
                                </div>
                            </div>
                        </div>
                        {/* )} */}
                    </div>

                    {/* Description */}
                    <div className="max-w-xl mx-auto bg-white p-4 rounded-3xl shadow-lg md:max-w-full md:m-2 md:flex md:justify-between">
                        <div className='md:'>
                            <h2 className="text-xl font-bold md:text-4xl">{hotel[0].name}</h2>
                            <p className="text-gray-700 mb-4 md:text-xl font-semibold">{hotel[0].contact}</p>

                            <div className="flex items-center mb-3">
                                <span className="bg-green-500 text-white p-1 rounded mr-2">9.0</span>
                                <span className='font-bold' >Wonderful</span>
                            </div>

                            <a href="#" className="text-blue-500  mb-4 inline-block ">See all 101 reviews &gt;</a>

                            <div className="flex justify-center md:justify-normal ">
                                <ul className="mb-4 grid grid-cols-2 gap-8 md:gap-28 ">
                                    <div>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-2xl"><MdConnectingAirports /></span>Airport transfer</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><TbAirConditioning /></span>Air conditioning</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><LuParkingCircle /></span>Free parking</li>
                                    </div>
                                    <div>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><FaWifi /></span>Free WiFi</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><MdRestaurant /></span>Restaurant</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><MdLocalBar /></span>Bar</li>
                                    </div>
                                </ul>
                            </div>

                            <a href="#" className="text-blue-500  inline-block mb-2">See all property amenities &gt;</a>
                        </div>

                        <div className='rounded-full'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.043813144539!2d76.78222047466204!3d30.745270785028293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a09098a47aa89%3A0xc0ef30e113006e91!2sTaj%20Chandigarh!5e0!3m2!1sen!2sin!4v1710182425959!5m2!1sen!2sin" width="330" height="250" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <p className="text-gray-700 my-2 text-xl font-bold"> Check out the area </p>
                            <ul className="mb-2">
                                {locations.map((location, index) => (
                                    <li key={index} className="flex items-center mb-1">
                                        {location.icon}
                                        <div className="ml-2">
                                            <p className="text-sm">{location.name}</p>
                                            <p className="text-xs text-gray-500">{location.distance}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-500 ">See more &gt;</button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/fform'} className="fixed bottom-8 right-8  ">
                <button className="bg-green-500 hover:bg-blue-700 text-white text-xl py-4 px-4 rounded-full hover:scale-110  cursor-pointer animate-bounce">
                    Interested
                </button>
            </Link>
        </>
    );
};

export default HotelView;

