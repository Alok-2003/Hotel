import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'
import { useNavigate } from "react-router-dom";


const AdHotels = () => {

    const navigate = useNavigate();
    const firebase = useFirebase();
    const [hotels, sethotel] = useState([]);
    useEffect(() => {
        firebase.listOfHotels().then((hotels) => sethotel(hotels.docs.map(doc => doc.data())));
    }, []);


    const handliViewProfile = () => {
        // Redirect to Client_Profile
        navigate("/Client_Profile");
    };
    const handliViewIntrested = () => {
        // Redirect to Client_Profile
        navigate("/Intrested_Client");
    };

    return (
        <div className='h-full gilroyMed bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center '>
            <div className='md:w-10/12 w-[95%]  mt-20 '>
                <div className=" backdrop-blur-sm bg-white/50 rounded-lg md:rounded-3xl font-bold md:text-2xl text-[0.6rem] h-8 md:h-12 grid grid-cols-6 md:gap-4 justify-items-center items-center px-2 md:px-4">
                    {/* Image */}
                    <h1> Hotel Name </h1>
                    <h1> Event:</h1>
                    <h1> Catering:</h1>
                    <h1> Location:</h1>
                    <h1> Contact:</h1>
                    <Link to={"/admin_create"}>
                        <button className='bg-blue-500 px-1 md:px-2 md:py-1 rounded-xl' >Create</button>
                    </Link>
                </div>
                {hotels.map((h, index) => (

                    <main key={index} className="   justify-center">
                        <div className=" backdrop-blur-sm bg-white/50 rounded-lg md:rounded-3xl text-[0.6rem] md:text-xl my-4 h-10 md:h-16 grid grid-cols-6 md:gap-4 justify-items-center items-center px-2 md:px-4">
                            {/* Image */}
                            <h1> {h.name} </h1>
                            <h1> {h.event} </h1>
                            <h1> {h.meal} </h1>
                            <h1> {h.location} </h1>
                            <h1> {h.contact}</h1>
                            <button className='bg-teal-400   px-2 md:px-2 md:py-1 rounded-xl' >Edit</button>

                        </div>
                    </main>
                ))}
                <button className='bg-yellow-400 hover:bg-yellow-400/60 md:px-4 px-1 md:py-1 rounded-xl md:text-xl text-sm font-bold' onClick={handliViewProfile} >Client Profile</button>
                <button className='bg-green-400 hover:bg-green-400/60 md:px-4 px-1 md:py-1 rounded-xl md:text-xl text-sm font-bold' onClick={handliViewIntrested} >Client Intrested</button>

            </div>

        </div>
    );
};

export default AdHotels;
