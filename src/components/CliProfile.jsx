import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'


const CliProfile = () => {

    const firebase = useFirebase();
    const [profiles, setprofile] = useState([]);

    useEffect(() => {
        firebase.listOfClient().then((profiles) => {
            setprofile(profiles.docs.map(doc => doc.data()))
        }
    )}, []);

    const creatorContacts = profiles.map(profile => profile.CreatorContact);
    console.log(creatorContacts)


    return (
        <div className='h-full font-[gilroy] bg-[url("src/assets/building-night.jpg")] bg-cover flex justify-center '>
            <div className='w-10/12   mt-20 '>
                <div className=" backdrop-blur-sm bg-white/50 rounded-3xl font-bold text-2xl  h-12 grid grid-cols-5 gap-4 justify-items-center items-center px-4">
                    {/* Image */} 
                    <h1> Client Name </h1>
                    <h1> City</h1>
                    <h1> Pincode</h1>
                    <h1> Email</h1>
                    <h1> Contact</h1>
                </div>
                {profiles.map((p, index) => (

                    <main key={index} className="   justify-center">
                        <div className=" backdrop-blur-sm bg-white/50 rounded-3xl text-xl my-4 h-16 grid grid-cols-5 gap-4 justify-items-center items-center px-4">
                            {/* Image */}
                            <h1> {p.name} </h1>
                            <h1> {p.city} </h1>
                            <h1> {p.pincode} </h1>
                            <h1> {p.email} </h1>
                            <h1> {p.contact}</h1>
                        </div>
                    </main>
                ))}
            </div>

        </div>
    );
};

export default CliProfile;
