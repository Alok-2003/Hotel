import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';

const IntrestedClient = () => {
    const firebase = useFirebase();
    const [Intrested, setIntrested] = useState([]);

    useEffect(() => {
        firebase.IntrestedClientData().then((Intrested) => setIntrested(Intrested.docs.map(doc => doc.data())));
    }, []);
    return (
        <div className='h-full font-[gilroy] bg-[url("https://firebasestorage.googleapis.com/v0/b/hotel-60204.appspot.com/o/Background_Images%2FBG_6.jpg?alt=media&token=8f859143-a7b1-4db4-be8e-e228be56a76e")] bg-cover flex justify-center '>
            <div className='w-10/12   mt-20 '>
            <div className="grid grid-cols-4 gap-4 justify-items-center items-center px-4">
                    {/* Display fetched profiles */}
                    {Intrested.map((profile, index) => (
                        <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-md">
                            <h1 className="text-xl font-bold mb-2">{profile.hotelname}</h1>
                            <h1 className="text-xl font-bold mb-2">{profile.name}</h1>
                            <p><strong>City:</strong> {profile.city}</p>
                            <p><strong>Pincode:</strong> {profile.pincode}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Contact:</strong> {profile.contact}</p>
                            <p><strong>Event:</strong> {profile.event}</p>
                            <p><strong>Catering:</strong> {profile.catering}</p>
                            <p><strong>Gathering:</strong> {profile.Gathering}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default IntrestedClient