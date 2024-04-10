import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import FooterLp from './FooterLp';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../context/Firebase';
import { selectedCityGlobal } from './HSearch';
import { selectedCardGlobal } from './Requirement';
import { selectedGatheringGlobal } from './Gatherings';
import { selectedCateringGlobal } from './Catering';

const Hotels = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    const [hotels, sethotel] = useState([]);

    useEffect(() => {
        firebase.listOfHotels().then((hotels) => sethotel(hotels.docs.map(doc => doc.data())));
    }, []);

    const filterHotels = (hotels, city, card, gathering, catering) => {
        return hotels.filter(hotel => {
            const isSelectedCity = !city || hotel.location === city;
            const isSelectedCard = !card || hotel.event === card;
            const isSelectedGathering = !gathering || hotel.Strength === gathering;
            const isSelectedCatering = !catering || hotel.meal === catering;
            return isSelectedCity && isSelectedCard && isSelectedGathering && isSelectedCatering;
        });
    };
    
    const filteredHotels = filterHotels(hotels, selectedCityGlobal, selectedCardGlobal, selectedGatheringGlobal, selectedCateringGlobal);

    console.log(hotels, selectedCityGlobal, selectedCardGlobal, selectedGatheringGlobal, selectedCateringGlobal)
    return (
        <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center '>
            <div className='w-10/12   mt-20 '>
                <div className=" backdrop-blur-sm bg-white/50 rounded-3xl font-bold text-2xl  h-12 grid grid-cols-6 gap-4 justify-items-center items-center px-4">
                    {/* Image */}
                    <h1> Hotel Name </h1>
                    <h1> Event:</h1>
                    <h1> Catering:</h1>
                    <h1> Location:</h1>
                    <h1> Contact:</h1>
                    <Link to={"/admin_create"}>
                        <button className='bg-blue-500  px-2 py-1 rounded-xl' >Create</button>
                    </Link>
                </div>
                {filteredHotels.map((h, index) => (
                    <main key={index} className="   justify-center">
                        <div className=" backdrop-blur-sm bg-white/50 rounded-3xl text-xl my-4 h-16 grid grid-cols-6 gap-4 justify-items-center items-center px-4">
                            {/* Image */}
                            <h1> {h.name} </h1>
                            <h1> {h.event} </h1>
                            <h1> {h.meal} </h1>
                            <h1> {h.location} </h1>
                            <h1> {h.contact}</h1>
                            <button className='bg-teal-400   px-4 py-2 rounded-xl' >Edit</button>
                        </div>
                    </main>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
