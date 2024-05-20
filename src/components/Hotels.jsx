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

    console.log(selectedCityGlobal)
    console.log(selectedEventGlobal)
    console.log(selectedGatheringGlobal)
    console.log(selectedCateringGlobal)
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
    // console.log(hotels)
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
    useEffect(() => {
        if (filteredHotels.length > 0) {
            Promise.all(filteredHotels.map(hotel => firebase.getImageURL(hotel.imageUrls[2])))
                .then(urls => setURL(urls));
        }
    }, [filteredHotels]);

    // console.log(filteredHotels)
    // if (filteredHotels.length === 0) {
    //     return (
    //         <div className="h-10 flex justify-center items-center">
    //             <h1>No hotel found</h1>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <div className="h-10 flex justify-center items-center">
    //             <h1>No hotel found</h1>
    //         </div>
    //     );
    // }

    // console.log(hotels)
    return (
        <div className='h-screen md:h-full font-[gilroy] bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center '>
            <div className='w-11/12 h-min md:px-8 mt-20 mb-12 md:mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {filteredHotels.map((hotel, index) => (
                    // <Link key={index} to={`/hotel/${hotel.name}`}>
                    //     <div className="backdrop-blur-sm bg-white/50 rounded-3xl text-xl  overflow-hidden shadow-lg ">
                    //         {/* Image */}
                    //         {/* <img src={url} alt={hotel.name} className="w-full h-64 object-cover" /> */}
                    //         <img src={url && url[index]} alt={hotel.name} className="w-full h-52 object-cover" />
                    //         {/* Hotel name */}
                    //         <div className="my-1 mx-4">
                    //             <div className="font-bold text-2xl ">{hotel.name}</div>
                    //         </div>
                    //     </div>
                    // </Link>
                    <Link key={index} to={`/hotelView/${hotel.id}`}>
                        <div className="backdrop-blur-sm bg-white/50 rounded-3xl text-xl  overflow-hidden shadow-lg hover:opacity-80 ">
                            <img src={url && url[index]} alt={hotel.fullName} className="w-full h-52 object-cover  " />
                            <div className="my-1 mx-4">
                                <div className="font-bold text-2xl ">{hotel.fullName}</div>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default Hotels;
