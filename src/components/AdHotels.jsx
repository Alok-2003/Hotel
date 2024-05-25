import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams hook
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
    return (
        <div className=' ' >
            <Sidebar open={open} setOpen={setOpen} />
            {/* Main content */}
            <div
                className={`transition-all duration-300 ${open ? "md:ml-64 ml-56 mr-4  w-[40%] md:w-[95%]" : "ml-24 mr-2"
                    } md:w-11/12  w-[95%] md:mt `}
            >
                <div className="">
                    <div className=' lg: ' >
                        <Carousel className="" >
                            {slides.map((s) => (
                                <img key={s} src={s} alt="" />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHotels