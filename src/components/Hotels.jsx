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

const Hotels = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const city = selectedCityGlobal;
    const event = selectedEventGlobal;
    const gathering = selectedGatheringGlobal;
    const catering = selectedCateringGlobal;
    const [url, setURL] = useState(null);

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => setHotels(hotels.docs.map(doc => doc.data())));
    }, []);


    // console.log(hotels[0].imageUrls[0])
    const filterHotels = (hotels, city, card, gathering, catering) => {
        return hotels.filter(hotel => {
            const isSelectedCity = !city || hotel.location === city;
            const isSelectedCard = !card || hotel.event === card;
            const isSelectedGathering = !gathering || hotel.Strength === gathering;
            const isSelectedCatering = !catering || hotel.meal === catering;
            return isSelectedCity && isSelectedCard && isSelectedGathering && isSelectedCatering;
        });
    };

    const filteredHotels = filterHotels(hotels, selectedCityGlobal, selectedEventGlobal, selectedGatheringGlobal, selectedCateringGlobal);
    // useEffect(() => {
    //     if (filteredHotels.length > 0) {
    //         firebase.getImageURL(filteredHotels[2].imageUrls[0]).then((url) => setURL(url));
    //     }
    // }, [filteredHotels]);
    useEffect(() => {
        if (filteredHotels.length > 0) {
            Promise.all(filteredHotels.map(hotel => firebase.getImageURL(hotel.imageUrls[2])))
                .then(urls => setURL(urls));
        }
    }, [filteredHotels]);

    if (filteredHotels.length === 0) {
        // Render a message indicating that no hotels were found
        return (
            <div className="h-10 flex justify-center items-center">
                <h1>No hotels found</h1>
            </div>
        );
    }


    return (
        <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center'>
            <div className='w-11/12  mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4'>
                {filteredHotels.map((hotel, index) => (
                    <Link key={index} to={`/hotel/${hotel.name}`}>
                        <div className="backdrop-blur-sm bg-white/50 rounded-3xl text-xl  overflow-hidden shadow-lg ">
                            {/* Image */}
                            {/* <img src={url} alt={hotel.name} className="w-full h-64 object-cover" /> */}
                            <img src={url && url[index]} alt={hotel.name} className="w-full h-52 object-cover" />
                            {/* Hotel name */}
                            <div className="my-1 mx-4">
                                <div className="font-bold text-2xl ">{hotel.name}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
