import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useFirebase } from '../context/Firebase';

const HotelView = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();
    const [hotel, setHotel] = useState(null); // State to store the selected hotel
    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            // Map over the hotel documents and filter based on the ID
            const filteredHotels = hotels.docs
                .map(doc => doc.data())
                .filter(hotel => hotel.id == hotelId);
    
            // Update the state with filtered hotels
            setHotel(filteredHotels);
        });
    }, [hotelId]); // Add hotelId to the dependency array to re-run the effect when it changes
    
    console.log(hotel)

    if (!hotel) {
        // Render a loading state or handle when hotel is not found
        return (
            <div>hello loading...</div>
        );
    }

    return (
        <main className="flex justify-center bg-[url('src/assets/building-night.jpg')] bg-cover">
            <div className="md:w-11.5/12 backdrop-blur-sm bg-white/50 rounded-3xl my-16">
                <div className="max-w-xl mx-auto bg-white p-4 rounded-3xl shadow-lg md:max-w-full md:m-2 md:flex md:justify-between">
                    <div className='md:'>
                        <h2 className="text-xl font-bold md:text-4xl">{hotel.name}</h2>
                        <p className="text-gray-700 mb-4 md:text-xl font-semibold">{hotel.contact}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HotelView;
