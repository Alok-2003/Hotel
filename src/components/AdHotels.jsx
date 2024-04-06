import React, { useState, useEffect } from 'react';

// import Footer from './Footer';
// import FooterLp from './FooterLp';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'

const AdHotels = () => {

    const firebase = useFirebase();
    const [hotels, sethotel] = useState([]);
    useEffect(() => {
        firebase.listOfHotels().then((hotels) => sethotel(hotels.docs.map(doc => doc.data())));
    }, []);

    const Typehotels = [
        { name: "JW Marriott", location: "Location", imageUrl: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?t=st=1709113991~exp=1709117591~hmac=df8851ee7280dc92a328d1fe2e7b9aa479849fe274fa241cbc7afd4290bcb21a&w=740" },
        { name: "Vivanta by Taj", location: "Location", imageUrl: "https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?w=740" },
        { name: "The Leela Palace", location: "Location", imageUrl: "https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?t=st=1710364047~exp=1710367647~hmac=6fdf83eae64bd7de55411b3c8d80ce4273eb3e82d0bfd224b923e54573fcc376&w=740" },
        { name: "ITC Grand Chola", location: "Location", imageUrl: "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?w=740" },
        { name: "The Oberoi Amarvilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/swimming-pool_74190-1977.jpg?t=st=1710364204~exp=1710367804~hmac=2385fcab364a56829f2340952a66eb71138bd441f756002945b4ec59dd2f9433&w=740" },
        { name: "The Oberoi Udaivilas", location: "Location", imageUrl: "https://img.freepik.com/free-photo/urban-city-architecture_649448-5343.jpg?t=st=1710364216~exp=1710367816~hmac=46b5d3f42c3964889a84e3ec8340a20b9379013a3792b67f49318fe416ec1a63&w=740" },
    ];

    return (
        <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center items-center'>
            <div className='w-9/12  justify-center items-center '>
                <div className=" backdrop-blur-sm bg-white/50 rounded-3xl font-bold text-2xl  h-12 flex justify-between items-center px-4">
                    {/* Image */}
                    <h1> Hotel Name </h1>
                    <h1> Event:</h1>
                    <h1> Catering:</h1>
                    <h1> Location:</h1>
                    <h1> Contact:</h1>
                    {/* Description */}

                </div>
                {hotels.map((h, index) => (

                    <main key={index} className="   justify-center">
                        <div className=" backdrop-blur-sm bg-white/50 rounded-3xl text-xl my-4 h-16 flex justify-between items-center px-4">
                            {/* Image */}
                            <h1> {h.name} </h1>
                            <h1> {h.event} </h1>
                            <h1> {h.meal} </h1>
                            <h1> {h.location} </h1>
                            <h1> {h.contact}</h1>
                            {/* Description */}

                        </div>
                    </main>
                ))}
            </div>

        </div>
    );
};

export default AdHotels;
