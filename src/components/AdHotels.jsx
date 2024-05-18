import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const AdHotels = () => {
    const navigate = useNavigate();
    const firebase = useFirebase();
    const [hotels, setHotels] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        firebase.listOfHotels().then(async (hotels) => {
            const hotelsData = hotels.docs.map(doc => doc.data());
            setHotels(hotelsData);
            console.log(hotelsData);

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

    return (
        <div className=' md:h-fit bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center'>
            <div className='md:w-11/12 w-[95%] mt-14 md:mt-20'>
                <div className="sm:gilroyMed hidden   font-bold ackdrop-blur-sm bg-white/70 rounded-lg md:rounded-t-3xl  md:text-[1.4rem] text-[0.6rem] h-8 md:h-12 md:grid grid-cols-5 md:gap-4 justify-items-center items-center px-2 md:px-4 text-zinc-700">
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
                            <h1 className='gilroyMed md:gilroyThin text-2xl  mt-2' >{h.name}</h1>
                            {/* <h1>{h.event}</h1> */}
                            {/* <h1>{h.meal}</h1> */}
                            <h1 className='text-xl font-bold' >{h.location}</h1>
                            <h1 className='text-xl font-bold' >{h.contact}</h1>
                            <div className='grid grid-cols-2 md:grid-cols-1 gap-4' >
                                <button className='gilroyMed bg-teal-400 px- py-2 md:px-3 md:py-1 text-lg rounded-xl'>Edit</button>
                                <button className='gilroyMed bg-blue-400 px- py-2 md:px-3 md:py-1 text-lg rounded-xl'>Delete</button>
                            </div>
                        </div>
                    </main>
                ))}
                <div className="flex justify-around mt-4 mb-12">
                    <button className='bg-yellow-400 hover:bg-yellow-400/60 md:px-4 px-4 py-2 md:py-1 rounded-xl md:text-xl text-lg font-bold' onClick={handleViewProfile}>
                        Client Profile
                    </button>
                    <button className='bg-green-400 hover:bg-green-400/60 md:px-4 px-4 py-2 md:py-1 rounded-xl md:text-xl text-lg font-bold' onClick={handleViewInterested}>
                        Client Interested
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdHotels;
