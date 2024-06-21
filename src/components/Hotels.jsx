import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FooterLp from './FooterLp';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../context/Firebase';
import { selectedCityGlobal } from './HSearch';
import { selectedEventGlobal } from './Requirement';
import { selectedGatheringGlobal } from './Gatherings';
import { selectedCateringGlobal } from './Catering';
import { FaStar } from "react-icons/fa";

const Hotels = () => {
    console.log(selectedCityGlobal);
    console.log(selectedEventGlobal);
    console.log(selectedGatheringGlobal);
    console.log(selectedCateringGlobal);

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [urls, setURLs] = useState([]);

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => {
            const hotelData = hotels.docs.map(doc => doc.data());
            setHotels(hotelData);
            filterAndSetHotels(hotelData);
        });
    }, []);

    useEffect(() => {
        filterAndSetHotels(hotels);
    }, [selectedCityGlobal, selectedEventGlobal, selectedGatheringGlobal, selectedCateringGlobal]);

    const filterAndSetHotels = (hotels) => {
        const filtered = hotels.filter(hotel => {
            const isSelectedCity = !selectedCityGlobal || hotel.city === selectedCityGlobal;
            const isSelectedEvent = !selectedEventGlobal || hotel.eventType === selectedEventGlobal;
    
            // Skip eventStrength and meal filters if the event type is "personal stay"
            if (selectedEventGlobal === "Personal Stay") {
                return isSelectedCity && isSelectedEvent;
            } else {
                const isSelectedGathering = !selectedGatheringGlobal || hotel.eventStrength === selectedGatheringGlobal;
                const isSelectedCatering = selectedCateringGlobal === undefined || hotel.meal === selectedCateringGlobal;
                return isSelectedCity && isSelectedEvent && isSelectedGathering && isSelectedCatering;
            }
        });
    
        setFilteredHotels(filtered);
        fetchImageURLs(filtered);
    };
    

    const fetchImageURLs = (hotels) => {
        if (hotels.length > 0) {
            Promise.all(hotels.map(hotel => firebase.getImageURL(hotel.imageUrls[2])))
                .then(urls => setURLs(urls));
        } else {
            setURLs([]);
        }
    };

    console.log(filteredHotels);

    return (
        <div className='h-screen md:h-full font-[gilroy] gilroyMed bg-custom-bg bg-cover flex justify-center '>
            <div className='w-11/12 h-min md:px-8 mt-20 mb-12 md:mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {filteredHotels.map((hotel, index) => (
                    <Link key={index} to={`/hotelView/${hotel.id}`}>
                        <div className="relative backdrop-blur-sm bg-white/70 rounded-3xl text-xl  overflow-hidden shadow-lg hover:opacity-80 ">
                            {/* Discount Label */}
                            {hotel.discount && (
                                <div className="absolute top-4 right-0">
                                    <div className="bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-bl-lg shadow-lg transform rotate-12 origin-top-right">
                                        {`${hotel.discount}% OFF`}
                                    </div>
                                </div>
                            )}
                            <img src={urls[index]} alt={hotel.fullName} className="w-full h-52 object-cover  " />
                            <div className="flex justify-between items-center mt- my-1 mx-4">
                                <div className="font-bold flex items-center text-2xl ">{hotel.fullName}</div>
                                <div className=" flex  items-cente text-xl gilroyTin mt-[2px]">{hotel.rating}<FaStar className='mt-[1px]' /> </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
