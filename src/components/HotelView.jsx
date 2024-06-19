import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams hook
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
// import ImageGrid from './ImageGrid';

export let IntrestedHotel = '';

const HotelView = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();
    const [hotel, setHotel] = useState(null); // State to store the selected hotel
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);
    const navigate = useNavigate();

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
    // console.log(slides)

    if (!hotel) {
        return (
            <div>hello loading...</div>
        );
    }

    const handleIntrested = () => {
        IntrestedHotel = hotel[0].name;
        console.log(IntrestedHotel)
        navigate('/fform');
    };
    const handleImageClick = (index) => {
        // Logic to handle image click
        console.log('Image clicked:', index);
        // You can perform any action here, such as displaying the clicked image in a modal
    };

    const handleCloseFullScreen = () => {
        // Logic to close full-screen image
        console.log('Close full-screen image');
        // You can perform any action here to close the full-screen image modal
    };
    // const slides = hotel[0].imageUrls;
    // console.log(slides)

    return (
        <>
            <div className=' gilroyMed flex justify-center bg-slate-500 bg-cover '>
                <div className="md:w-11.5/12 backdrop-blur-sm bg-white/50 md:rounded-3xl mt-20 mb-14">
                    <div className="rounded-full container mt- mx-2 ">
                        <div className=' lg:hidden ' >
                            <Carousel className="" >
                                {slides.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        </div>
                        <ImageGrid
                            slides={slides}
                            handleImageClick={handleImageClick}
                            handleCloseFullScreen={handleCloseFullScreen}
                        />
                        {/* <div className='hidden lg:block ' >
                            <div className="grid grid-cols-2 gap-1 "> */}
                        {/* Big Image */}
                        {/* <div>
                                    <img src={slides[0]} alt="Big" className="w-full  rounded-l-3xl " />
                                </div> */}
                        {/* Small Images */}
                        {/* <div className="grid grid-cols-2 gap-1  p-[0.75px]">
                                    <img src={slides[1]} alt="Small 1" className="w-full h-full" />
                                    <img src={slides[2]} alt="Small 1" className=" rounded-tr-3xl h-full" />
                                    <img src={slides[3]} alt="Small 2" className="h-full " />
                                    <img src={slides[4]} alt="Small 2" className=" rounded-br-3xl h-full" />
                                </div> */}

                        {/* </div>
                        </div> */}
                        {/* )} */}
                    </div>
                    {/* Description */}
                    <div className="max-w-xl mx-auto bg-white p-4 md:rounded-3xl shadow-lg md:max-w-full md:m-2 md:flex md:justify-between">
                        <div className='md:'>
                            <h2 className="text-xl font-bold md:text-4xl">{hotel[0].fullName}</h2>
                            <p className="text-gray-700 mb-4 md:text-xl font-semibold">{hotel[0].contact}</p>

                            <div className="flex items-center mb-3">
                                <span className="bg-green-500 text-white p-1 rounded mr-2">9.0</span>
                                <span className='font-bold' >Wonderful</span>
                            </div>

                            <a href="#" className="text-blue-500 mb-2 md:mb-4 inline-block ">See all 101 reviews &gt;</a>

                            <div className="flex justify-center md:justify-normal ">
                                <ul className="mb-4 grid grid-cols-2 gap-12 md:gap-28 text- ">
                                    <div>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><MdConnectingAirports /></span>Airport transfer</li>
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

                        <div className='rounded-full flex gap-8 items-center'>
                            <div className="">
                            <p className="mt-4 md:mt-0 my-2 text-xl font-bold"> Check out the area </p>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.043813144539!2d76.78222047466204!3d30.745270785028293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a09098a47aa89%3A0xc0ef30e113006e91!2sTaj%20Chandigarh!5e0!3m2!1sen!2sin!4v1710182425959!5m2!1sen!2sin" width="330" height="250" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link to={'/fform'}  className="fixed md:-bottom-6 -bottom-3 right-5  gilroyMed "> */}

            {/* <button className="bg-green-500 hover:bg-blue-700 text-white text-xl py-4 px-4 rounded-full hover:scale-110  cursor-pointer animate-bounce">
                    Interested
                </button> */}
            <div className="fixed md:-bottom-6 -bottom-3 right-5  gilroyMed " >
                <div onClick={handleIntrested} class="w-full h-40 flex items-center justify-center cursor-pointer">
                    <div
                        class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
                    >
                        <span
                            class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
                        ></span>
                        <span
                            class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                class="w-5 h-5 text-green-400"
                            >
                                <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </span>
                        <span
                            class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                class="w-5 h-5 text-green-400"
                            >
                                <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </span>
                        <span
                            class="md:font-['gilroy']  relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200 md:font-bold md:text-xl"
                        >Intrested
                        </span>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </>
    );
};

export default HotelView;

