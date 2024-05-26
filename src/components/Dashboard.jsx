import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Dashboard = () => {
    const navigate = useNavigate();
    const firebase = useFirebase();
    const [hotels, setHotels] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        firebase.listOfHotels().then(async (hotels) => {
            const hotelsData = hotels.docs.map(doc => doc.data());
            setHotels(hotelsData);
            console.log(hotelsData.length);

            // Fetch the second image URL for each hotel using getImageURL function from Firebase context
            const urls = await Promise.all(hotelsData.map(async (hotel) => {
                if (hotel.imageUrls && hotel.imageUrls.length > 2) {
                    const url = await firebase.getImageURL(hotel.imageUrls[2]);
                    return url;
                }
                return null; // If there is no third image URL
            }));
            setUrls(urls);
        });
    }, [firebase]);

    const handleViewProfile = () => {
        navigate("/Client_Profile");
    };

    const handleViewInterested = () => {
        navigate("/Intrested_Client");
    };

    const [open, setOpen] = useState(false);

    return (
        <div className='md:h-fit bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center'>
            <div className="flex w-full">
                <Sidebar open={open} setOpen={setOpen} />
                {/* Main content */}
                <div
                    className={`transition-all duration-300 ${open ? "md:ml-64 ml-56 mr-4  w-[40%] md:w-[95%]" : "ml-24 mr-2"
                        } md:w-11/12  w-[95%] mt-14 md:mt-20 `}
                >
                    <div className="md:flex justify-between md:gap-6  mt-4 lg:mt-0 lg:mb-4 ">
                        <div className="h-20 w-full rounded-lg bg-white flex mb-2 md:mb-0">
                            <img src="./hotels.png" alt="" className='w-16 md:w-14 md:h-16 h-16 ml-2 pt-2' />
                            <div className="">

                                <h1 className='ml-2 mt-2' >No of hotels Listed</h1>
                                <h1 className='ml-2 text-3xl' > {hotels.length}</h1>
                            </div>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-white flex mb-2 md:mb-0">
                            <img src="./hotels.png" alt="" className='w-16 md:w-14 md:h-16 h-16 ml-2 pt-2' />
                            <div className="">

                                <h1 className='ml-2 mt-2' >No of client intrested</h1>
                                <h1 className='ml-2 text-3xl' >2</h1>
                            </div>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-white flex mb-2 md:mb-0">
                            <img src="./hotels.png" alt="" className='w-16 md:w-14 md:h-16 h-16 ml-2 pt-2' />
                            <div className="">

                                <h1 className='ml-2 mt-2' >No of hotels booked</h1>
                                <h1 className='ml-2 text-3xl' >4</h1>
                            </div>
                        </div>
                    </div>
                    <div className="sm:gilroyMed hidden   font-bold backdrop-blur-sm bg-white/70 rounded-lg md:rounded-t-3xl  md:text-[1.4rem] text-[0.6rem] h-8 md:h-12 md:grid grid-cols-5 md:gap-4 justify-items-center items-center px-2 md:px-4 text-zinc-700">
                        <h1>Image</h1>
                        <h1>Hotel Name</h1>
                        {/* <h1>Event</h1> */}
                        {/* <h1>Catering</h1> */}
                        <h1>Location</h1>
                        <h1>Contact</h1>
                        <Link to={"/admin_create"}>
                            <h1 >Actions(Create)</h1>
                        </Link>

                    </div>
                    {hotels.map((h, index) => (
                        <main key={index} className="gilroyThin justify-center">
                            <div className="backdrop-blur-sm bg-zinc-200 rounded-2xl md:rounded-3xl text-[0.6rem] md:text-xl my-2 p-4 md:h-42 md:grid grid-cols-5 md:gap-4 justify-items-center items-center px-2 md:px-4 font-normal ">
                                {/* Display the third image */}
                                {urls[index] ? (
                                    <img src={urls[index]} alt={`${h.name}`} className=" :md:w-40 md:h-22  object-cover rounded-2xl" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                        <span>No Image</span>
                                    </div>
                                )}
                                <h1 className='gilroyMed md:gilroyThin text-2xl  mt-2' >{h.fullName}</h1>
                                {/* <h1>{h.event}</h1> */}
                                {/* <h1>{h.meal}</h1> */}
                                <h1 className='text-xl font-bold' >{h.city}</h1>
                                <h1 className='text-xl font-bold' >{h.whatsappNo}</h1>
                                <div className='grid grid-cols-2 md:grid-cols-1 gap-4' >
                                    <button className='gilroyMed bg-teal-400 px- py-2 md:px-3 md:py-1 text-lg rounded-xl'>Edit</button>
                                    <button className='gilroyMed bg-blue-400 px- py-2 md:px-3 md:py-1 text-lg rounded-xl'>Delete</button>
                                </div>
                            </div>
                        </main>
                    ))}
                    <div className="md:flex justify-around items-center gap-2 mt-4 mb-">
                        <button className='bg-yellow-400 hover:bg-yellow-400/60 md:px-4 px-4 py-2 md:py-1 rounded-xl md:text-xl text-lg font-bold' onClick={handleViewProfile}>
                            Client Profile
                        </button>
                        <Link to={"/admin_create"}>
                            <h1 className='bg-blue-400 md:hidden hover:bg-blue-400/60 md:px-4 px-4 py-6 md:py-1 rounded-xl md:text-xl text-lg font-boldbg-blue-400  ' >Create</h1>
                        </Link>
                        <button className='bg-green-400 hover:bg-green-400/60 md:px-4 px-4 py-2 md:py-1 rounded-xl md:text-xl text-lg font-bold' onClick={handleViewInterested}>
                            Client Interested
                        </button>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
