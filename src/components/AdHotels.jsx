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
        <div className='h- gilroyMe bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center'>
            <div className='md:w-11/12 w-[95%] mt-20'>
                <div className="backdrop-blur-sm bg-white/70 rounded-lg md:rounded-t-3xl font-bold md:text-[1.4rem] text-[0.6rem] h-8 md:h-12 grid grid-cols-7 md:gap-4 justify-items-center items-center px-2 md:px-4 text-zinc-700">
                    <h1>Image</h1>
                    <h1>Hotel Name</h1>
                    <h1>Event</h1>
                    <h1>Catering</h1>
                    <h1>Location</h1>
                    <h1>Contact</h1>
                    <Link to={"/admin_create"}>
                        <h1>Actions</h1>
                    </Link>

                </div>
                {hotels.map((h, index) => (
                    <main key={index} className="justify-center">
                        <div className="backdrop-blur-sm bg-zinc-200 rounded-lg md:rounded-3xl text-[0.6rem] md:text-xl my-2 h-10 md:h-40 grid grid-cols-7 md:gap-4 justify-items-center items-center px-2 md:px-4 font-normal ">
                            {/* Display the third image */}
                            {urls[index] ? (
                                <img src={urls[index]} alt={`${h.name}`} className="w-40 h-26 object-cover rounded-lg" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                    <span>No Image</span>
                                </div>
                            )}
                            <h1>{h.name}</h1>
                            <h1>{h.event}</h1>
                            <h1>{h.meal}</h1>
                            <h1>{h.location}</h1>
                            <h1>{h.contact}</h1>
                            <div className='grid gap-4' >
                                <button className='bg-teal-400 px-2 md:px-2 md:py-1 text-lg rounded-xl'>Edit</button>
                                <button className='bg-blue-500 px-1 md:px-2 md:py-1 text-lg rounded-xl'>Delete</button>
                            </div>
                        </div>
                    </main>
                ))}
                <div className="flex justify-around mt-4 mb-12">
                    <button className='bg-yellow-400 hover:bg-yellow-400/60 md:px-4 px-1 md:py-1 rounded-xl md:text-xl text-sm font-bold' onClick={handleViewProfile}>
                        Client Profile
                    </button>
                    <button className='bg-green-400 hover:bg-green-400/60 md:px-4 px-1 md:py-1 rounded-xl md:text-xl text-sm font-bold' onClick={handleViewInterested}>
                        Client Interested
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdHotels;
