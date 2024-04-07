import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'


const CliProfile = () => {

    const firebase = useFirebase();
    const [profiles, setprofile] = useState([]);
    useEffect(() => {
        firebase.listOfClient().then((profiles) => setprofile(profiles.docs.map(doc => doc.data())));
    }, []);

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
                {profiles.map((p, index) => (

                    <main key={index} className="   justify-center">
                        <div className=" backdrop-blur-sm bg-white/50 rounded-3xl text-xl my-4 h-16 grid grid-cols-6 gap-4 justify-items-center items-center px-4">
                            {/* Image */}
                            <h1> {p.name} </h1>
                            <h1> {p.event} </h1>
                            <h1> {p.meal} </h1>
                            <h1> {p.location} </h1>
                            <h1> {p.contact}</h1>
                            <button className='bg-teal-400   px-4 py-2 rounded-xl' >Edit</button>

                        </div>
                    </main>
                ))}
            </div>

        </div>
    );
};

export default CliProfile;
