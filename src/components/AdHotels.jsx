import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { useFirebase } from '../context/Firebase';

const AdHotels = () => {
    const { hotelId } = useParams(); // Retrieve hotelId from URL parameter
    const firebase = useFirebase();

    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]); // State to store image URLs
    const [hotel, setHotel] = useState(null); // State to store the selected hotel

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            const filteredHotels = hotels.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(hotel => hotel.id === parseInt(hotelId));

            setHotel(filteredHotels[0]);
            console.log(filteredHotels[0]);

            if (filteredHotels.length > 0) {
                const rawUrls = filteredHotels[0].imageUrls;
                const fetchUrls = rawUrls.map(rawUrl => firebase.getImageURL(rawUrl));

                Promise.all(fetchUrls)
                    .then(urls => setSlides(urls))
                    .catch(error => console.error("Error fetching image URLs:", error));
            }
        });
    }, [firebase, hotelId]);

    return (
        <div>
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-64 ml-56 mr-4  w-[40%] md:w-[95%]" : "ml-24 mr-2"
                    } md:w-[81%]  w-[95%] md:mt `}
            >
                <div className="flex">
                    <div className='lg:w-[55%] mt-20'>
                        <Carousel>
                            {slides.map((s) => (
                                <img key={s} src={s} alt="" />
                            ))}
                        </Carousel>
                        <h1 className='text-3xl font-bold underline underline-offset-3' >Booking Histroy</h1>
                    </div>
                    <div className="mt-20 ml-4 w-[50%] text-2xl">
                        <h1 className='text-3xl font-bold underline underline-offset-3' >Hotel detail</h1>
                        {hotel && (
                            <div className="mt-2">
                                <p><strong>Full Name:</strong> {hotel.fullName}</p>
                                <p><strong>Creator Contact:</strong> {hotel.CreatorContact}</p>
                                <p><strong>Location URL:</strong> <a href={hotel.locationUrl} target="_blank" rel="noopener noreferrer">{hotel.locationUrl}</a></p>
                                <p><strong>City:</strong> {hotel.city}</p>
                                <p><strong>Bed Size or Capacity:</strong> {hotel.bedSizeOrCapacity}</p>
                                <p><strong>Rooms Available:</strong> {hotel.roomsAvail}</p>
                                <p><strong>Rooms Area:</strong> {hotel.roomsArea} sq ft</p>
                                <p><strong>Pincode:</strong> {hotel.pincode}</p>
                                <p><strong>Email:</strong> <a href={`mailto:${hotel.email}`}>{hotel.email}</a></p>
                                <p><strong>Room Type:</strong> {hotel.roomType}</p>
                                <p><strong>Room View:</strong> {hotel.roomView}</p>
                                <p><strong>Room Rates:</strong> ₹{hotel.roomRates} per night</p>
                                <p><strong>Number of Guests:</strong> {hotel.numGuests}</p>
                                <p><strong>WhatsApp Number:</strong> {hotel.whatsappNo}</p>
                                <p><strong>Event Facilities:</strong> {hotel.EventFacilities.join(', ')}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHotels;
